import Entry from "../abstract/Entry.model"

export default class Project extends Entry{
  constructor(data){
    super(data)
    this.title = data["title"]
    this.description = data["description"]
    this.role = data["role"]
    this.tech_stack = data["tech_stack"]
    this.repo = data["repo"]
    this.release_link = data["release_link"]
  }
}