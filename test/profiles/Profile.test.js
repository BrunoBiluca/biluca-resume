import Profile from "../../src/lib/profiles/Profile"

function addCustomizableProfile(profile) {
  profile.addProfile({
    id: "novo-perfil",
    name: "Novo perfil",
    canEdit: true,
    hidden_content: [],
    createdAt: Date.now()
  })
}


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