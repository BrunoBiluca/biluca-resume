import FlexTwoColumns, { Main, Side } from "../../../../components/containers/FlexTwoColumns"
import HighlightText from "../../../../components/highlight_text/HighlightText"
import styles from "./Certificate.module.css"

export default function Certificate({ certificate }) {

  let title = <h3 className={styles.certificateTitle}>{certificate.title}</h3>

  if (certificate.hasUrl())
    title = <a href={certificate.url}
      style={{ color: "#666" }}
      target="_blank"
      rel="noreferrer">
      {title}
    </a>

  return <FlexTwoColumns>
    <Main>
      {title}
      <p>{certificate.description}</p>
    </Main>
    <Side>
      <div className={styles.certificateSideContent}>
        <p><HighlightText text={certificate.emissionDate} /></p>
        <p><HighlightText text={certificate.platform} /></p>
      </div>
    </Side>
  </FlexTwoColumns>
}