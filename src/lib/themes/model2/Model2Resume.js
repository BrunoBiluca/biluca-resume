import Page from "../../components/page/Page";
import { cfac } from "../../core/ComponentsFactory";
import { rc } from "../../core/ResumeComponent";
import { loc } from "../../locale/LocaleText";
import { Section } from "../../models";

export default function Model2Resume({ resume }) {
  return <Page>
    <div style={{
      display: "grid",
      gridTemplateColumns: "4fr 2fr",
      gap: "1em",
      height: "calc(100% - 1.6cm)",
    }}>
      <div>
        {cfac().render(resume.mainInformation)}
      </div>
      <div
        style={{
          backgroundColor: "#b7610733",
          height: "100%"
        }}
      >
        {
          rc(
            new Section(resume.contactInfo),
            <section
              style={{ padding: "1em" }}
            >
              <h2
                style={{
                  color: "var(--font-highlight-color)",
                }}
              >
                {loc(["CONTATO", "CONTACT"])}
              </h2>
              <hr
                style={{
                  border: "1px solid #0003"
                }}
              />
              {cfac().render(resume.contactInfo)}
            </section>
          ).render()
        }
      </div>
    </div>
  </Page>
}