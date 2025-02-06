import styles from './Page.module.css';

export default function Page({ background, children }) {
  return (
    <div className={styles.page}>
      {
        background &&
        <img src={background} className={styles.background} alt="page background" />
      }
      <div className={styles.content} style={{ height: "100%" }}>
        {children}
      </div>
    </div>
  )
}