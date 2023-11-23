import React from "react";
import styles from "./Resume.module.css"
import Page from "./components/page/Page";
import MainInformation from "./components/main_information/MainInformation";
import Section from "./components/section/Section";

const Resume = ({ resume }) => (
  <div className={styles.resume}>
    <Page>
      <MainInformation info={resume.mainInformation} />
      <Section title="Últimas experiências">

      </Section>
    </Page>
  </div>
);

export default Resume;