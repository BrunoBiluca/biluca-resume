import { useEffect, useState } from "react"
import Locale from "./Locale"
import { isNullOrEmpty } from "../helpers/StringExtensions"
import HTMLReactParser from "html-react-parser"

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

function alertNotLocatedText(values) {
  if (process.env.SHOW_LOCATION_ALERTS != "true") return

  if (!isNullOrEmpty(values[0])) {
    let order = 0
    for (let locale of Locale.i().available()) {
      if (order++ >= values.length && isNullOrEmpty(values[order])) {
        console.info(
          `[Locale Warning] Texto '${values[0]}' não está localizada para ${locale.label}`
        )
      }
    }
  }
}

export function LocaleInput({ values, onChange }) {
  const [text, setText] = useState(values[Locale.i().getOrder()])
  Locale.i().subscribe(updateText)

  function updateText(active) {
    let order = active.order < values.length ? active.order : 0;
    setText(values[order])
  }

  useEffect(() => {
    alertNotLocatedText(values)
    setText(values[Locale.i().getOrder()])
  }, [values])

  return <input
    value={text}
    onChange={e => {
      setText(e.target.value)
      onChange({ order: Locale.i().getOrder(), value: e.target.value })
    }}
  />
}