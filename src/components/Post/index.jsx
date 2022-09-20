import { format, formatDistanceToNow } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';

import { Avatar, Comment } from '../';

import styles from './styles.module.css';

export function Post({ author, content, publishedAt }) {
  const publishedDateFormatted = format(
    publishedAt,
    "dd 'de' LLLL 'às' HH:mm'h'", 
    { locale: ptBR }
  );
  const publishedDateRelativeToNow = formatDistanceToNow(
    publishedAt,
    { locale: ptBR, addSuffix: ' ' }
  )

  return (
    <article className={styles.post}>
      <header className={styles.header}>
        <div className={styles.author}>
          <Avatar
            src={author.avatarUrl}
            alt={`Imagem de perfil de ${author.name}`}
          />
          <div className={styles.authorInfo}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>

        <time title={publishedDateFormatted} dateTime="2022-05-11 08:32:14">Publicado há {publishedDateRelativeToNow}</time>
      </header>
      <div className={styles.content}>
        <p>
          {
            content.map(line => {
              if(line.type === 'paragraph') return <p>{line.content}</p>
              if(line.type === 'link') return <p><a href={line.content}>{line.content}</a></p>
              if(line.type === 'hashtags') return <p>{line.content.map(hashtag => <a href={`/hashtag/${hashtag}`}>#{hashtag}</a>)}</p>
            })
          }
        </p>
      </div>
      <form className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>
        <textarea
          placeholder="Deixe um comentário"
        />
        <footer>
          <button type="submit">Publicar</button>
        </footer>
      </form>

      <div className={styles.commentList}>
        <Comment />
        <Comment />
        <Comment />
      </div>
    </article>
  )
}