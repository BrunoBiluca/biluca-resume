import styles from "../../../components/section/Section.module.css"
import React from "react";
import Tag from "../../../components/tag/Tag";
import HighlightText from "../../../components/highlight_text/HighlightText";
import Skill from "../../../models/Skill.model";
import { loc } from "../../../locale/LocaleText";
import ResumeComponent from "../../../core/ResumeComponent";
import Profile from "../../../profiles/Profile";

export default function SkillSection({ section, padding }) {
  let categories = []
  for (let i in section.categories) {
    let cat = section.categories[i]
    categories.push({
      key: () => cat["id"],
      isActive: true,
      "category": cat["label"],
      "entries": section.entries.filter(e => e["category_id"] === cat["id"]).map(e => new Skill(e))
    })
  }
  categories = categories.filter(c => c.entries.length > 0)

  categories.forEach(c => console.log(c.key()))
  console.log(categories)

  return <section className={styles.section}>
    <h1 className={styles.sectionTitle}>
      <HighlightText text={section.title} />
    </h1>
    <div className={styles.sectionContent} style={{ "padding": padding, "paddingLeft": "8px" }}>
      {
        categories.map(cat =>
          new ResumeComponent(
            cat,
            <React.Fragment key={cat.key()}>
              <h5 style={{ "border": 0, "margin": ".2em 0" }}>
                {loc(cat.category)}
              </h5>
              <div style={{ "margin": 0 }}>
                {
                  cat.entries.map(e =>
                    new ResumeComponent(e, <Tag key={e.key()} label={e.label} />).render()
                  )
                }
              </div>
            </React.Fragment>
          ).render()
        )
      }
    </div>
  </section>
}
