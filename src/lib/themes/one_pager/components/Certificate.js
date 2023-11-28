import SimpleEntry from "../../../components/simple_entry/SimpleEntry"

export default function Certificate({ certificate }) {
  let title = certificate.title

  if (certificate.hasUrl())
    title = <a href={certificate.url}
      style={{ color: "#666" }}
      target="_blank"
      rel="noreferrer">
      {title}
    </a>

  return <SimpleEntry
    title={title}
    description={certificate.description}
    sideTexts={[certificate.emissionDate, certificate.platform]}
  />
}