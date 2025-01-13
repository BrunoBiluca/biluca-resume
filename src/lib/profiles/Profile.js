import Singleton from "../core/abstract/Singleton";
import ProfileLocalStorage from "./ProfileLocalStorage";

export default class Profile extends Singleton {
  onChangeCallbacks = []

  profiles = []
  activeProfile = { key: "unknow", order: 0 }
  isEditMode = false

  constructor(
    externalProfiles = [],
    isEditModeDisabled = false,
  ) {
    super()

    this.storage = new ProfileLocalStorage()

    this.isEditModeDisabled = isEditModeDisabled

    this.addFixedProfile(
      {
        id: "completo",
        name: "Completo",
        hidden_content: [],
        createdAt: Date.now()
      },
      false
    )

    for (const profile of externalProfiles) {
      this.addFixedProfile(profile, true)
    }

    for (const profile of this.storage.getProfiles()) {
      this.addProfile(profile)
    }

    console.log(this.profiles)

    this.setActiveProfile("completo")
  }

  getProfiles() {
    return this.profiles;
  }

  addFixedProfile(profile, canEdit) {
    this.profiles.push({
      canRemove: false,
      canEdit: canEdit,
      ...profile
    })

    this.setActiveProfile(profile.id)
  }

  addProfile(profile) {
    this.profiles.push({
      canRemove: true,
      canEdit: true,
      hidden_content: [],
      createdAt: Date.now(),
      ...profile
    })

    this.storage.updateProfile(profile)

    this.setActiveProfile(profile.id)
  }

  removeProfile(profileId) {
    let profileIndex = this.profiles.findIndex(p => p.id === profileId)
    let removedProfile = this.profiles[profileIndex]

    if (!removedProfile.canRemove)
      return

    this.profiles = this.profiles.filter(p => p.id !== profileId)
    this.storage.removeProfileRegistry(profileId)
    this.setActiveProfile(this.profiles[profileIndex - 1].id)
  }

  setActiveProfile(profileId) {
    this.activeProfile = this.profiles.find(p => p.id === profileId)
    this.exitEditMode()
  }

  enterEditMode() {
    if (this.isEditModeDisabled) return
    if (!this.activeProfile.canEdit) return

    this.isEditMode = true
    this.runCallbacks()
  }

  exitEditMode() {
    this.isEditMode = false
    this.runCallbacks()
  }

  getActiveProfile() {
    return this.activeProfile;
  }

  hideComponent(componentId) {
    if (!this.isEditMode) return
    this.activeProfile.hidden_content.push(componentId)
    this.storage.updateProfile(this.activeProfile)
    this.runCallbacks()
  }

  showComponent(componentId) {
    if (!this.isEditMode) return
    this.activeProfile.hidden_content = this.activeProfile.hidden_content.filter(c => c !== componentId)
    this.storage.updateProfile(this.activeProfile)
    this.runCallbacks()
  }

  isComponentHidden(componentId) {
    return this.activeProfile.hidden_content.includes(componentId)
  }

  subscribe(callback) {
    this.onChangeCallbacks.push({ key: String(callback), callback })
  }

  runCallbacks() {
    this.onChangeCallbacks.forEach(c => c.callback(this.activeProfile))
  }
}