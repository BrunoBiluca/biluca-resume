import ModelFac from "../ModelFac"

export default class ContactInfo {
  entries = []

  constructor(data){
    for(let entry of data){
      this.entries.push(ModelFac.instance().instantiate(entry))
    }
  }
}