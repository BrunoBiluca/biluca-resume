import React from "react"
import styles from "./BasePanel.module.css"

export default function BasePanel({ title, children }) {
  return (
    <div className={styles.basePanel}>
      <h2>{title}</h2>
      <div style={{
        padding: "1em 0", 
      }}>
        {children}
      </div>
    </div>
  )
}