import React from "react"
import styles from "./BasePanel.module.css"

export default function BasePanel({ title, onTitleClick, children }) {
  return (
    <div className={styles.basePanel}>
      <h2 onClick={onTitleClick}>{title}</h2>
      <div style={{
        padding: "1em 0", 
      }}>
        {children}
      </div>
    </div>
  )
}