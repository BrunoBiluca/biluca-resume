import ModelsFactory from "../core/ModelsFactory"

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
      let section = factory.instantiate(sectionData, "Section")
      for (let entry of sectionData["entries"]) {
        section.add(factory.instantiate(entry, sectionData["type"]))
      }
      this.sections.push(section)
    }
  }
}