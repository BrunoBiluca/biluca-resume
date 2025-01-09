import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom"
import { userEvent } from '@testing-library/user-event'

import ProfileButton from "../../src/lib/profiles/ProfileButton";
import Profile from "../../src/lib/profiles/Profile";

test("deve exibir os elementos necessários", async () => {
  render(<ProfileButton
    key="1"
    name="Novo perfil"
    isActive={false}
    canEdit={true}
    onClick={() => { }}
  />)

  expect(screen.getByRole('option', { name: 'Novo perfil' })).toBeInTheDocument()
});

test("não deve exibir o botão de edição do perfil quando este não está ativo", async () => {
  render(<ProfileButton
    key="1"
    name="Novo perfil"
    isActive={false}
    canEdit={true}
    onClick={() => { }}
  />)

  expect(screen.queryByRole('button', { name: 'Editar' })).not.toBeInTheDocument()
})

test("deve exibir o botão de edição do perfil quando este está ativo", async () => {
  render(<ProfileButton
    key="1"
    name="Novo perfil"
    isActive={true}
    canEdit={true}
    onClick={() => { }}
  />)

  expect(screen.getByRole('button', { name: 'Editar' })).toBeInTheDocument()
})

test("deve exibir o botão salvar a edição do perfil para ter acesso a configuração estaticamente", async () => {
  render(<ProfileButton
    key="1"
    name="Novo perfil"
    isActive={true}
    canEdit={true}
    onClick={() => { }}
  />)

  expect(screen.getByRole('button', { name: 'Salvar' })).toBeInTheDocument()
})

test("deve exibir o botão salvar a edição do perfil para ter acesso a configuração estaticamente", async () => {

  const profile = {
    id: "novo-perfil",
    name: "Novo perfil",
    canEdit: true,
    hidden_content: [],
    createdAt: Date.now()
  };
  Profile.i().addProfile(profile)

  let wasSaved = false
  render(<ProfileButton
    key={profile.id}
    name={profile.name}
    isActive={true}
    canEdit={profile.canEdit}
    onClick={() => { }}
    onSave={() => wasSaved = true}
  />)

  await userEvent.click(screen.getByRole('button', { name: 'Salvar' }))

  expect(wasSaved).toBe(true)
})