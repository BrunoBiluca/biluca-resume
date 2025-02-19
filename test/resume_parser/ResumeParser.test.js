import { Resume } from "../../src/lib/models"

test("deve analisar configuração de seção de projetos válida", () => {
  let resume = new Resume({
    sections: [
      {
        "id": "projetos",
        "title": [
          "Projetos relevantes",
          "Relevant projects"
        ],
        "type": "Projects",
        "entries": [
          {
            "title": [
              "Projeto 1",
              "Project 1"
            ],
            "description": [
              "Descrição do projeto 1",
              "Description of project 1"
            ],
            "role": [
              "Responsabilidade 1",
              "Role 1"
            ],
            "tech_stack": [
              "Habilidade 1",
              "Skill 1"
            ],
            "repo": "https://github.com/BrunoBiluca/project-1",
            "release_link": "https://github.com/BrunoBiluca/project-1/releases"
          }
        ]
      }]
  })

  expect(resume.sections[0].type).toBe("Projects")
  expect(resume.sections[0].entries[0].title).toEqual(["Projeto 1", "Project 1"])
})