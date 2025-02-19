import ResumeTheme from "./ResumeTheme"
import Section from "./sections/Section.model"
import SkillSection from "./sections/SkillSection.model"

export default class Resume {
  mainInformation
  contactInfo
  sections = []

  constructor(data) {
    this.type = "Resume"
    this.mainInformation = data["main_information"]
    this.contactInfo = data["contact_information"]

    if (data["theme"])
      this.theme = new ResumeTheme(data["theme"])

    for (let sectionData of data["sections"]) {
      if (sectionData["type"] === "Skill")
        this.sections.push(new SkillSection(sectionData))
      else
        this.sections.push(new Section(sectionData))
    }
  }
}

