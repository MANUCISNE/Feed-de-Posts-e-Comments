import styles from './Comment.module.css';
import { Avatar } from './Avatar';

import { ThumbsUp, Trash } from 'phosphor-react';
import { useState } from 'react';

interface CommentProps {
  content: string;
  onDeleteComment: (comment: string) => void;
}

export function Comment({ content, onDeleteComment }: CommentProps) {

  const [likeCount, setLikeCount] = useState(0);

  function handleDeleteComment() {
    onDeleteComment(content);
  }

  function handleLikeComment() {
    //aqui o react me dar o valor atual de like e não o valor inicial do estado
    setLikeCount((state) => {
      return state + 1;
    }); 
  }

  return (
    <div className={styles.comment}>

      <Avatar 
        hasBorder={false} 
        src='https://avatars.githubusercontent.com/u/117774887?v=4' 
        alt=""
      />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Emanuela Cisne</strong>
              <time title='28 de Fevereiro às 12:49' dateTime='2023-02-28 12:48:30'>Cerca de 1h atrás</time>
            </div>

            <button onClick={handleDeleteComment}title="Deletar comentário">
              <Trash size={24}/>
            </button>
          </header>

          <p>
            {content}
          </p>
        </div>

        <footer>
          <button onClick={handleLikeComment}> 
            <ThumbsUp />
            Aplaudir <span>{likeCount}</span>
          </button>
        </footer>
      </div>
    
    </div>
  )
}