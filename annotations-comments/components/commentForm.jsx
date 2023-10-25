'use client';

import { useState } from 'react';
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
      return;
    }
    addComment({ comment, title, rating });
    setComment('');
    setRating(newRating);
  };

  return (
    <form onSubmit={handleSubmit}>
      <SelectStars onRatingChange={handleRatingChange} />
      <label>
        Title:
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="What's the central theme of your comment?"
        />
      </label>
      <label>
        Comments:
        <input
          type="text"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          placeholder="Write a comment..."
        />
      </label>
      <SubmitButton label="Add comment"/>
    </form>
  );
};

export default CommentForm;