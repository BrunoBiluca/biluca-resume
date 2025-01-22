import React from "react"
import Profile from "./Profile"

export default function ProfileButton({ name, isActive, canEdit, onClick, onSave, onRemove }) {

  const [currName, setCurrName] = React.useState(name)
  const [isEditMode, setIsEditMode] = React.useState(Profile.i().isEditMode)
  const editModeAbled = !Profile.i().isEditModeDisabled
  const [isRenaming, setIsRenaming] = React.useState(false)

  return <div style={{ display: "grid" }}>
    {
      isRenaming
        ?
        <input
          type="text"
          role="input"
          value={currName}
          onChange={(event) => {
            setCurrName(event.target.value)
          }}
          onKeyDown={event => {
            if (event.key == "Enter") {
              setIsRenaming(false)
              Profile.i().setName(currName)
            }
          }}
        />
        :
        <button
          role="option"
          disabled={isActive}
          onClick={() => {
            setIsEditMode(false)
            onClick()
          }}
        >
          {currName}
        </button>
    }
    {
      editModeAbled && isActive && canEdit &&
      <>
        <button
          onClick={() => setIsRenaming(true)}
        >
          Renomear
        </button>
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