import FlexTwoColumns, { Main, Side } from "../containers/FlexTwoColumns";
import HighlightText from "../highlight_text/HighlightText";
import styles from "./SimpleEntry.module.css"

export default function SimpleEntry({ title, description, sideTexts }) {
  return (
    <FlexTwoColumns>
      <Main>
        <h2 className={styles.title}>{title}</h2>
        <p>{description}</p>
      </Main>
      <Side>
        <div className={styles.content}>
          {
            sideTexts.map(t =>
              <p key={t}><HighlightText text={t} /></p>
            )
          }
        </div>
      </Side>
    </FlexTwoColumns>
  )
}