import { useEffect, useState } from "react"
import Locale from "./Locale"


export function loc(values) { return LocaleText({ values }) }

export default function LocaleText({ values }) {
  const [text, setText] = useState("")

  Locale.i().subscribe((active) => setText(values[active.order]))

  useEffect(() => {
    if (!Array.isArray(values)) {
      setText(values)
      return
    }

    let active = Locale.i().active()
    setText(values[active.order])
  }, [])

  return text
}