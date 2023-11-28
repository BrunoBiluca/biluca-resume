import Page from "../../components/page/Page"
import FlexTwoColumns, { Main, Side } from "../../components/containers/FlexTwoColumns"
import Section from "../../components/section/Section"
import ComponentsFactory from "../../core/ComponentsFactory"

export default function OnePagerResume({ resume }) {
  return <Page>
    {ComponentsFactory.i().render(resume.mainInformation)}
    <FlexTwoColumns>
      <Side>
        {ComponentsFactory.i().render(resume.contactInfo)}
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
    </FlexTwoColumns>
  </Page>
}