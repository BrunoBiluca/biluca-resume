import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom"
import ProfileButton from "../../src/lib/profiles/ProfileButton";

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