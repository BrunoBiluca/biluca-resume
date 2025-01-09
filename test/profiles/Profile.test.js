import Profile from "../../src/lib/profiles/Profile"

beforeEach(() => Profile.setInstance(new Profile()))

test('deve iniciar com o perfil completo', async () => {
  const profiles = Profile.i().getProfiles()

  expect(profiles).toHaveLength(1)
  expect(profiles[0].id).toBe("completo")
  expect(profiles[0].name).toBe("Completo")
  expect(profiles[0].canEdit).toBe(false)
  expect(profiles[0].hidden_content).toHaveLength(0)
})

test('deve permitir adicionar um novo perfil e defini-lo como ativo', async () => {

  let callback = false
  Profile.i().subscribe(() => callback = true)

  Profile.i().addProfile({
    id: "novo-perfil",
    name: "Novo perfil",
    canEdit: true,
    hidden_content: [],
    createdAt: Date.now()
  })

  var activeProfile = Profile.i().getActiveProfile()

  expect(activeProfile.id).toBe("novo-perfil")
  expect(callback).toBe(true)
})

test('não deve permitir entrar em modo de edição quando o perfil ativo não pode ser editado', async () => {
  let isEditMode = false
  Profile.i().subscribe(() => {
    isEditMode = Profile.i().isEditMode
  })

  // O perfil completo não pode ser editado
  Profile.i().enterEditMode()

  expect(isEditMode).toBe(false)
})

test('deve permitir entrar em modo de edição quando o perfil ativo pode ser editado', async () => {

  let isEditMode = false
  Profile.i().subscribe(() => {
    isEditMode = Profile.i().isEditMode
  })

  Profile.i().addProfile({
    id: "novo-perfil",
    name: "Novo perfil",
    canEdit: true,
    hidden_content: [],
    createdAt: Date.now()
  })

  Profile.i().enterEditMode()

  expect(isEditMode).toBe(true)
})