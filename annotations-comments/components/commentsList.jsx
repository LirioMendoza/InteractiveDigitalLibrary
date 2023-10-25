import React from 'react';

import RatingStars from './ratingStars';

const CommentList = ({ comments }) => {
  return (
    <div>
      <h2>Customer comments:</h2>
      <ul>
        {comments.map((comment, index) => (
          <li key={index}>
            <RatingStars rating={comment.rating}/>
            <strong> {comment.title}</strong> <br />
            {comment.comment} <br />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CommentList;