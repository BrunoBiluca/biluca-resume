import React from "react"
import { render, screen } from "@testing-library/react"
import { userEvent } from '@testing-library/user-event'
import '@testing-library/jest-dom'
import ProfilesConfig from "../../src/lib/profiles/ProfilesConfig"
import Profile from "../../src/lib/profiles/Profile"

jest.mock("../../src/lib/profiles/ProfileLocalStorage", () => {
  return jest.fn().mockImplementation(() => ({
    updateProfile: jest.fn(),
    removeProfileRegistry: jest.fn(),
    getProfiles: jest.fn(() => [])
  }))
})

beforeEach(() => { 
  Profile.setInstance(new Profile()) 
})

test('deve exibir os elementos fixos do painel', async () => {
  render(<ProfilesConfig />)

  expect(screen.getByRole('heading', { name: 'Perfis' })).toBeInTheDocument()
  expect(screen.getByRole('button', { name: 'Adicionar' })).toBeInTheDocument()
  expect(screen.getByRole('option', { name: 'Completo' })).toBeInTheDocument()
})

test('deve adicionar um perfil quando o botão de adicionar for pressionado', async () => {
  render(<ProfilesConfig />)

  await userEvent.click(screen.getByRole('button', { name: 'Adicionar' }))
  await userEvent.click(screen.getByRole('button', { name: 'Adicionar' }))

  expect(screen.getAllByRole('option')).toHaveLength(3)

  expect(screen.getByRole('option', { name: 'Novo perfil' })).toBeInTheDocument()
  expect(screen.getByRole('option', { name: 'Novo perfil 2' })).toBeInTheDocument()
})

test("não deve exibir comandos de configuração de perfil quando o modo de edição está desabilitado", async () => {
  Profile.setInstance(new Profile([], true))

  render(<ProfilesConfig />)

  expect(screen.queryByRole('button', { name: 'Adicionar' })).not.toBeInTheDocument()
})

test("deve remover um perfil", async () => {
  render(<ProfilesConfig />)

  await userEvent.click(screen.getByRole('button', { name: 'Adicionar' }))
  await userEvent.click(screen.getByRole('option', { name: 'Novo perfil' }))
  await userEvent.click(screen.getByRole('button', { name: 'Remover' }))

  expect(screen.queryByRole('option', { name: 'Novo perfil' })).not.toBeInTheDocument()
})
