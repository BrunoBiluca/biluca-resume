import Resume from "../../models/Resume.model"
import Mail from "../../models/Mail.model"
import Location from "../../models/Location.model"
import Phone from "../../models/Phone.model"
import Github from "../../models/Github.model"
import LinkedIn from "../../models/LinkedIn.model"
import Website from "../../models/Website.model"
import MainInformation from "../../models/MainInformation.model"
import WorkExperience from "../../models/WorkExperience.model"
import Skill from "../../models/Skill.model"
import Certificate from "../../models/Certificate.model"
import Education from "../../models/Education.model"
import Game from "../../models/Game.model"
import Language from "../../models/Language.model"
import ContactInfo from "../../models/ContactInfo.model"
import InstantiationMapper from "../../core/abstract/InstantiationMapper"
import Section from "../../models/Section.model"

export default class OnePagerModels extends InstantiationMapper {
  _create(mapper) {
    mapper["Resume"] = (d) => new Resume(d)
    mapper["Section"] = (d) => {
      d["theme_mapper"] = (theme) => {
        return { onSide: theme && theme["place"] === "side" }
      }
      return new Section(d)
    }
    mapper["MainInformation"] = (d) => new MainInformation(d)
    mapper["WorkExperience"] = (d) => new WorkExperience(d)
    mapper["Skill"] = (d) => new Skill(d)
    mapper["Certificate"] = (d) => new Certificate(d)
    mapper["Education"] = (d) => new Education(d)
    mapper["Language"] = (d) => new Language(d)
    mapper["Game"] = (d) => new Game(d)
    mapper["ContactInformation"] = (d) => new ContactInfo(d)
    mapper["Mail"] = (d) => new Mail(d)
    mapper["Phone"] = (d) => new Phone(d)
    mapper["Location"] = (d) => new Location(d)
    mapper["Github"] = (d) => new Github(d)
    mapper["LinkedIn"] = (d) => new LinkedIn(d)
    mapper["Website"] = (d) => new Website(d)
  }
}