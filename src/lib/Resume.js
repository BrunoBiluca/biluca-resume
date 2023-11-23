import React from "react";
import styles from "./Resume.module.css"
import Page from "./components/page/Page";
import MainInformation from "./components/main_information/MainInformation";
import Section from "./components/section/Section";
import { WorkExperience } from "./components/work_experience/WorkExperience";

const Resume = ({ resume }) => (
  <div className={styles.resume}>
    <Page>
      <MainInformation info={resume.mainInformation} />
      <Section title="Últimas experiências">
        {
          resume.workExperiences.map(wexp =>
            <WorkExperience workExperience={wexp} key={wexp.title} />
          )
        }
      </Section>
    </Page>
  </div>
);

export default Resume;