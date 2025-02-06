import { cfac } from "../../../core/ComponentsFactory";

export default function Section({ section }) {
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
    {cfac().render(section)}
  </section>
}