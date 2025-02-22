import Singleton from "../core/abstract/Singleton";
import ProfileLocalStorage from "./ProfileLocalStorage";
import { v4 as uuidv4 } from 'uuid';

export default class Profile extends Singleton {
  onChangeCallbacks = []

  profiles = []
  activeProfile = { key: "unknow", order: 0 }
  isEditMode = false

  constructor(
    externalProfiles = [],
    isEditModeDisabled = false,
    authorKey = undefined,
  ) {
    super()

    this.storage = new ProfileLocalStorage()

    this.authorKey = authorKey

    if (authorKey !== undefined && this.storage.getAuthorKey() === authorKey) {
      this.isEditModeDisabled = false
    }
    else {
      this.isEditModeDisabled = isEditModeDisabled
    }

    this.addFixedProfile(
      {
        id: "completo",
        name: "Completo",
        goal: [],
        hidden_content: [],
        createdAt: Date.now()
      },
      false
    )

    for (const profile of externalProfiles) {
      this.addFixedProfile(profile, true)
    }

    for (const profile of this.storage.getProfiles()) {
      this.profiles.push(profile)
    }

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

  addProfile() {

    let newProfileName = "Novo perfil"

    const count = this.profiles.filter(p => p.name.startsWith("Novo perfil")).length + 1
    if (count > 1) {
      newProfileName += " " + count
    }

    const newProfile = {
      id: uuidv4(),
      canRemove: true,
      canEdit: true,
      goal: [],
      hidden_content: [],
      name: newProfileName,
      createdAt: Date.now()
    }

    this.profiles.push(newProfile)

    this.storage.updateProfile(newProfile)

    this.setActiveProfile(newProfile.id)
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

    if (this.activeProfile.canRemove)
      this.storage.updateProfile(this.activeProfile)
    this.runCallbacks()
  }

  showComponent(componentId) {
    if (!this.isEditMode) return
    this.activeProfile.hidden_content = this.activeProfile.hidden_content.filter(c => c !== componentId)

    if (this.activeProfile.canRemove)
      this.storage.updateProfile(this.activeProfile)
    this.runCallbacks()
  }

  isComponentHidden(componentId) {
    return this.activeProfile.hidden_content.includes(componentId)
  }

  getGoal() {
    return this.activeProfile.goal
  }

  setGoal(language_order, goal) {
    this.activeProfile.goal[language_order] = goal

    if (this.activeProfile.canRemove)
      this.storage.updateProfile(this.activeProfile)
    this.runCallbacks()
  }

  subscribe(callback) {
    this.onChangeCallbacks.push({ key: String(callback), callback })
  }

  runCallbacks() {
    this.onChangeCallbacks.forEach(c => c.callback(this.activeProfile))
  }

  setName(newName) {
    this.activeProfile.name = newName

    if (this.activeProfile.canRemove)
      this.storage.updateProfile(this.activeProfile)
    this.runCallbacks()
  }

  duplicateActive() {

    let activeProfile = this.getActiveProfile()

    const copiedProfile = {
      id: uuidv4(),
      canRemove: true,
      canEdit: true,
      goal: activeProfile.goal,
      hidden_content: activeProfile.hidden_content,
      name: activeProfile.name + " - cópia",
      createdAt: Date.now(),
    }

    this.profiles.push(copiedProfile)

    this.storage.updateProfile(copiedProfile)

    this.setActiveProfile(copiedProfile.id)
  }

  enterAuthorKey(authorKey) {
    if (authorKey !== this.authorKey) return

    this.storage.registerAuthorKey(authorKey)
    this.isEditModeDisabled = false
  }
}