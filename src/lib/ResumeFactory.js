import MainInformation from "./components/main_information/MainInformation"
import MainInformationModel from "./models/MainInformation.model"
import WorkExperience from "./themes/one_pager/components/work_experience/WorkExperience"
import WorkExperienceModel from "./models/WorkExperience.model"
import Skill from "./themes/one_pager/components/skill/Skill"
import SkillModel from "./models/Skill.model"
import Certificate from "./themes/one_pager/components/certificate/Certificate"
import CertificateModel from "./models/Certificate.model"
import Education from "./themes/one_pager/components/education/Education"
import EducationModel from "./models/Education.model"
import Language from "./models/Language.model"
import GameModel from "./models/Game.model"
import Game from "./themes/one_pager/components/game/Game"

export default class ResumeFactory {
  createEntry(type, data) {
    if (type == "MainInformation")
      return <MainInformation info={new MainInformationModel(data)} />

    if (type == "WorkExperience") {
      let wexp = new WorkExperienceModel(data)
      return <WorkExperience key={wexp.key()} workExperience={wexp} />
    }

    if (type == "Skill") {
      let skill = new SkillModel(data)
      return <Skill key={skill.key()} skill={skill} />
    }

    if (type == "Certificate") {
      let certificate = new CertificateModel(data)
      return <Certificate key={certificate.key()} certificate={certificate} />
    }

    if (type == "Education") {
      let education = new EducationModel(data)
      return <Education key={education.key()} education={education} />
    }

    if (type == "Languages") {
      let language = new Language(data)
      return <p key={language.key()}><strong>{language.label} ({language.level})</strong></p>
    }

    if (type == "Game") {
      let game = new GameModel(data)
      return <Game key={game.key()} game={game} />
    }
  }
}