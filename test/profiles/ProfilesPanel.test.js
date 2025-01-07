import React from "react"
import { render, screen } from "@testing-library/react"
import { userEvent } from '@testing-library/user-event'
import '@testing-library/jest-dom'
import { ProfilesPanel } from "../../src/lib/profiles/ProfilesPanel"


test('deve exibir os elementos fixos do painel', async () => {
  render(<ProfilesPanel />)

  expect(screen.getByRole('heading', { name: 'Perfis' })).toBeInTheDocument()
  expect(screen.getByRole('button', { name: 'Adicionar' })).toBeInTheDocument()
  expect(screen.getByRole('option', { name: 'Completo' })).toBeInTheDocument()
})

test('deve adicionar um perfil quando o botão de adicionar for pressionado', async () => {
  render(<ProfilesPanel />)

  await userEvent.click(screen.getByRole('button', { name: 'Adicionar' }))
  await userEvent.click(screen.getByRole('button', { name: 'Adicionar' }))

  expect(screen.getAllByRole('option')).toHaveLength(3)
})