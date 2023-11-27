import OnePagerResume from "./OnePagerResume"
import MainInformation from "../../components/main_information/MainInformation"
import Skill from "./components/skill/Skill"
import WorkExperience from "./components/work_experience/WorkExperience"
import Education from "./components/education/Education"
import Language from "./components/Language"
import Game from "./components/game/Game"
import { Mail } from "../../components/contact_information/Mail"
import { Phone } from "../../components/contact_information/Phone"
import { Location } from "../../components/contact_information/Location"
import { Github } from "../../components/contact_information/Github"
import { LinkedIn } from "../../components/contact_information/LinkedIn"
import { Website } from "../../components/contact_information/Website"
import Certificate from "./components/certificate/Certificate"
import InstantiationMapper from "../../core/abstract/InstantiationMapper"

export default class OnePagerComponents extends InstantiationMapper {

  _create(mapper) {
    mapper["Resume"] = (resume) => OnePagerResume({ resume: resume })
    mapper["MainInformation"] = (info) => MainInformation({ info })
    mapper["WorkExperience"] = (data) => WorkExperience({ workExperience: data })
    mapper["Skill"] = (data) => Skill({ skill: data })
    mapper["Certificate"] = (data) => Certificate({ certificate: data })
    mapper["Education"] = (data) => Education({ education: data })
    mapper["Language"] = (data) => Language({ language: data })
    mapper["Game"] = (data) => Game({ game: data })
    mapper["Mail"] = (data) => Mail({ email: data.email, label: data.email })
    mapper["Phone"] = (data) => Phone({ number: data.number })
    mapper["Location"] = (data) => Location({ place: data.place, url: data.googleMaps })
    mapper["Github"] = (data) => Github({ github: data.profile })
    mapper["LinkedIn"] = (data) => LinkedIn({ profile: data.profile })
    mapper["Website"] = (data) => Website({ url: data.url })
  }

  instantiate(data) {
    let type = data["type"]
    return this.mapper[type](data)
  }
}