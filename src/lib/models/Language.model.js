export default class Language {
  constructor(data){
    this.label = data["label"]
    this.level = data["level"]
  }

  key(){
    return this.label + this.level
  }
}