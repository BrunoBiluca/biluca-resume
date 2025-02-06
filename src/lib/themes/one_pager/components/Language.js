import { loc } from "../../../locale/LocaleText";

export default function Language({ language }) {
  return <h3>{loc(language.label)} ({loc(language.level)})</h3>
}