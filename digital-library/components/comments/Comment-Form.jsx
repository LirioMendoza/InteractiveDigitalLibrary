'use client';

import { useState } from 'react';

import { TextField, FormControl, InputLabel, Box, Button } from '@mui/material';
import Stack from '@mui/material/Stack';
import Theme from '@/styles/theme';

import SelectStars from './Select-Stars';
import SubmitButton from './Submit-Button';
import { ThemeProvider } from '@mui/material/';

/* 
Description: Handles every part of the comment Form.
*/

const CommentForm = ({ addComment }) => {

  const [rating, setRating] = useState(0); 
  const [title, setTitle] = useState('');
  const [comment, setComment] = useState('');

  //Handling rating when setting a new one
  const handleRatingChange = (newRating) => {
    setRating(newRating);
  };

  //Handling Submit Comment 
  const handleSubmit = (e) => {
    e.preventDefault();
    console.info({level: "INFO", message: "Trying to submit comment form."});
    try {
      //For title with less than 5 letters.
      if (title.trim() === '' || comment.trim() === '' || rating < 0 || rating > 5) {
        throw new Error("Invalid arguments");
      }

      addComment({ comment, title, rating });
      setComment('');
      setTitle('');
      setRating(0);

      console.log({level: "SUCCESS", message: "Comment form submitted."});
      
    }catch (error) {
      console.error({level: "WARNING", message: error.message, error});
    }

    console.info({level: "DEBUG", message: "Rating value.", data: rating});
    console.info({level: "DEBUG", message: "Title", data: title});
    console.info({level: "DEBUG", message: "Comment text", data: comment});

  };

  return (
    <ThemeProvider theme={Theme}>
      <Box sx={{ maxWidth: '400px', margin: '0 auto'}} >
      
        {/* Rating section */}
        <FormControl fullWidth margin="normal">
          <Stack direction="row" spacing={2} justifyContent="center">
           <InputLabel htmlFor="rating">Rating</InputLabel>
           <SelectStars onRatingChange={handleRatingChange} id="rating" />
          </Stack>
        </FormControl>

        {/* Title section */}
        <FormControl fullWidth margin="normal">
          <TextField
          required
            type="text"
            value={title}
            label="Title"
            onChange={(e) => setTitle(e.target.value)}
            placeholder="What's the central theme of your comment?"
            variant="outlined"
          />
        </FormControl>

        {/* Comment section */}
        <FormControl fullWidth margin="normal">
          <TextField
          required
            type="text"
            value={comment}
            label="Comment"
            onChange={(e) => setComment(e.target.value)}
            placeholder="Write a comment..."
            variant="outlined"
            multiline
            rows={4}
          />
        </FormControl>

        {/* Add comment Button */}
        <Button onClick={handleSubmit} >
          <SubmitButton label="Add comment"/>
        </Button>
      
      </Box>
    </ThemeProvider>
  );
};

export default CommentForm;