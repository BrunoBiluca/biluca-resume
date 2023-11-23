export default class Section {
  entries = []

  constructor(title) {
    this.title = title
  }

  add(entry) {
    this.entries.push(entry)
  }
}