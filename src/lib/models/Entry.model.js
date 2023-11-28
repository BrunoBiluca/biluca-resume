export default class Entry {

  constructor(data) {
    this.type = data["type"] ? data["type"] : this.constructor.name

    let themeMapper = data["theme_mapper"]
    if (themeMapper) {
      this.theme = themeMapper(data["theme"])
    }
    else {
      this.theme = data["theme"]
    }
  }

  key() {
    throw new Error("You have to implement the method <key>!")
  }
}