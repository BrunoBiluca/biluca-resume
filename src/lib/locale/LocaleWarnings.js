import { isNullOrEmpty } from "../helpers/StringExtensions";
import Locale from "./Locale";


export function alertNotLocatedText(values) {
  if (process.env.SHOW_LOCATION_ALERTS != "true") return;

  if (!isNullOrEmpty(values[0])) {
    let order = 0;
    for (let locale of Locale.i().available()) {
      if (order++ >= values.length && isNullOrEmpty(values[order])) {
        console.info(
          `[Locale Warning] Texto '${values[0]}' não está localizada para ${locale.label}`
        );
      }
    }
  }
}
