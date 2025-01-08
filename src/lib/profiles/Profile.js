import Singleton from "../core/abstract/Singleton";

export default class Profile extends Singleton {
  onChangeCallbacks = []

  profiles = []
  activeProfile = { key: "unknow", order: 0 }
  isEditMode = false

  constructor() {
    super()

    this.profiles.push(
      {
        id: "completo",
        name: "Completo",
        canEdit: false,
        hidden_content: [],
        createdAt: Date.now()
      }
    )

    this.activeProfile = this.profiles[0]
  }

  getProfiles() {
    return this.profiles;
  }

  addProfile(profile) {
    this.profiles.push(profile)
    this.setActiveProfile(profile.id)
  }

  setActiveProfile(profileId) {
    console.log("setActiveProfile", profileId)
    this.activeProfile = this.profiles.find(p => p.id === profileId)
    console.log("setActiveProfile", this.activeProfile)
    this.exitEditMode()
  }

  enterEditMode() {
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