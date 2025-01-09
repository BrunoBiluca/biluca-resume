import React from "react"
import Profile from "./Profile"

export default function ProfileButton({ name, isActive, canEdit, onClick }) {

  const [isEditMode, setIsEditMode] = React.useState(Profile.i().isEditMode)

  return <div style={{ display: "grid" }}>
    <button
      role="option"
      disabled={isActive}
      onClick={() => {
        setIsEditMode(false)
        onClick()
      }}
    >
      {name}
    </button>
    {
      isActive && canEdit &&
      <button
        style={{ backgroundColor: isEditMode ? "green" : "gray" }}
        onClick={() => {
          const newEditMode = !isEditMode
          if (newEditMode) {
            Profile.i().enterEditMode()
          } else {
            Profile.i().exitEditMode()
          }
          setIsEditMode(newEditMode)
        }}
      >
        Editar
      </button>
    }
  </div>
}