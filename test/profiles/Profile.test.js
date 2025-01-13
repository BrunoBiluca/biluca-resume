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

function addCustomizableProfile(profile) {
  profile.addProfile({
    id: "novo-perfil",
    name: "Novo perfil",
    canEdit: true,
    hidden_content: [],
    createdAt: Date.now()
  })
}

beforeEach(() => {
  // Clear all instances and calls to constructor and all methods:
  ProfileLocalStorage.mockClear();
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

  addCustomizableProfile(profile)

  var activeProfile = profile.getActiveProfile()

  expect(activeProfile.id).toBe("novo-perfil")
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

  addCustomizableProfile(profile)

  profile.enterEditMode()

  expect(isEditMode).toBe(true)
})

test('deve permitir esconder um component do perfil ativo', async () => {
  var profile = new Profile()

  let callback = false
  profile.subscribe(() => callback = true)

  addCustomizableProfile(profile)

  profile.enterEditMode()

  profile.hideComponent("componente-1")

  expect(profile.getActiveProfile().hidden_content).toHaveLength(1)
  expect(profile.getActiveProfile().hidden_content[0]).toBe("componente-1")
  expect(callback).toBe(true)
  expect(mockUpdateProfile).toHaveBeenCalledTimes(2)
})

test('deve permitir exibir um component do perfil ativo', async () => {
  var profile = new Profile()

  addCustomizableProfile(profile)
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

  addCustomizableProfile(profile)
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

  addCustomizableProfile(profile)

  profile.removeProfile("novo-perfil")

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

  profile.addProfile({
    id: "novo-perfil-1",
    name: "Novo perfil",
    createdAt: Date.now()
  })
  profile.addProfile({
    id: "novo-perfil-2",
    name: "Novo perfil",
    createdAt: Date.now()
  })

  expect(profile.getActiveProfile().id).toBe("novo-perfil-2")

  profile.removeProfile("novo-perfil-2")

  expect(profile.getActiveProfile().id).toBe("novo-perfil-1")
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