import ModelsFactory from "../ModelsFactory"

export default class ContactInfo {
  entries = []

  constructor(data){
    for(let entry of data){
      this.entries.push(ModelsFactory.instance().instantiate(entry))
    }
  }
}