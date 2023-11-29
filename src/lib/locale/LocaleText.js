import { useEffect, useState } from "react"
import Locale from "./Locale"


export function loc(values) { return LocaleText({ values }) }

export default function LocaleText({ values }) {
  const [text, setText] = useState("")

  useEffect(() => {
    if (!Array.isArray(values)) {
      setText(values)
      return
    }

    setText(values[Locale.i().active()])
  }, [])

  return text
}