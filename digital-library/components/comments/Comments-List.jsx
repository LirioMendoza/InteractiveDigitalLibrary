import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import RatingStars from './Rating-Stars';
import DeleteIcon from '@mui/icons-material/Delete'; 
import EditIcon from '@mui/icons-material/Edit'; 
import { Box, ThemeProvider, Dialog} from '@mui/material/';
import Theme from '@/styles/theme';
import CommentUpdateForm from './Comment-Update-Form';

/* 
Description: Gives the format that will be used for the comments.
*/ 
const CommentList = ({ comments }) => {
  console.info({ level: "INFO", message: 'Trying to show a list of comments.' });
  
  const [commentList, setCommentList] = useState(comments);
  const [editCommentId, setEditCommentId] = useState(null);  
  const [editCommentText, setEditCommentText] = useState(''); 

  const handleEdit = (commentId) => {
    const commentToEdit = commentList.find(comment => comment.id === commentId);

    if (commentToEdit) {
      setEditCommentId(commentId);
      setEditCommentText(commentToEdit.comment);
      setIsEditing(true);
    } else {
      console.error(`No se encontró el comentario con ID: ${commentId}`);
    }
  };

  const handleSaveEdit = () => {
    const updatedComments = commentList.map(comment => {
      if (comment.id === editCommentId) {
        return { ...comment, comment: editCommentText };
      }
      return comment;
    });
    setCommentList(updatedComments);
    setEditCommentId(null);
    setEditCommentText('');
    setIsEditing(false);
  };

  const handleCancelEdit = () => {
    setEditCommentId(null);
    setEditCommentText('');
    setIsEditing(false);
  };


  const handleDelete = (commentId) => {
    const updatedComments = commentList.filter(comment => comment.id !== commentId);
    setCommentList(updatedComments);
    console.log(`Eliminar comentario con ID: ${commentId}`);
  };

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
                {/* Card Actions - Edit and Delete Buttons */}
                <CardActions>
                  <Button
                    size="small"
                    color="primary"
                    startIcon={<EditIcon />}
                    onClick={() => handleEdit(comment.id)}
                  >
                    Editar
                  </Button>
                  <Button
                    size="small"
                    color="secondary"
                    startIcon={<DeleteIcon />} 
                    onClick={() => handleDelete(comment.id)}
                  >
                    Eliminar
                  </Button>
                </CardActions>
              </Card>  
            ))}
            {/* Ventana modal para editar */}
            <Dialog open={editCommentId !== null} onClose={handleCancelEdit}>
              <Box p={2}>
                <CommentUpdateForm/>
                <Box mt={2} display="flex" justifyContent="flex-end">
                  <Button onClick={handleCancelEdit} color="secondary">
                    Cancelar
                  </Button>
                  <Button onClick={handleSaveEdit} color="primary">
                    Guardar
                  </Button>
                </Box>
              </Box>
            </Dialog>   
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