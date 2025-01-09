import Singleton from "../core/abstract/Singleton";

export default class Profile extends Singleton {
  onChangeCallbacks = []

  profiles = []
  activeProfile = { key: "unknow", order: 0 }
  isEditMode = false

  constructor() {
    super()

    this.addProfile(
      {
        id: "completo",
        name: "Completo",
        canEdit: false,
        hidden_content: [],
        createdAt: Date.now()
      }
    )
  }

  getProfiles() {
    return this.profiles;
  }

  addProfile(profile) {
    this.profiles.push(profile)
    this.setActiveProfile(profile.id)
  }

  setActiveProfile(profileId) {
    this.activeProfile = this.profiles.find(p => p.id === profileId)
    this.exitEditMode()
  }

  enterEditMode() {
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

  subscribe(callback) {
    this.onChangeCallbacks.push({ key: String(callback), callback })
  }

  runCallbacks() {
    this.onChangeCallbacks.forEach(c => c.callback(this.activeProfile))
  }
}