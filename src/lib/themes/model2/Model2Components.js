import ComponentsFactory from "../../core/ComponentsFactory";
import MainInformation from "./components/MainInformation";
import ContactInformation from "../../components/contact_information/ContactInformation";
import { Mail } from "../../components/contact_information/Mail"
import { Phone } from "../../components/contact_information/Phone"
import { Location } from "../../components/contact_information/Location"
import { Github } from "../../components/contact_information/Github"
import { LinkedIn } from "../../components/contact_information/LinkedIn"
import { Website } from "../../components/contact_information/Website"


import {
  Certificate as CertificateModel,
  ContactInfo,
  Education as EducationModel,
  Game as GameModel,
  Github as GithubModel,
  Language as LanguageModel,
  LinkedIn as LinkedInModel,
  Location as LocationModel,
  Mail as MailModel,
  MainInformation as MainInformationModel,
  Phone as PhoneModel,
  Skill as SkillModel,
  Website as WebsiteModel,
  WorkExperience as WorkExperienceModel
} from "../../models"
import ResumeComponent from "../../core/ResumeComponent";


export default class Model2Components extends ComponentsFactory {

  _create(resumeConfig) {
    resumeConfig["MainInformation"]
      = this._map(MainInformation, MainInformationModel, (m) => ({ info: m }))
    resumeConfig["ContactInformation"]
      = this._map(ContactInformation, ContactInfo, (m) => ({ contactInfo: m }))
    // resumeConfig["WorkExperience"]
    //   = this._map(WorkExperience, WorkExperienceModel, (m) => ({ workExperience: m }))
    // resumeConfig["Skill"]
    //   = this._map(Tag, SkillModel, (m) => ({ label: m.label }))
    // resumeConfig["Certificate"]
    //   = this._map(Certificate, CertificateModel, (m) => ({ certificate: m }))
    // resumeConfig["Education"]
    //   = this._map(Education, EducationModel, (m) => ({ education: m }))
    // resumeConfig["Language"]
    //   = this._map(Language, LanguageModel, (m) => ({ language: m }))
    // resumeConfig["Game"]
    //   = this._map(Game, GameModel, (m) => ({ game: m }))
    resumeConfig["Mail"]
      = this._map(Mail, MailModel, (m) => ({ email: m.email, label: m.email }))
    resumeConfig["Phone"]
      = this._map(Phone, PhoneModel, (m) => ({ number: m.number }))
    resumeConfig["Location"]
      = this._map(Location, LocationModel, (m) => ({ place: m.place, url: m.googleMaps }))
    resumeConfig["Github"]
      = this._map(Github, GithubModel, (m) => ({ github: m.profile }))
    resumeConfig["LinkedIn"]
      = this._map(LinkedIn, LinkedInModel, (m) => ({ profile: m.profile }))
    resumeConfig["Website"]
      = this._map(Website, WebsiteModel, (m) => ({ url: m.url }))
  }

  _map(comp, model, mapProps) {
    return (data) => {
      let dataModel = new model(data)
      let component = comp(mapProps(dataModel))
      return new ResumeComponent(dataModel, component)
    }
  }
}