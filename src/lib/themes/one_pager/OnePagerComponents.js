import OnePagerResume from "./OnePagerResume"
import Resume from "../../models/Resume.model"
import MainInformation from "../../components/main_information/MainInformation"
import MainInformationModel from "../../models/MainInformation.model"
import Skill from "./components/skill/Skill"
import SkillModel from "../../models/Skill.model"
import WorkExperience from "./components/work_experience/WorkExperience"
import WorkExperienceModel from "../../models/WorkExperience.model"
import Education from "./components/education/Education"
import EducationModel from "../../models/Education.model"
import Language from "./components/Language"
import LanguageModel from "../../models/Language.model"
import Game from "./components/game/Game"
import GameModel from "../../models/Game.model"
import { Mail } from "../../components/contact_information/Mail"
import MailModel from "../../models/Mail.model"
import { Phone } from "../../components/contact_information/Phone"
import PhoneModel from "../../models/Phone.model"
import { Location } from "../../components/contact_information/Location"
import LocationModel from "../../models/Location.model"
import { Github } from "../../components/contact_information/Github"
import GithubModel from "../../models/Github.model"
import { LinkedIn } from "../../components/contact_information/LinkedIn"
import LinkedInModel from "../../models/LinkedIn.model"
import { Website } from "../../components/contact_information/Website"
import WebsiteModel from "../../models/Website.model"
import Certificate from "./components/certificate/Certificate"
import CertificateModel from "../../models/Certificate.model"
import ContactInformation from "../../components/contact_information/ContactInformation"
import ContactInfo from "../../models/ContactInfo.model"
import BaseComponent from "../../core/BaseComponent"
import ComponentsFactory from "../../core/ComponentsFactory"

export default class OnePagerComponents extends ComponentsFactory {

  _create(m) {
    m["Resume"]
      = this._map(OnePagerResume, Resume, (m) => ({ resume: m }))
    m["ContactInformation"]
      = this._map(ContactInformation, ContactInfo, (m) => ({ contactInfo: m }))
    m["MainInformation"]
      = this._map(MainInformation, MainInformationModel, (m) => ({ info: m }))
    m["WorkExperience"]
      = this._map(WorkExperience, WorkExperienceModel, (m) => ({ workExperience: m }))
    m["Skill"]
      = this._map(Skill, SkillModel, (m) => ({ skill: m }))
    m["Certificate"]
      = this._map(Certificate, CertificateModel, (m) => ({ certificate: m }))
    m["Education"]
      = this._map(Education, EducationModel, (m) => ({ education: m }))
    m["Language"]
      = this._map(Language, LanguageModel, (m) => ({ language: m }))
    m["Game"]
      = this._map(Game, GameModel, (m) => ({ game: m }))
    m["Mail"]
      = this._map(Mail, MailModel, (m) => ({ email: m.email, label: m.email }))
    m["Phone"]
      = this._map(Phone, PhoneModel, (m) => ({ number: m.number }))
    m["Location"]
      = this._map(Location, LocationModel, (m) => ({ place: m.place, url: m.googleMaps }))
    m["Github"]
      = this._map(Github, GithubModel, (m) => ({ github: m.profile }))
    m["LinkedIn"]
      = this._map(LinkedIn, LinkedInModel, (m) => ({ profile: m.profile }))
    m["Website"]
      = this._map(Website, WebsiteModel, (m) => ({ url: m.url }))
  }

  _map(comp, model, mapProps) {
    return (data) => {
      let instance = new model(data)
      let component = comp(mapProps(instance))
      return new BaseComponent(instance, component)
    }
  }
}