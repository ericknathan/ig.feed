import { Trash, ThumbsUp } from 'phosphor-react';
import { Avatar } from '../';

import styles from './styles.module.css';

export function Comment() {
  return (
    <div className={styles.comment}>
      <Avatar
        src="https://github.com/ericknathan.png"
        alt="Imagem de perfil de Erick Nathan"
        hasBorder={false}
      />
      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Erick Nathan</strong>
              <time title="11 de Maio às 08:32h" dateTime="2022-05-11 08:32:14">Cerca de 1h atrás</time>
            </div>
            <button title="Deletar comentário">
              <Trash size={24} />
            </button>
          </header>

          <p>Muito bom Devon, parabéns!! 👏👏</p>
        </div>
        <footer className={styles.commentFooter}>
          <button>
            <ThumbsUp size={20} />
            Aplaudir <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  )
}