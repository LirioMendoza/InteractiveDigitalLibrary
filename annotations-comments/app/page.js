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
        <h2>Leave your opinion about this reading material...</h2>
          <CommentForm addComment={addComment} />
          <submitButton/>
          <CommentList comments={comments} />
        </div>
    </main>
  )
}
