import Singleton from "../core/abstract/Singleton";

export default class Locale extends Singleton {
  locale = []

  constructor(locale) {
    super()
    this.locales = locale
  }

  availableLanguages() {
    return this.locales.map(l => l.key)
  }

  active() {
    return 0
  }
}