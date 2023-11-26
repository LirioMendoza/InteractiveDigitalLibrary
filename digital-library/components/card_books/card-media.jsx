import React, { useEffect } from 'react';
import {Card, Grid, CardActions, Container, CardContent, CardMedia, Button, Typography, Fade, Paper, Popper} from '@mui/material';
import { Alert } from '@mui/material';
import Download from '../download/downloads';
import ButtonPDf from '@/components/read/button-Pdf';
import Comments from '../comments/Comments';
import PopupState, { bindToggle, bindPopper } from 'material-ui-popup-state';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
const LOG_LEVELS = {
  INFO: 'INFO',
  SUCCESS: 'SUCCESS',
  ERROR: 'ERROR',
  WARNING: 'WARNING',
  DEBUG: 'DEBUG',
};

export default function ImgMediaCard({ title, imageSrc, description }) {

  const { status, data: session } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (!(status === 'authenticated' && session)) {
      router.push('/login');
    }
  }, [status, session, router]);

  
    try{
      console.debug({ level: LOG_LEVELS.DEBUG, message: 'Trying to show the Cards Media of the books' });
      return (
        <Card sx={{ maxWidth: 200, height:"300"}}>
          <CardMedia component="img" alt={title} height="250" image={imageSrc} />
          <CardContent >
            <Typography gutterBottom variant="h6" component="div">
              {title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {description}
            </Typography>
          </CardContent>
          <Grid item sx={{display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      weight: '100vh'}}>
            <CardActions>
              <PopupState variant="popper" popupId="demo-popup-popper">
                {(popupState) => (
                  <Container>
                    <Button variant="contained" {...bindToggle(popupState)}>
                      Comment
                    </Button>
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
          <Grid item sx={{display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      weight: '100vh'}}>
            <CardActions >
              <ButtonPDf code={title}/>
            </CardActions>
          </Grid>
          <Grid item sx={{display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      weight: '100vh'}}>
            <CardActions >
              <Download Title={title}></Download>
            </CardActions>
          </Grid>
        </Card>
      );
    }catch(error){
      console.error({ level: LOG_LEVELS.ERROR, message: 'Book could not be loaded.', error });
      <Alert severity="error">Error: Book could not be loaded</Alert>
    }
}

