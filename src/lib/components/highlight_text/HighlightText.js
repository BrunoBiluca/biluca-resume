import styles from "./HighlightText.module.css"

export default function HighlightText({ text }) {
  return <span className={styles.highlight_text}>{text}</span>
}