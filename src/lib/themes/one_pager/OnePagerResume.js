import Page from "../../components/page/Page"
import GridColumns, { Main, Side } from "../../components/containers/GridColumns"
import Section from "../../components/section/Section"
import { cfac } from "../../core/ComponentsFactory"

export default function OnePagerResume({ resume }) {
  return <Page background={resume.theme.background}>
    {cfac().render(resume.mainInformation)}
    <GridColumns>
      <Side>
        {cfac().render(resume.contactInfo)}
        {
          resume.sections
            ?.filter(s => s.theme && s.theme["place"] === "side")
            .map(sec =>
              <Section key={sec.key()} section={sec} padding={0} />
            )
        }
      </Side>
      <Main>
        {
          resume.sections
            ?.filter(s => !s.theme)
            .map(sec =>
              <Section key={sec.key()} section={sec} />
            )
        }
      </Main>
    </GridColumns>
  </Page>
}