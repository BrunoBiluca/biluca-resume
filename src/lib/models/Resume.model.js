import ModelsFactory from "../core/ModelsFactory"
import Section from "./Section.model"

export default class Resume {
  mainInformation
  contactInfo
  sections = []

  constructor(data) {
    this.type = "Resume"
    var factory = ModelsFactory.i()
    this.mainInformation = factory.instantiate(data["main_information"], "MainInformation")

    this.contactInfo = factory.instantiate(data["contact_information"], "ContactInformation")

    for (let sectionData of data["sections"]) {
      let section = new Section(sectionData)
      for (let entry of sectionData["entries"]) {
        section.add(factory.instantiate(entry, section.type))
      }
      this.sections.push(section)
    }
  }
}