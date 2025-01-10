import Singleton from "../core/abstract/Singleton";

export default class Profile extends Singleton {
  onChangeCallbacks = []

  profiles = []
  activeProfile = { key: "unknow", order: 0 }
  isEditMode = false

  constructor(profiles = [], isEditModeDisabled = false) {
    super()

    this.isEditModeDisabled = isEditModeDisabled

    this.addProfile(
      {
        id: "completo",
        name: "Completo",
        canEdit: false,
        canRemove: false,
        hidden_content: [],
        createdAt: Date.now()
      }
    )

    for (const profile of profiles) {
      this.addProfile({ canRemove: false, canEdit: true, ...profile })
    }

    this.setActiveProfile("completo")
  }

  getProfiles() {
    return this.profiles;
  }

  addProfile(profile) {
    this.profiles.push({
      canRemove: true,
      canEdit: true,
      hidden_content: [],
      createdAt: Date.now(),
      ...profile
    })
    this.setActiveProfile(profile.id)
  }

  removeProfile(profileId) {
    let profileIndex = this.profiles.findIndex(p => p.id === profileId)
    let removedProfile = this.profiles[profileIndex]

    if (!removedProfile.canRemove)
      return

    this.profiles = this.profiles.filter(p => p.id !== profileId)
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
    this.runCallbacks()
  }

  showComponent(componentId) {
    if (!this.isEditMode) return
    this.activeProfile.hidden_content = this.activeProfile.hidden_content.filter(c => c !== componentId)
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