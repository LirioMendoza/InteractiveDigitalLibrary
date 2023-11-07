'use client';

import { useState } from 'react';
import styles from './page.module.css'
import CommentForm from '@/components/commentForm';
import CommentList from '@/components/commentsList';

import { Typography   } from '@mui/material';

export default function Home() {

  const [comments, setComments] = useState([]);

  const addComment = (newComment) => {
    setComments([...comments, newComment]);
  };

  return (
    <main className={styles.main}>
      <div>
      <Typography variant="h6"  sx={{ fontWeight: 'bold' ,m: '1rem', }} >Leave your opinion about this reading material... </Typography>  
          <CommentForm addComment={addComment} />
          <submitButton/>
          <CommentList comments={comments} />
        </div>
    </main>
  )
}
