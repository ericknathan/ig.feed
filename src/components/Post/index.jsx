import { useState } from 'react';

import { Avatar, Comment } from '../';

import styles from './styles.module.css';
import { formatDate, getDateRelativeToNow } from '../../utils/date';

export function Post({ author, content, publishedAt }) {
  const [comments, setComments] = useState([
    {
      id: handleGenerateNewId(),
      author: {
        name: 'Erick Nathan',
        avatarUrl: 'https://github.com/ericknathan.png',
        role: 'Front-end Developer @Pagtel'
      },
      content: 'Post muito bacana, hein?!',
      publishedAt: new Date('2022-09-20 08:32:51'),
      likes: 0
    }
  ]);
  const [newCommentText, setNewCommentText] = useState('');

  function handleCreateNewComment(event) {
    event.preventDefault();

    setComments([ ...comments, {
      id: handleGenerateNewId(),
      author: {
        name: 'Erick Nathan',
        avatarUrl: 'https://github.com/ericknathan.png',
        role: 'Front-end Developer @Pagtel'
      },
      content: newCommentText,
      publishedAt: new Date().toISOString(),
      likes: 0,
    }]);

    setNewCommentText('');
  }

  function handleChangeNewComment(event) {
    event.target.setCustomValidity('')
    setNewCommentText(event.target.value);
  }

  function deleteComment(commentToDelete) {
    const commentsWithoutDeletedOne = comments.filter(comment =>
      comment.id !== commentToDelete.id
    );

    setComments(commentsWithoutDeletedOne);    
  }

  function handleGenerateNewId() {
    return `${Date.now()}-${Math.floor(Math.random() * 1000)}`;
  }

  function handleNewCommentInvalid(event) {
    event.target.setCustomValidity('O comentário não pode ser vazio!')
  }

  const publishedDateFormatted = formatDate(publishedAt);
  const publishedDateRelativeToNow = getDateRelativeToNow(publishedAt);
  const isNewCommentEmpty = newCommentText.trim().length === 0;
  
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

        <time
          title={publishedDateFormatted}
          dateTime={publishedAt.toISOString()}
        >
          Publicado {publishedDateRelativeToNow}
        </time>
      </header>
      <div className={styles.content}>
        <p>
          {
            content.map((line, index) => {
              if(line.type === 'paragraph') return <p key={index}>{line.content}</p>
              if(line.type === 'link') return <p key={index}><a href={line.content}>{line.content.split('://')[1]}</a></p>
              if(line.type === 'hashtags') return <p key={index}>{
                line.content.map((hashtag, index) =>
                  <a key={index} href={`/hashtag/${hashtag}`}>#{hashtag}</a>
                )
              }</p>
            })
          }
        </p>
      </div>
      <form className={styles.commentForm} onSubmit={handleCreateNewComment}>
        <strong>Deixe seu feedback</strong>
        <textarea
          name="comment"
          placeholder="Deixe um comentário"
          onChange={handleChangeNewComment}
          value={newCommentText}
          required
          onInvalid={handleNewCommentInvalid}
        />
        <footer>
          <button
            type="submit"
            disabled={isNewCommentEmpty}
          >
            Publicar
          </button>
        </footer>
      </form>

      <div className={styles.commentList}>
        {
          comments.map((comment) => (
            <Comment
              key={comment.id}
              comment={comment}
              onDeleteComment={deleteComment}
            />
          ))
        }
      </div>
    </article>
  )
}