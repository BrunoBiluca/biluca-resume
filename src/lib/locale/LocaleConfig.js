import BasePanel from "../components/base_panel/BasePanel"
import Locale from "../locale/Locale"
import { useState } from "react"


export default function LocaleConfig() {
  const [locale, setLocale] = useState(Locale.i().active())

  let availableLanguages = Locale.i().available()
  Locale.i().subscribe(() => setLocale(Locale.i().active()))

  return <BasePanel title={"Localização"}>
    <div style={{
      display: "grid",
      gridGap: "5px"
    }}>
      {availableLanguages.map(l =>
        <button
          key={l.key}
          disabled={l.key == locale.key}
          onClick={() => Locale.i().setActive(l)}
        >
          {l.label}
        </button>
      )}
    </div>
  </BasePanel>
}