import Profile from "../../src/lib/profiles/Profile"
import ProfileLocalStorage from "../../src/lib/profiles/ProfileLocalStorage"

const mockRemoveProfile = jest.fn();
const mockUpdateProfile = jest.fn();
jest.mock("../../src/lib/profiles/ProfileLocalStorage", () => {
  return jest.fn().mockImplementation(() => ({
    updateProfile: mockUpdateProfile,
    removeProfileRegistry: mockRemoveProfile,
    getProfiles: jest.fn(() => [])
  }))
})

beforeEach(() => {
  ProfileLocalStorage.mockImplementation(() => ({
    updateProfile: mockUpdateProfile,
    removeProfileRegistry: mockRemoveProfile,
    getProfiles: jest.fn(() => [])
  }))

  mockUpdateProfile.mockClear();
  mockRemoveProfile.mockClear();
});

test('deve iniciar com o perfil completo', async () => {
  const profiles = (new Profile()).getProfiles()

  expect(profiles).toHaveLength(1)
  expect(profiles[0].id).toBe("completo")
  expect(profiles[0].name).toBe("Completo")
  expect(profiles[0].canEdit).toBe(false)
  expect(profiles[0].hidden_content).toHaveLength(0)
})

test('deve permitir adicionar um novo perfil e defini-lo como ativo', async () => {
  var profile = new Profile()

  let callback = false
  profile.subscribe(() => callback = true)

  profile.addProfile()

  var activeProfile = profile.getActiveProfile()

  expect(activeProfile.name).toBe("Novo perfil")
  expect(callback).toBe(true)
  expect(mockUpdateProfile).toHaveBeenCalledTimes(1)
})

test('não deve permitir entrar em modo de edição quando o perfil ativo não pode ser editado', async () => {
  var profile = new Profile()

  let isEditMode = false
  profile.subscribe(() => {
    isEditMode = profile.isEditMode
  })

  // O perfil completo não pode ser editado
  profile.enterEditMode()

  expect(isEditMode).toBe(false)
})

test('deve permitir entrar em modo de edição quando o perfil ativo pode ser editado', async () => {
  var profile = new Profile()

  let isEditMode = false
  profile.subscribe(() => {
    isEditMode = profile.isEditMode
  })

  profile.addProfile()

  profile.enterEditMode()

  expect(isEditMode).toBe(true)
})

test('deve permitir esconder um component do perfil ativo', async () => {
  var profile = new Profile()

  let callback = false
  profile.subscribe(() => callback = true)

  profile.addProfile()

  profile.enterEditMode()

  profile.hideComponent("componente-1")

  expect(profile.getActiveProfile().hidden_content).toHaveLength(1)
  expect(profile.getActiveProfile().hidden_content[0]).toBe("componente-1")
  expect(callback).toBe(true)
  expect(mockUpdateProfile).toHaveBeenCalledTimes(2)
})

test('deve permitir exibir um component do perfil ativo', async () => {
  var profile = new Profile()

  profile.addProfile()
  profile.enterEditMode()

  let callback = false
  profile.subscribe(() => callback = true)

  profile.showComponent("componente-1")

  expect(profile.getActiveProfile().hidden_content).toHaveLength(0)
  expect(callback).toBe(true)
  expect(mockUpdateProfile).toHaveBeenCalledTimes(2)
})

test('deve verificar se componente está escondido ou não pela chave', async () => {
  let profile = new Profile()

  profile.addProfile()
  profile.enterEditMode()

  profile.hideComponent("componente-1")

  expect(profile.isComponentHidden("componente-1")).toBe(true)
  expect(profile.isComponentHidden("componente-2")).toBe(false)
})

test("deve inicializar com outros perfis customizados", async () => {
  const profile = new Profile(
    [
      {
        id: "novo-perfil",
        name: "Novo perfil",
        hidden_content: [],
        createdAt: Date.now()
      }
    ]
  )

  expect(profile.getProfiles().filter(p => p.id === "novo-perfil")).toHaveLength(1)
})

test("deve permitir entrar em modo de edição em perfis customizados adicionados na inicialização", async () => {
  const profile = new Profile(
    [
      {
        id: "novo-perfil",
        name: "Novo perfil",
        hidden_content: [],
        createdAt: Date.now()
      }
    ]
  )

  profile.setActiveProfile("novo-perfil")
  profile.enterEditMode()

  expect(profile.isEditMode).toBe(true)
})

