import React from "react";
import styles from "./Resume.module.css"
import Page from "./components/page/Page";
import Section from "./components/section/Section";
import Theme from "./Theme";
import FlexTwoColumns, { Main, Side } from "./components/containers/FlexTwoColumns";
import ContactInformation from "./components/contact_information/ContactInformation";

function Resume({ resume, theme }) {
  let usedTheme = theme != null ? theme : new Theme()

  return <div className={styles.resume} style={usedTheme.css()} >
    <Page>
      {resume.mainInformation}
      <FlexTwoColumns>
        <Side>
          <ContactInformation contactInfo={resume.contactInfo} />
          {
            resume.sections
              ?.filter(s => s.theme && s.theme["place"] === "side")
              .map(sec =>
                <Section key={sec.key()} section={sec} padding={0} />
              )
          }
        </Side>
        <Main>
          {
            resume.sections
              ?.filter(s => !s.theme)
              .map(sec =>
                <Section key={sec.key()} section={sec} />
              )
          }
        </Main>
      </FlexTwoColumns>
    </Page>
  </div>
}

export default Resume;