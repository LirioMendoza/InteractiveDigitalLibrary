'use client';

import { useState } from 'react';
import CommentForm from './commentForm';
import CommentList from './commentsList';
import { Typography   } from '@mui/material';

export default function Comments() {

  const [comments, setComments] = useState([]);

  const addComment = (newComment) => {
    setComments([...comments, newComment]);
  };

  return (
      <div>
      <Typography variant="h6"  sx={{ fontWeight: 'bold' ,m: '1rem', }} >Leave your opinion about this reading material... </Typography>  
          <CommentForm addComment={addComment} />
          <submitButton/>
          <CommentList comments={comments} />
        </div>
  )
}
