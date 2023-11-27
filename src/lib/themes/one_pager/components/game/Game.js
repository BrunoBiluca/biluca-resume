import ImageSmall from "../../../../components/images/ImageSmall";
import styles from "./Game.module.css"
import { FaGithub } from 'react-icons/fa';

export default function Game({ game }) {
  return (
    <a
      className={styles.gameContainer}
      href={game.repository}
      target="_blank"
      rel="noreferrer"
    >
      <ImageSmall src={game.screenshoot} />
      <div>
        <p className={styles.title}>
          <span>{game.name}</span>
          {
            game.repository
            &&
            <span style={{ float: "right", display: "flex" }}><FaGithub /></span>
          }
        </p>
        <p className={styles.description}>{game.description}</p>
        <p className={styles.description}>{game.role}</p>
      </div>
    </a>
  )
}