import Section from "./Section.model"

export default class Resume {
  mainInformation
  contactInfo
  sections = []

  constructor(data) {
    this.type = "Resume"
    this.mainInformation = data["main_information"]
    this.contactInfo = data["contact_information"]

    for (let sectionData of data["sections"]) {
      this.sections.push(new Section(sectionData))
    }
  }
}