import ModelsFactory from "../core/ModelsFactory"

export default class ContactInfo {
  entries = []

  constructor(data){
    this.type = "ContactInformation"
    for(let entry of data){
      this.entries.push(ModelsFactory.i().instantiate(entry))
    }
  }
}