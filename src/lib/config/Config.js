import { classNames } from "../helpers/ComponentExtensions"
import styles from "./Config.module.css"
import resumeStyles from "../Resume.module.css"
import LocaleConfig from "../locale/LocaleConfig"

export default function Config() {
  return <div className={classNames(styles.config, resumeStyles.noPrint)}>
    <h1>Configurações</h1>
    <div style={{ margin: "1em 0" }}>
      <LocaleConfig />
    </div>
  </div>
}