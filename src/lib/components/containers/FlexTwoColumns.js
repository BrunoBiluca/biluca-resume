import { getChildByType } from "../../helpers/ComponentExtensions"

export default function FlexTwoColumns({ style, children }) {
  let main = getChildByType(children, Main)
  let side = getChildByType(children, Side)

  return <div style={{ display: "flex", gap: "1em", ...style }}>
    {main}
    {side}
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