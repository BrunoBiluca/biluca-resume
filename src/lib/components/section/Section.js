import HighlightText from "../highlight_text/HighlightText";
import styles from "./Section.module.css"

const Section = ({ section, padding }) => (
  <section className={styles.section}>
    <h2><HighlightText text={section.title} /></h2>
    <div className={styles.sectionContent} style={{ "padding": padding }}>
      {section.entries}
    </div>
  </section>
)

export default Section;