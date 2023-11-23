export default class Resume {
  mainInformation
  workExperiences = []
  certificates = []
  education = []

  constructor(mainInformation) {
    this.mainInformation = mainInformation
  }

  addWorkExperience(entry) {
    this.workExperiences.push(entry)
    return this
  }

  addCertificate(entry) {
    this.certificates.push(entry)
    return this
  }

  addEducation(entry){
    this.education.push(entry)
    return this
  }
}