import React from "react";
import styles from "./Resume.module.css"
import Page from "./components/page/Page";
import MainInformation from "./components/main_information/MainInformation";
import Section from "./components/section/Section";
import WorkExperience from "./components/work_experience/WorkExperience";
import Certificate from "./components/certificate/Certificate";
import Education from "./components/education/Education";
import Theme from "./Theme";
import Skill from "./components/skill/Skill";

function Resume({ resume, theme }) {
  let usedTheme = theme != null ? theme : new Theme()

  return <div className={styles.resume} style={usedTheme.css()} >
    <Page>
      <MainInformation info={resume.mainInformation} />
      <Section title="Últimas experiências">
        {
          resume.workExperiences.map(wexp =>
            <WorkExperience workExperience={wexp} key={wexp.key()} />
          )
        }
      </Section>
      <Section title="Certificados relevantes">
        {
          resume.certificates.map(cert =>
            <Certificate certificate={cert} key={cert.key()} />
          )
        }
      </Section>
      <Section title="Educação">
        {
          resume.education.map(edu =>
            <Education education={edu} key={edu.key()} />
          )
        }
      </Section>
      <Section title="Habilidades">
        {
          resume.skills.map(skill =>
            <Skill skill={skill} key={skill.key()} />
          )
        }
      </Section>
    </Page>
  </div>
}

export default Resume;