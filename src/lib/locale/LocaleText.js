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
  const [text, setText] = useState(values[0])
  Locale.i().subscribe(updateText)

  function updateText(active) {
    let order = active.order < values.length ? active.order : 0;

    if (!isNullOrEmpty(values[order])) {
      setText(values[order])
    }
    else {
      setText("")
    }
  }

  useEffect(() => {
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
    setText(values[0])
  }, [values])

  return <>{HTMLReactParser(text)}</>
}

export function LocaleInput({ values, onChange }) {
  const [text, setText] = useState(values[0])
  Locale.i().subscribe(updateText)

  function updateText(active) {
    let order = active.order < values.length ? active.order : 0;
    setText(values[order])
  }

  useEffect(() => {
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
    setText(values[0])
  }, [values])

  return <input
    value={text}
    onChange={e => {
      setText(e.target.value)
      onChange({ order: Locale.i().active().order, value: e.target.value })
    }}
  />
}