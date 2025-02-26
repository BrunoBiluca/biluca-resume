import { loc } from "../../../locale/LocaleText";

export default function Section({ title, style, children }) {
  return <section
    style={{...style}}
  >
    <h2
      style={{
        color: "var(--font-highlight-color)",
      }}
    >
      {loc(title)}
    </h2>
    <hr
      style={{
        border: "1px solid #0003"
      }}
    />
    {children}
  </section>
}