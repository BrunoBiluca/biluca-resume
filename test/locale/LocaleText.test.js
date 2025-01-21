import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom"

import Locale from "../../src/lib/locale/Locale"
import LocaleText from "../../src/lib/locale/LocaleText";

beforeEach(() => {
  Locale.setInstance(new Locale([{ key: "pt-BR", label: "Português" }, { key: "en-US", label: "English" }]))
})

test("deve exibir a localização para a primeira língua disponível", async () => {
  render(<LocaleText values={["Língua 1", "Língua 2"]} />)

  expect(screen.getByText('Língua 1')).toBeInTheDocument()
})

test("deve exibir a localização para a segunda língua disponível", async () => {
  Locale.i().setActive({ key: "en-US", label: "English" })
  render(<LocaleText values={["Língua 1", "Língua 2"]} />)

  expect(screen.getByText('Língua 2')).toBeInTheDocument()
})