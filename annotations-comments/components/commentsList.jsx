import React from 'react';

import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

import RatingStars from './ratingStars';

const CommentList = ({ comments }) => {
  
  return (
    <div>
      <h2>Customer comments:</h2>
        {comments.map((comment, index) => (
          <Card key={index} sx={{ maxWidth: 345, margin: '16px'}}>
            <CardHeader
              action={
                <RatingStars rating={comment.rating} />
              }
              title={comment.title}
              subheader="October 26, 2023">
            </CardHeader>
            <CardContent>
              <Typography variant="body2" color="text.secondary">
                {comment.comment}
              </Typography>
            </CardContent>
          </Card>  
        ))}   
    </div>
  );
};

export default CommentList;