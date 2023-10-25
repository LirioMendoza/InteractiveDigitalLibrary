'use client';

import { useState } from 'react';
import styles from './page.module.css'
import CommentForm from '@/components/commentForm';
import CommentList from '@/components/commentsList';

export default function Home() {

  const [comments, setComments] = useState([]);

  const addComment = (newComment) => {
    setComments([...comments, newComment]);
  };

  return (
    <main className={styles.main}>
      <div>
        <h1>App de Comentarios</h1>
          <CommentForm addComment={addComment} />
          <CommentList comments={comments} />
        </div>
    </main>
  )
}
