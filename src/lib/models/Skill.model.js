export default class Skill {
  constructor(data) {
    this.label = data["label"]
  }

  key(){
    return this.label
  }
}