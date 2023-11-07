import React from 'react';

import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

import RatingStars from './ratingStars';

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


const CommentList = ({ comments }) => {
  
  return (

    <ThemeProvider theme={theme}>
    <div>
      <Typography variant="h6"  sx={{ fontWeight: 'bold' ,m: '1rem', }} >Customer comments: </Typography>  
        {comments.map((comment, index) => (
          <Card key={index} sx={{ maxWidth: 345, margin: '16px'}}>
            <CardHeader
              action={  <RatingStars rating={comment.rating} /> }
              title={comment.title} 
              subheader="October 26, 2023"
              sx={{color:"secondary.main" }} >
                
            </CardHeader>
            <CardContent>
              <Typography variant="body2" color="text.main">
                {comment.comment}
              </Typography>
            </CardContent>
          </Card>  
        ))}   
    </div>
    </ThemeProvider>
  );
};

export default CommentList;