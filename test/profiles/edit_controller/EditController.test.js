import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom"
import { userEvent } from '@testing-library/user-event'

import EditController from "../../../src/lib/profiles/edit_controller/EditController"


test("não deve exibir botões de controle quando o usuário não estiver verificando o componente", async () => {
  render(<EditController isHidden={false}>
    <div>Conteúdo</div>
  </EditController>)

  expect(screen.queryByRole('button', { name: 'Esconder' })).not.toBeInTheDocument()
  expect(screen.queryByRole('button', { name: 'Exibir' })).not.toBeInTheDocument()
  expect(screen.getByText('Conteúdo')).toBeInTheDocument()
})

test("deve exibir o botão de 'esconder' quando o componente está sendo exibido", async () => {
  render(<EditController isHidden={false}>
    <div>Conteúdo</div>
  </EditController>)

  await userEvent.hover(screen.getByText('Conteúdo'))

  expect(screen.getByRole('button', { name: 'Esconder' })).toBeInTheDocument()
  expect(screen.queryByRole('button', { name: 'Exibir' })).not.toBeInTheDocument()
  expect(screen.getByText('Conteúdo')).toBeInTheDocument()
})

test("deve exibir o botão de 'exibir' quando o componente está escondido", async () => {
  render(<EditController isHidden={true}>
    <div>Conteúdo</div>
  </EditController>)

  await userEvent.hover(screen.getByText('Conteúdo'))

  expect(screen.getByRole('button', { name: 'Exibir' })).toBeInTheDocument()
  expect(screen.queryByRole('button', { name: 'Esconder' })).not.toBeInTheDocument()
  expect(screen.getByText('Conteúdo')).toBeInTheDocument()
})

test("deve alterar o estado para exibir o componente", async () => {
  let isHidden = true

  render(<EditController isHidden={isHidden} onChange={(hidden) => isHidden = hidden}>
    <div>Conteúdo</div>
  </EditController>)

  await userEvent.hover(screen.getByText('Conteúdo'))

  await userEvent.click(screen.getByRole('button', { name: 'Exibir' }))

  expect(isHidden).toBe(false)
})

test("deve alterar o estado para esconder o componente", async () => {
  let isHidden = false

  render(<EditController isHidden={isHidden} onChange={(hidden) => isHidden = hidden}>
    <div>Conteúdo</div>
  </EditController>)

  await userEvent.hover(screen.getByText('Conteúdo'))

  await userEvent.click(screen.getByRole('button', { name: 'Esconder' }))

  expect(isHidden).toBe(true)
})

