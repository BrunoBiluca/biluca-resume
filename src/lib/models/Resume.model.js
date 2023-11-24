import ResumeFactory from "../ResumeFactory"
import ContactInfo from "./ContactInfo.model"
import Section from "./Section.model"

export default class Resume {
  mainInformation
  sections = []

  constructor(data) {
    var factory = new ResumeFactory()
    this.mainInformation = factory.createEntry("MainInformation", data["main_information"])

    this.contactInfo = new ContactInfo(data["contact_information"])

    for (let sectionData of data["sections"]) {
      let section = new Section(sectionData["title"])
      for (let entry of sectionData["entries"]) {
        section.add(factory.createEntry(sectionData["type"], entry))
      }
      this.sections.push(section)
    }
  }
}