import React from "react";
import ComponentsFactory from "../../core/ComponentsFactory";
import HighlightText from "../highlight_text/HighlightText";
import styles from "./Section.module.css"

const Section = ({ section, padding }) => (
  <section>
    <h1 className={styles.sectionTitle}><HighlightText text={section.title} /></h1>
    <div className={styles.sectionContent} style={{ "padding": padding }}>
      {section.entries.map(
        e => <React.Fragment key={e.key()}>{ComponentsFactory.i().instantiate(e)}</React.Fragment>
      )}
    </div>
  </section>
)

export default Section;