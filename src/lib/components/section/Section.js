import HighlightText from "../highlight_text/HighlightText";
import styles from "./Section.module.css"

const Section = (props) => (
  <div className={styles.section}>
    <h2><HighlightText text={props.title} /></h2>
    <div className={styles.sectionContent}>
      {
        props.children?.map(c =>
          <div key={c} style={{ margin: "1em 0" }}>
            {c}
          </div>
        )
      }
    </div>
  </div>
)

export default Section;