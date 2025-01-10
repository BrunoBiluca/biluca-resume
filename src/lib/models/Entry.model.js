export default class Entry {

  constructor(data) {
    this.data = data
    this.isActive = true
    if (data.hasOwnProperty("is_active"))
      this.isActive = data["is_active"]

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
    if (!this.data.hasOwnProperty("id"))
      console.log(this.type)
    return this.data["id"]
  }
}