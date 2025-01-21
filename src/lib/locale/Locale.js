import Singleton from "../core/abstract/Singleton";

export default class Locale extends Singleton {
  onChangeCallbacks = []

  locale = []
  activeLocale = { key: "unknow", order: 0 }

  constructor(locale) {
    super()

    let order = 0
    for (let l of locale) {
      this.locale.push({
        order: order++,
        ...l
      })
    }
    this.activeLocale = this.locale[0]
  }

  available() {
    return this.locale
  }

  active() {
    return this.activeLocale
  }

  getOrder() {
    return this.activeLocale.order
  }

  setActive(locale) {
    this.activeLocale = this.locale.find(l => l.key == locale.key) ?? this.activelocale
    for (let onChange of this.onChangeCallbacks) {
      onChange.callback(this.activeLocale)
    }
  }

  subscribe(callback) {
    this.onChangeCallbacks.push({ key: String(callback), callback })
  }

  isActive(locale) {
    return this.activeLocale.key == locale.key
  }
}