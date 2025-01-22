import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom"
import Profile from "../../src/lib/profiles/Profile"
import ResumeComponent from "../../src/lib/core/ResumeComponent";
import Entry from "../../src/lib/models/Entry.model";

beforeEach(() => { Profile.setInstance(new Profile()) })

test('deve renderizar o component no modo de exibição', async () => {
  const component = new ResumeComponent(new Entry({}), <div>Conteúdo</div>)
  render(component.render())

  expect(screen.getByText('Conteúdo')).toBeInTheDocument()
})

test('deve esconder o componente no modo de exibição quando não estiver ativo', async () => {
  const component = new ResumeComponent(new Entry({ is_active: false }), <div>Conteúdo</div>)
  render(component.render())

  expect(screen.queryByText('Conteúdo')).not.toBeInTheDocument()
})

test('deve esconder o componente no modo de exibição quando estiver escondido no perfil', async () => {

  let model = new Entry({ is_active: true })

  Profile.i().addProfile()
  Profile.i().enterEditMode()
  Profile.i().hideComponent(model.key())
  Profile.i().exitEditMode()

  const component = new ResumeComponent(model, <div>Conteúdo</div>)
  render(component.render())

  expect(screen.queryByText('Conteúdo')).not.toBeInTheDocument()
})

test('deve renderizar o component de edição quando está em edit mode', async () => {
  Profile.i().addProfile()
  Profile.i().enterEditMode()

  const component = new ResumeComponent(new Entry({}), <div>Conteúdo</div>)
  render(component.render())

  expect(screen.getByTestId('edit-controller')).toBeInTheDocument()
  expect(screen.getByText('Conteúdo')).toBeInTheDocument()
}) 