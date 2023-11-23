import HighlightText from "../highlight_text/HighlightText";
import styles from "./Section.module.css"

const Section = (props) => (
  <div className={styles.section}>
    <h2><HighlightText text={props.title} /></h2>
    <div className={styles.sectionContent}>
      {props.children}
    </div>
  </div>
)

export default Section;