import Resume from "../../models/Resume.model"
import Page from "../../components/page/Page"
import GridColumns, { Main, Side } from "../../components/containers/GridColumns"
import Section from "../../components/section/Section"
import ContactInformation from "../../components/contact_information/ContactInformation"

export default function OnePagerResume({data}) {
  var resume = new Resume(data)

  return <Page>
    {resume.mainInformation}
    <GridColumns>
      <Side>
        <ContactInformation contactInfo={resume.contactInfo} />
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