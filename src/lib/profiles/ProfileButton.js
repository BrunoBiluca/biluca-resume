import React from "react"
import Profile from "./Profile"

export default function ProfileButton({ name, isActive, canEdit, onClick, onSave, onRemove }) {

  const [isEditMode, setIsEditMode] = React.useState(Profile.i().isEditMode)
  const editModeAbled = !Profile.i().isEditModeDisabled

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
      editModeAbled && isActive && canEdit &&
      <>
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

        <button
          style={{ backgroundColor: "darkseagreen" }}
          onClick={onSave}
        >
          Salvar
        </button>

        {
          Profile.i().getActiveProfile().canRemove &&
          <button
            style={{ backgroundColor: "darksalmon" }}
            onClick={() => {
              setIsEditMode(false)
              onRemove()
            }}
          >
            Remover
          </button>
        }
      </>
    }
  </div>
}