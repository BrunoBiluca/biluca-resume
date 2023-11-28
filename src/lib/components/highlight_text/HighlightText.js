import { classNames } from "../../helpers/ComponentExtensions"
import styles from "./HighlightText.module.css"

export default function HighlightText({ text, small }) {
  return (
    <span
      className={classNames(styles.highlightText, small && styles.small)}>
      {text}
    </span>
  )
}