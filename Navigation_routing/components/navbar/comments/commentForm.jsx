'use client';

import { useState } from 'react';

import { TextField, FormControl, InputLabel} from '@mui/material';
import Stack from '@mui/material/Stack';

import SelectStars from './selectStars';
import SubmitButton from './submitButton';
import { createTheme, ThemeProvider } from '@mui/material/';

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#29a493',
      dark: '#1C7266',
      contrastText: '#fff',
    },
    secondary: {
      main: '#7c2ec1',
      light:'#9657CD',
      dark: '#562087',
      contrastText: '#fff',
    },}, 
  }
  );


const CommentForm = ({ addComment }) => {

  const [rating, setRating] = useState(0);
  const [title, setTitle] = useState('');
  const [comment, setComment] = useState('');

  const handleRatingChange = (newRating) => {
    setRating(newRating);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("INFO: Trying to submit comment form.");
    try {
      if (title.trim() === '' || comment.trim() === '' || rating < 0 || rating > 5) {
        throw new Error("Invalid arguments");
      }
      addComment({ comment, title, rating });
      setComment('');
      setTitle('');
      setRating(0);
      console.log("SUCCES: Comment form submitted.");
    } catch (error) {
      console.error("ERROR:", error.message);
    }
    console.info("DEBUG: Rating value:", rating);
    console.info("DEBUG: Title:", title);
    console.info("DEBUG: Comment:", comment);
  };

  return (
    <form onSubmit={handleSubmit} style={{ maxWidth: '400px', margin: '0 auto', textAlign: 'center' }}>
      <ThemeProvider theme={theme}>
      <FormControl fullWidth margin="normal">
      <Stack direction="row" spacing={2} justifyContent="center">
        <InputLabel >Rating</InputLabel>
        <SelectStars onRatingChange={handleRatingChange} />
      </Stack>
      </FormControl>
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
      <SubmitButton label="Add comment"/>
      </ThemeProvider>
    </form>
  );
};

export default CommentForm;