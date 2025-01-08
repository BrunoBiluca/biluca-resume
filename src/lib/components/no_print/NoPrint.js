import styles from './NoPrint.module.css'

export default function NoPrint({ children }) {
  return (
    <div className={styles.noPrint}>
      {children}
    </div>
  )
}