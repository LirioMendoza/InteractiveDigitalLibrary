'use client';

import React, { useState, useEffect } from 'react';
import CommentForm from './Comment-Form';
import CommentList from './Comments-List';
import { Typography, Box  } from '@mui/material';

import { getComments } from '@/utils/api'; //API

/* 
Description: Encapsulates the main section for comments section.
*/ 

export default function Comments({ resource_id } ) {
  console.log({ level: "INFO", message: 'Trying to show Comments module.' });
  try{
    const [comments, setComments] = useState([]);

    useEffect(() => {
      async function fetchComments() {
        try {
          const data = await getComments(resource_id);
          console.log({ level: "INFO", message: 'Trying to get comments from de DB.', data: data });
          setComments(data);
        } catch (error) {
          console.error('Error fetching Comments:', error);
        }
      }
  
      fetchComments();
    }, []);
  
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
          <CommentList comments={comments} />
        </Box>
    )
  }catch(error){
    console.error({ level: "ERROR", message: 'An error occurred with Comments module.', error })
  }
}
