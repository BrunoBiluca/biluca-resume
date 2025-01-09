import Profile from "./Profile";

export default class ProfileSave {

  copy(profile) {
    return JSON.parse(JSON.stringify(profile))
  }

  save() {
    const activeProfile = this.copy(Profile.i().getActiveProfile())
    delete activeProfile.canEdit

    const file = new Blob([JSON.stringify(activeProfile)], { type: 'text/plain' });
    const url = URL.createObjectURL(file);
    const link = document.createElement('a');
    link.href = url;
    link.download = activeProfile.name + '.profile.json';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  }
}