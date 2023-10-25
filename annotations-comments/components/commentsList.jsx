import React from 'react';

const CommentList = ({ comments }) => {
  return (
    <div>
      <h2>Comentarios:</h2>
      <ul>
        {comments.map((comment, index) => (
          <li key={index}>
            <strong>Comentario:</strong> {comment.comment} <br />
            <strong>Calificación:</strong> {comment.rating} estrellas
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CommentList;