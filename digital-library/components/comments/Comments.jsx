'use client';

import { useState } from 'react';
import CommentForm from './Comment-Form';
import CommentList from './Comments-List';
import { Typography, Box  } from '@mui/material';

/* 
Description: Encapsulates the main section for comments section.
*/ 

export default function Comments() {
  console.log({ level: "INFO", message: 'Trying to show Comments module.' });
  try{
    const [comments, setComments] = useState([]);
    const addComment = (newComment) => {
      console.log({ level: "INFO", message: 'Adding a new comment.' });
      try{
        setComments([...comments, newComment]);
        console.log({ level: "SUCCESS", message: 'A new comment has been added.' });
      }catch{
        console.error({ level: "ERROR", message: 'An error occurred while adding a comment.', error })
      }
    };

    return ( //shows the comment section
        <Box>
          <Typography variant="h6"  
            sx={{ maxWidth: '400px', 
                  fontWeight: 'bold' ,
                  m: '1rem', }} >
            Leave your opinion about this reading material... 
          </Typography>  
          <CommentForm addComment={addComment} />
          <submitButton/> 
          <CommentList comments={comments} />
        </Box>
    )
  }catch(error){
    console.error({ level: "ERROR", message: 'An error occurred with Comments module.', error })
  }
}
