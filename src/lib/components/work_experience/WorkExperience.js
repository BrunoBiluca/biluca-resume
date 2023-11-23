import FlexTwoColumns, { Main, Side } from "../containers/FlexTwoColumns";
import HighlightText from "../highlight_text/HighlightText";
import styles from "./WorkExperience.module.css"
import { WorkExperienceTitle } from "./WorkExperienceTitle";

export const WorkExperience = ({ workExperience }) => {
  return (
    <FlexTwoColumns>
      <Main>
        <WorkExperienceTitle workExperience={workExperience} />
        <div className={styles.workExperienceContent}>
          {workExperience.description}
        </div>
      </Main>
      <Side>
        < div className={styles.workExperienceSideContent} >
          <p><HighlightText text={workExperience.period()} /></p>
          <p><HighlightText text={workExperience.companyLocation} /></p>
        </div >
      </Side>
    </FlexTwoColumns>
  );
};