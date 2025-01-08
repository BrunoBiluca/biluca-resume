import styles from "./Config.module.css"
import resumeStyles from "../Resume.module.css"
import LocaleConfig from "../locale/LocaleConfig"
import ProfilesConfig from "../profiles/ProfilesConfig"
import BasePanel from "../components/base_panel/BasePanel"

export default function Config() {
  return <div className={resumeStyles.noPrint}>
    <LocaleConfig />
    <ProfilesConfig />
  </div>
}