'use client';

import { useState } from 'react';

import { TextField, FormControl, InputLabel} from '@mui/material';
import Stack from '@mui/material/Stack';

import SelectStars from './selectStars';
import SubmitButton from './submitButton';

const CommentForm = ({ addComment }) => {

  const [rating, setRating] = useState(0);
  const [title, setTitle] = useState('');
  const [comment, setComment] = useState('');

  const handleRatingChange = (newRating) => {
    setRating(newRating);
  };

  const handleSubmit = (e, newRating) => {
    e.preventDefault();
    if (comment.trim() === '' || rating < 0 || rating > 5) {
      return "Argumentos inválidos";
    }
    addComment({ comment, title, rating });
    setComment('');
    setRating(newRating);
  };

  return (
    <form onSubmit={handleSubmit} style={{ maxWidth: '400px', margin: '0 auto', textAlign: 'center' }}>
      <FormControl fullWidth margin="normal">
      <Stack direction="row" spacing={2} justifyContent="center">
        <InputLabel>Rating</InputLabel>
        <SelectStars onRatingChange={handleRatingChange} />
      </Stack>
      </FormControl>
      <FormControl fullWidth margin="normal">
        <TextField
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
    </form>
  );
};

export default CommentForm;