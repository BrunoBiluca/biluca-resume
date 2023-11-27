import Page from "../../components/page/Page"
import GridColumns, { Main, Side } from "../../components/containers/GridColumns"
import Section from "../../components/section/Section"
import ContactInformation from "../../components/contact_information/ContactInformation"
import MainInformation from "../../components/main_information/MainInformation"

export default function OnePagerResume({ resume }) {
  return <Page>
    <MainInformation info={resume.mainInformation} />
    <GridColumns>
      <Side>
        <ContactInformation contactInfo={resume.contactInfo} />
        {
          resume.sections
            ?.filter(s => s.theme["onSide"])
            .map(sec =>
              <Section key={sec.key()} section={sec} padding={0} />
            )
        }
      </Side>
      <Main>
        {
          resume.sections
            ?.filter(s => !s.theme["onSide"])
            .map(sec =>
              <Section key={sec.key()} section={sec} />
            )
        }
      </Main>
    </GridColumns>
  </Page>
}