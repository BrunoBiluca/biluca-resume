import Page from "../../components/page/Page"
import GridColumns, { Main, Side } from "../../components/containers/GridColumns"
import Section from "../../components/section/Section"
import { cfac } from "../../core/ComponentsFactory"
import ResumeComponent from "../../core/ResumeComponent"
import SkillSection from "./components/SkillSection"

export default function OnePagerResume({ resume }) {
  return <Page background={resume.theme.background}>
    {cfac().render(resume.mainInformation)}
    <GridColumns>
      <Side key={"side"}>
        {cfac().render(resume.contactInfo)}
        {
          resume.sections
            ?.filter(s => s.theme && s.theme["place"] === "side")
            .map(sec => new ResumeComponent(sec,
              sec["type"] === "Skill" ?
                <SkillSection key={sec.key()} section={sec} padding={0} />
                : <Section key={sec.key()} section={sec} padding={0} />
            ).render())
        }
      </Side>
      <Main key={"main"}>
        {
          resume.sections
            ?.filter(s => !s.theme)
            .map(sec => new ResumeComponent(sec,
              sec["type"] === "Skill" ?
                <SkillSection key={sec.key()} section={sec} padding={0} />
                : <Section key={sec.key()} section={sec} />
            ).render())
        }
      </Main>
    </GridColumns>
  </Page>
}