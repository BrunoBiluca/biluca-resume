import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom"

import MainInformation from "../../../src/lib/components/main_information/MainInformation";
import Locale from "../../../src/lib/locale/Locale";
import Profile from "../../../src/lib/profiles/Profile";

beforeEach(() => {
  Locale.setInstance(new Locale([{ key: "pt-BR", label: "Português" }, { key: "en-US", label: "English" }]))
})

test("deve exibir as informações provenientes pelo modelo", async () => {
  render(<MainInformation
    info={{ name: "Nome", summary: "Sumario", goal: ["Objetivo", "Goal"], picture: "Imagem" }}
  />)

  expect(screen.getByText('Nome')).toBeInTheDocument()
  expect(screen.getByText('Sumario')).toBeInTheDocument()
  expect(screen.getByText('Objetivo')).toBeInTheDocument()
});

test("deve exibir as informações provenientes do perfil", async () => {

  Profile.i().addProfile()
  Profile.i().setGoal(0, "Objetivo pelo perfil")

  render(<MainInformation
    info={{ name: "Nome", summary: "Sumario", goal: ["Objetivo", "Goal"], picture: "Imagem" }}
  />)

  expect(screen.getByText('Nome')).toBeInTheDocument()
  expect(screen.getByText('Sumario')).toBeInTheDocument()
  expect(screen.getByText('Objetivo pelo perfil')).toBeInTheDocument()
})