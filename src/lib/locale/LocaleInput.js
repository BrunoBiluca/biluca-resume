import { useState, useEffect } from "react";
import Locale from "./Locale";
import { alertNotLocatedText } from "./LocaleWarnings";


export function LocaleInput({ values, onChange }) {
  const [text, setText] = useState(values[Locale.i().getOrder()]);
  Locale.i().subscribe(updateText);

  function updateText(active) {
    let order = active.order < values.length ? active.order : 0;
    setText(values[order]);
  }

  useEffect(() => {
    alertNotLocatedText(values);
    setText(values[Locale.i().getOrder()]);
  }, [values]);

  return <input
    value={text}
    onChange={e => {
      setText(e.target.value);
      onChange({ order: Locale.i().getOrder(), value: e.target.value });
    }} />;
}
