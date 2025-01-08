import React from "react";

export default function EditController({ isHidden, onChange, children }) {
  const [editing, setEdidting] = React.useState(false)

  const controlButton = isHidden
    ? <button
      style={{ position: "absolute", top: 0, right: 0 }}
      onClick={() => { onChange(false) }}
    >
      Exibir
    </button>
    :
    <button
      style={{ position: "absolute", top: 0, right: 0 }}
      onClick={() => { onChange(true) }}
    >
      Esconder
    </button>

  return <div
    style={{ position: "relative" }}
    onMouseEnter={() => setEdidting(true)}
    onMouseLeave={() => setEdidting(false)}
  >
    {editing && controlButton}
    {children}
  </div>
}