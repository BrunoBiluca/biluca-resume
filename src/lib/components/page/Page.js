import styles from './Page.module.css';

export default function Page({ background, children }) {
  return (
    <div className={styles.page}>
      <img src={background} className={styles.background} alt="page background" />
      <div className={styles.content}>
        {children}
      </div>
    </div>
  )
}