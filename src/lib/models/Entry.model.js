export default class Entry {

  constructor(data) {
    this.type = data["type"]
    this.theme = data["theme"]
  }

  key() {
    throw new Error("You have to implement the method <key>!")
  }
}