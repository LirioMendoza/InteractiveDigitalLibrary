'use client';

import { useState } from 'react';

const CommentForm = ({ addComment }) => {

  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (comment.trim() === '' || rating < 0 || rating > 5) {
      return;
    }
    addComment({ comment, rating });
    setComment('');
    setRating(0);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Calificación:
        <input
          type="number"
          value={rating}
          onChange={(e) => setRating(parseInt(e.target.value))}
          min="0"
          max="5"
          placeholder="Calificación (0-5)"
        />
      </label>
      <label>
        Comentario:
        <input
          type="text"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          placeholder="Escribe un comentario..."
        />
      </label>
      <button type="submit">Agregar Comentario</button>
    </form>
  );
};

export default CommentForm;