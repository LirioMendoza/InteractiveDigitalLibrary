import React, { useEffect } from 'react';
import {Card, Grid, CardActions, Container, CardContent, CardMedia, Button, Typography, Fade, Paper, Popper} from '@mui/material';
import { Alert } from '@mui/material';
import Download from '../download/downloads';
import ButtonPDf from '@/components/read/button-Pdf';
import Comments from '../comments/Comments';
import PopupState, { bindToggle, bindPopper } from 'material-ui-popup-state';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Theme from '@/styles/theme';

const LOG_LEVELS = {
  INFO: 'INFO',
  SUCCESS: 'SUCCESS',
  ERROR: 'ERROR',
  WARNING: 'WARNING',
  DEBUG: 'DEBUG',
};

/* 
Description: Gives the format for every book that will be showing in the catalog. 
Data for the books will be taken from books.json
*/

export default function ImgMediaCard({ title, imageSrc, description, author }) {
  const { status, data: session } = useSession();
  const router = useRouter();
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
            <Button sx={{ color:"primary.dark", }}  
            size="small" onClick={toggleDescripcion}>{lookDescripcion ? 'Less' : 'show more'}</Button>          
          </Grid>
          
        </CardContent>

        {/* Comments Button */}
        <Grid item sx={{display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    weight: '100vh'}}>
          <CardActions>
            <PopupState variant="popper" popupId="demo-popup-popper">
              {(popupState) => (
                <Container>
                  <Button size="small" 
                  variant="contained" {...bindToggle(popupState)} 
                  sx={{ bgcolor:"secondary.light", 
                  '&:hover': { bgcolor:'secondary.dark', }, }} > Comment </Button>
                  <Popper {...bindPopper(popupState)} transition>
                    {({ TransitionProps }) => (
                      <Fade {...TransitionProps} timeout={350}>
                        <Paper>
                          <Typography sx={{ p: 2 }}><Comments/></Typography>
                        </Paper>
                      </Fade>
                    )}
                  </Popper>
                </Container>
              )}
            </PopupState>
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

