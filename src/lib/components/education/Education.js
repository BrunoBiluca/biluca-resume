import FlexTwoColumns, { Main, Side } from "../containers/FlexTwoColumns"
import HighlightText from "../highlight_text/HighlightText"
import styles from "./Education.module.css"

export default function Education({ education }) {
  return <FlexTwoColumns>
    <Main>
      <h3 className={styles.certificateTitle}>{education.title}</h3>
      <p>{education.description}</p>
    </Main>
    <Side>
      <div className={styles.certificateSideContent}>
        <p><HighlightText text={education.period()} /></p>
        <p><HighlightText text={education.location} /></p>
      </div>
    </Side>
  </FlexTwoColumns>
}