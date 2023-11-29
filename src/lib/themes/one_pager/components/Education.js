import Preposition from "../../../components/Preposition"
import SimpleEntry from "../../../components/simple_entry/SimpleEntry"
import {loc} from "../../../locale/LocaleText"

export default function Education({ education }) {
  return <SimpleEntry
    title={education.title + Preposition() + education.institution}
    description={education.description}
    sideTexts={[
      education.period(),
      education.location
    ]}
  />
}