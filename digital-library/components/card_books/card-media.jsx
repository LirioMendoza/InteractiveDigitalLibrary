import React, { useEffect, useState } from 'react';
import {Card, Grid, CardActions, CardContent, CardMedia, Button, Typography} from '@mui/material';
import { Dialog, DialogTitle, DialogContent, DialogActions } from '@mui/material';
import { Alert } from '@mui/material';
import Download from '../download/downloads';
import ButtonPDf from '@/components/read/button-Pdf';
import Comments from '../comments/Comments';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import { ThemeProvider } from '@mui/material/styles';
import Theme from '@/styles/theme';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

const LOG_LEVELS = {
  INFO: 'INFO',
  SUCCESS: 'SUCCESS',
  ERROR: 'ERROR',
  WARNING: 'WARNING',
  DEBUG: 'DEBUG',
};

/* 
Description: Gives the format for every book that will be showing in the catalog. 
Data for the books will be taken from the data base.
*/


export default function ImgMediaCard({ resource_id, title, imageSrc, description, author }) {
  const { status, data: session } = useSession();
  const router = useRouter();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [lookDescripcion, setMostrarDescripcion] = useState(false); 
  //show description
  const toggleDescripcion = () => {
    setMostrarDescripcion(!lookDescripcion);
  };


  useEffect(() => {
    try{
      if (!(status === 'authenticated' && session)) {
        router.push('/login'); //return to login page
      }
    }catch(error){
      console.error('Error in useEffect:', error);
    }
   
  }, [status, session, router]);

  try{
    console.debug({ level: LOG_LEVELS.DEBUG, message: 'Trying to show the Cards Media of the books' });
    return (
      <ThemeProvider theme={Theme}> 
      <Card sx={{ maxWidth: "200px", height: "300"}}>
        <CardMedia component="img" alt={title} height="250" image={imageSrc} />
        {/* This shows the title and author of the book showed */}
        <CardContent >
          <Typography gutterBottom variant="subtitle1" component="div"> {title} </Typography>
          <Typography  variant="body2" color="text.secondary"> {author} </Typography>
          {lookDescripcion && (
            <Typography variant="body2" color="text.secondary" sx={{ textAlign: 'justify'}}> {description} </Typography>
          )}
          <Grid item sx={{display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    weight: '100vh'}}>
            <Button sx={{ color:"secondary.main", }}  
            size="small" onClick={toggleDescripcion}>{lookDescripcion ? <ArrowDropUpIcon sx={{ fontSize: 50 }}/> : <ArrowDropDownIcon sx={{ fontSize: 50 }}/> }</Button>          
          </Grid>
          
        </CardContent>

        {/* Comments Button */}
        <Grid item sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          weight: '100vh'
        }}>
          <CardActions>
            <Button variant="contained" onClick={() => setIsModalOpen(true)}> Comment </Button>
            <Dialog open={isModalOpen} onClose={() => setIsModalOpen(false)}>
              <DialogTitle>{title}</DialogTitle>
              <DialogContent>
                <Comments resource_id={resource_id} />
              </DialogContent>
              <DialogActions>
                <Button onClick={() => setIsModalOpen(false)}>Close</Button>
              </DialogActions>
            </Dialog>
          </CardActions>
        </Grid>

        {/* Read Button */}
        <Grid item sx={{display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    weight: '100vh'}}>
          <CardActions >
            <ButtonPDf size="small" code={title}/>
          </CardActions>
        </Grid>

        {/* Download Button */}
        <Grid item sx={{display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    weight: '100vh'}}>
          <CardActions >
            <Download  Title={title}></Download>
          </CardActions>
        </Grid>

      </Card>
      </ThemeProvider>
    );
    }catch(error){
      console.error({ level: LOG_LEVELS.ERROR, message: 'Book could not be loaded.', error });
      <Alert severity="error">Error: Book could not be loaded</Alert>
    }
}

