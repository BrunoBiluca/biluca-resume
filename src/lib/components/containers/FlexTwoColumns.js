import { getChildByType, hasChildByType } from "../../helpers/ComponentExtensions"

export default function FlexTwoColumns({ style, children }) {
  if (!hasChildByType(children, Main))
    console.warn("Componente <Main> não foi configurado para o <FlexTwoColumns>")

  if (!hasChildByType(children, Side))
    console.warn("Componente <Side> não foi configurado para o <FlexTwoColumns>")

  return <div style={{ display: "flex", gap: "1em", ...style }}>
    {children}
  </div>
}

export function Main({ children }) {
  return <div style={{ flex: "1 1" }}>
    {children}
  </div>
}

export function Side({ children }) {
  return <div>
    {children}
  </div>
}