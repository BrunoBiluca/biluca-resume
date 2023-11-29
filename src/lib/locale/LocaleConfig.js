import Locale from "../locale/Locale"
import { useState } from "react"


export default function LocaleConfig() {
  const [locale, setLocale] = useState(Locale.i().active())

  let availableLanguages = Locale.i().available()
  Locale.i().subscribe(() => setLocale(Locale.i().active()))

  return <>
    <h2>Localização</h2>
    <div style={{
      padding: "1em 0", display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: "1em"
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
  </>
}