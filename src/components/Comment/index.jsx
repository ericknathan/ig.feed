import { Trash, ThumbsUp } from 'phosphor-react';
import { useState } from 'react';
import { Avatar } from '../';
import { formatDate, getDateRelativeToNow } from '../../utils/date';

import styles from './styles.module.css';

export function Comment({ comment, onDeleteComment }) {
  const { author, content, publishedAt, likes } = comment;
  const [likeCount, setLikeCount] = useState(likes);

  function handleDeleteComment() {
    onDeleteComment(comment);
  }

  function handleLikeComment() {
    setLikeCount(previousLikeCount => previousLikeCount + 1);
  }

  const publishedDateFormatted = formatDate(publishedAt);
  const publishedDateRelativeToNow = getDateRelativeToNow(publishedAt);

  return (
    <div className={styles.comment}>
      <Avatar
        src={author.avatarUrl}
        alt={`Imagem de perfil de ${author.name}`}
        hasBorder={false}
      />
      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>{author.name}</strong>
              <time
                title={publishedDateFormatted}
                dateTime={publishedAt.toISOString()}
              >
                {publishedDateRelativeToNow} atrás
              </time>
            </div>
            <button
              title="Deletar comentário"
              onClick={handleDeleteComment}
            >
              <Trash size={24} />
            </button>
          </header>

          <p>{content}</p>
        </div>
        <footer className={styles.commentFooter}>
          <button onClick={handleLikeComment}>
            <ThumbsUp size={20} />
            Aplaudir <span>{likeCount}</span>
          </button>
        </footer>
      </div>
    </div>
  )
}