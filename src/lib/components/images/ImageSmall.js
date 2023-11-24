import styles from "./ImageSmall.module.css"

export default function ImageSmall({ src, alt }) {
  return (
    <div className={styles.imgHolder}>
      <img src={src} alt={alt} />
    </div>
  )
}