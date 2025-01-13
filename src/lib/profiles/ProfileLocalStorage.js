export default class ProfileLocalStorage {
  constructor() {
  }

  updateProfile(profile) {
    this.addProfileRegistry(profile.id)
    localStorage.setItem("profile." + profile.id, JSON.stringify(profile))
  }

  addProfileRegistry(profileId) {
    let profiles = this.getProfileRegistry()

    if (profiles.includes(profileId))
      return

    profiles.push(profileId)
    localStorage.setItem("profiles", JSON.stringify(profiles))
  }

  removeProfileRegistry(profileId) {
    let profiles = this.getProfileRegistry()
    profiles = profiles.filter(p => p !== profileId)
    localStorage.setItem("profiles", JSON.stringify(profiles))
    localStorage.removeItem("profile." + profileId)
  }

  getProfileRegistry() {
    if (!localStorage.getItem("profiles")) {
      localStorage.setItem("profiles", JSON.stringify([]))
      return []
    }
    return JSON.parse(localStorage.getItem("profiles"))
  }

  getProfiles() {
    let profilesIds = this.getProfileRegistry()

    let profiles = []
    for (const profileId of profilesIds) {
      let profile = JSON.parse(localStorage.getItem("profile." + profileId))
      if (profile) {
        profiles.push(profile)
      }
    }
    return profiles
  }
}