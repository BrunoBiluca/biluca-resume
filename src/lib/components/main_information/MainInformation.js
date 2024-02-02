import styles from './MainInformation.module.css';


export default function MainInformation({ info }) {
  return (
    <div className={styles.header}>
      <div className={styles.picture} >
        <img
          src={info.picture}
          alt="Foto de perfil da pessoa do currículo"
        />
      </div>
      <div className={styles.headerInfo}>
        <div>
          <h1 style={{margin: 0}}>{info.name}</h1>
          <p className={styles.goal}>{info.goal}</p>
        </div>
        <p className={styles.summary}>{info.summary}</p>
      </div>
    </div>
  );
}