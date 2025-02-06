import Page from "../../components/page/Page";
import { cfac } from "../../core/ComponentsFactory";
import { rc } from "../../core/ResumeComponent";
import { Section as SectionModel } from "../../models";
import Section from "./components/Section";
import SkillSection from "./components/SkillSection";

export default function Model2Resume({ resume }) {
  let contactInfo = new SectionModel(resume.contactInfo)
  let skillSection = resume.sections.find(s => s.type == "Skill")
  return <Page>
    <div style={{
      display: "grid",
      gridTemplateColumns: "4fr 2fr",
      gap: "1em",
      height: "calc(100% - 1.6cm)",
    }}>
      <div>
        {cfac().render(resume.mainInformation)}
      </div>
      <div
        style={{
          backgroundColor: "#b761071a",
          height: "100%"
        }}
      >
        {
          rc(
            contactInfo,
            <Section key={contactInfo.key()} section={contactInfo} />
          )
        }
        {
          rc(
            skillSection,
            <SkillSection key={skillSection.key()} section={skillSection} />
          )
        }
      </div>
    </div>
  </Page>
}