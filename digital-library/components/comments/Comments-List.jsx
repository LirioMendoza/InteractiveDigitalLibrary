import React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import RatingStars from './Rating-Stars';
import { Box, ThemeProvider } from '@mui/material/';
import Theme from '@/styles/theme';

/* 
Description: Gives the format that will be used for the comments.
*/ 
const CommentList = ({ comments }) => {
  console.info({ level: "INFO", message: 'Trying to show a list of comments.' });
  try{
    console.info({level: "DEBUG", message: 'Comments data.', data: comments})
    if(comments.length != 0){ //For showing comments
      return (
        <ThemeProvider theme={Theme}>
        <Box>
          <Typography variant="h6"  sx={{ fontWeight: 'bold' ,m: '1rem', }} >Customer comments: </Typography>  
            {comments.map((comment, index) => (
              //Format to show the comments.
              <Card key={index} sx={{ maxWidth: 345, margin: '16px'}}>
                {/* Header Comment */}
                <CardHeader
                  action={  <RatingStars rating={comment.rating} /> }
                  title={comment.title} 
                  subheader="November 7, 2023"
                  sx={{color:"secondary.main" }} >
                    
                </CardHeader>

                {/* Comment Content*/}
                <CardContent>
                  <Typography variant="body2" color="text.main">
                    {comment.comment}
                  </Typography>
                </CardContent>
              </Card>  
            ))}   
        </Box>
        </ThemeProvider>
      );
    }else{
      return( //When there are no comments.
        <ThemeProvider theme={Theme}>
          <Box>
            <Typography variant="h6"  sx={{ fontWeight: 'bold' ,m: '1rem', }} >No comments yet. </Typography>  
          </Box>
        </ThemeProvider>
      );
    }
  }catch(error){
    console.error({ level: "ERROR", message: 'An error occurred with CommentList.', error })
  }
  
};

export default CommentList;