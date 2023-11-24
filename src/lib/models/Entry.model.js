export default class Entry {

  constructor(data) {
    this.type = data["type"]
  }

  key() {
    throw new Error("You have to implement the method <key>!")
  }
}