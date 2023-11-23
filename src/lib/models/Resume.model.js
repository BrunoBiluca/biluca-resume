export default class Resume {
  mainInformation
  workExperiences = []

  constructor(mainInformation) {
    this.mainInformation = mainInformation
  }

  addWorkExperience(entry) {
    return this.workExperiences.push(entry)
  }
}