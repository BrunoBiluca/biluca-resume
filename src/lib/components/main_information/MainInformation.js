import styles from './MainInformation.module.css';
import placeholder from './images/placeholder_picture.webp';


export default function MainInformation({ info }) {
  return (
    <div className={styles.header}>
      <div className={styles.picture} >
        <img
          src={placeholder}
          alt="image placeholder do currículo"
        />
      </div>
      <div className={styles.headerInfo}>
        <div>
          <h1 className={styles.personName}>{info.name}</h1>
          <p className={styles.goal}>{info.goal}</p>
        </div>
        <p className={styles.summary}>{info.summary}</p>
      </div>
    </div>
  );
}