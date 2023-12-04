import Entry from "./Entry.model"

export default class Location extends Entry {
  constructor(data) {
    super(data)
    this.place = data["place"]
    this.googleMaps = data["google_maps"]
  }

}