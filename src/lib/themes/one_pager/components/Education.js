import SimpleEntry from "../../../components/simple_entry/SimpleEntry"

export default function Education({ education }) {
  return <SimpleEntry
    title={education.title}
    description={education.description}
    sideTexts={[
      education.period(),
      education.location
    ]}
  />
}