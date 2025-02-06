import { rc } from "../../../core/ResumeComponent"
import { loc } from "../../../locale/LocaleText"
import { Skill } from "../../../models"

export default function SkillSection({ section }) {
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

  return <section
    style={{ padding: "1em" }}
  >
    <h2
      style={{
        color: "var(--font-highlight-color)",
      }}
    >
      {section.title}
    </h2>
    <hr
      style={{
        border: "1px solid #0003"
      }}
    />
    {
      categories.map(cat =>
        rc(
          cat,
          <div key={cat.key()}>
            <h5
              style={{
                border: 0,
                margin: ".2em 0",
                fontWeight: "normal",
                fontStyle: "italic"
              }}
            >
              {loc(cat.category)}
            </h5>
            <ul style={{ margin: 0, marginBottom: "1em" }}>
              {
                cat.entries.map(e => rc(
                  e,
                  <li 
                    key={e.key()}
                    style={{
                      listStyle: "inside",
                      fontSize: "var(--font-size-text)"
                    }}
                  >
                    {e.label}
                  </li>
                ))
              }
            </ul>
          </div>
        )
      )
    }
  </section>

}