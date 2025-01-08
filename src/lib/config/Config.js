import LocaleConfig from "../locale/LocaleConfig"
import ProfilesConfig from "../profiles/ProfilesConfig"
import NoPrint from "../components/no_print/NoPrint"

export default function Config() {
  return <NoPrint>
    <LocaleConfig />
    <ProfilesConfig />
  </NoPrint>
}