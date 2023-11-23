import React from "react";
import styles from "./Resume.module.css"
import Page from "./components/page/Page";
import Section from "./components/section/Section";
import Theme from "./Theme";

function Resume({ resume, theme }) {
  let usedTheme = theme != null ? theme : new Theme()

  return <div className={styles.resume} style={usedTheme.css()} >
    <Page>
      {resume.mainInformation}
      {
        resume.sections?.map(sec =>
          <Section key={sec.title} title={sec.title}>
            {sec.entries}
          </Section>
        )
      }
    </Page>
  </div>
}

export default Resume;