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

export default class OnePagerModels extends InstantiationMapper {
  _create(mapper) {
    mapper["Resume"] = Resume
    mapper["MainInformation"] = MainInformation
    mapper["WorkExperience"] = WorkExperience
    mapper["Skill"] = Skill
    mapper["Certificate"] = Certificate
    mapper["Education"] = Education
    mapper["Language"] = Language
    mapper["Game"] = Game
    mapper["ContactInformation"] = ContactInfo
    mapper["Mail"] = Mail
    mapper["Phone"] = Phone
    mapper["Location"] = Location
    mapper["Github"] = Github
    mapper["LinkedIn"] = LinkedIn
    mapper["Website"] = Website
  }

  instantiate(data) {
    let type = data["type"]
    return new this.mapper[type](data)
  }
}