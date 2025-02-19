import { useEffect, useState } from "react"
import Locale from "./Locale"
import { isNullOrEmpty } from "../helpers/StringExtensions"
import HTMLReactParser from "html-react-parser"
import { alertNotLocatedText } from "./LocaleWarnings"

export function loc(text) {
  let values = []
  values.push(text)
  values = values.flat()
  return LocaleText({ values })
}

export default function LocaleText({ values }) {
  const [text, setText] = useState(values[Locale.i().getOrder()])
  Locale.i().subscribe(updateText)

  function updateText(active) {
    let order = active.order < values.length ? active.order : 0;
    console.log(order)
    if (!isNullOrEmpty(values[order])) {
      setText(values[order])
    }
    else {
      setText("")
    }
  }

  useEffect(() => {
    alertNotLocatedText(values)
    setText(values[Locale.i().getOrder()])
  }, [values])

  return <>{HTMLReactParser(text)}</>
}