test("não deve permitir entrar em modo de edição quando o modo está deslabilitado", async () => {
  const disableEditMode = true

  const profile = new Profile(
    [
      {
        id: "novo-perfil",
        name: "Novo perfil",
        hidden_content: [],
        createdAt: Date.now()
      }
    ],
    disableEditMode
  )

  profile.setActiveProfile("novo-perfil")
  profile.enterEditMode()

  expect(profile.isEditMode).toBe(false)
})

test("deve remover um perfil localmente adicionado", async () => {
  const profile = new Profile()

  profile.addProfile()

  profile.removeProfile(profile.getActiveProfile().id)

  expect(profile.getProfiles().filter(p => p.id === "novo-perfil")).toHaveLength(0)
  expect(mockRemoveProfile).toHaveBeenCalledTimes(1)
})

test("não deve ser possível remover um perfil fixo", async () => {
  const profile = new Profile(
    [
      {
        id: "novo-perfil",
        name: "Novo perfil",
        hidden_content: [],
        createdAt: Date.now()
      }
    ]
  )

  profile.removeProfile("novo-perfil")

  expect(profile.getProfiles().find(p => p.id === "novo-perfil")).toBeDefined()
  expect(mockRemoveProfile).toHaveBeenCalledTimes(0)
})

test("quando remover o perfil ativo, deve ser alterado o perfil ativo para o anterior", async () => {
  const profile = new Profile()

  profile.addProfile()
  profile.addProfile()

  expect(profile.getActiveProfile().name).toBe("Novo perfil 2")

  profile.removeProfile(profile.getActiveProfile().id)

  expect(profile.getActiveProfile().name).toBe("Novo perfil")
  expect(mockRemoveProfile).toHaveBeenCalledTimes(1)
})

test("deve carregar os perfis quando armazenados inicialmente", async () => {
  ProfileLocalStorage.mockImplementation(() => ({
    updateProfile: jest.fn(),
    getProfiles: jest.fn().mockReturnValue([
      { id: 'perfil-local-1', name: 'Perfil local 1', hidden_content: ["componente-1"], createdAt: Date.now() },
    ])
  }))

  const profile = new Profile()

  // perfis: completo e perfil-local-1
  expect(profile.getProfiles()).toHaveLength(2)
})

test("deve carregar o objetivo do perfil com o armazenado", async () => {
  const profile = new Profile([
    {
      "id": "9e4b92c9-6c4f-42cf-87b9-45df506442e4",
      "name": "Backend",
      "goal": [
        "Desenvolvedor Backend Python",
        "Python backend developer"
      ],
      "hidden_content": [
        "unity",
        "godot",
        "csharp",
        "games"
      ],
      "createdAt": 1736516017607
    }
  ])
  profile.setActiveProfile("9e4b92c9-6c4f-42cf-87b9-45df506442e4")

  expect(profile.getGoal()).toStrictEqual([
    "Desenvolvedor Backend Python",
    "Python backend developer"
  ])
})

test("deve atualizar uma informações de objetivo de perfil", async () => {
  const profile = new Profile()

  profile.addProfile()

  profile.setGoal(2, "Objetivo na língua 3")
  profile.setGoal(0, "Objetivo na língua 1")
  profile.setGoal(1, "Objetivo na língua 2")

  expect(profile.getGoal()).toStrictEqual([
    "Objetivo na língua 1",
    "Objetivo na língua 2",
    "Objetivo na língua 3"
  ])
})

test("deve permitir alterar o nome do perfil", async () => {
  const profile = new Profile()

  profile.addProfile()
  profile.setName("Novo nome")

  expect(profile.getActiveProfile().name).toBe("Novo nome")
  expect(mockUpdateProfile).toHaveBeenCalledTimes(2)
})

test("deve permitir duplicar um perfil", async () => {
  const profile = new Profile()

  profile.addProfile()
  profile.enterEditMode()
  profile.hideComponent("component-1")
  profile.setGoal(0, "Novo objetivo")
  profile.exitEditMode()

  profile.duplicateActive()

  expect(profile.getProfiles()).toHaveLength(3)
  expect(profile.getProfiles().find(p => p.name === "Novo perfil")).toBeDefined()
  
  expect(profile.getActiveProfile().name).toBe("Novo perfil - cópia")
  expect(profile.getActiveProfile().goal).toStrictEqual(["Novo objetivo"])
  expect(profile.getActiveProfile().hidden_content).toStrictEqual(["component-1"])

  expect(mockUpdateProfile).toHaveBeenCalledTimes(4)
})