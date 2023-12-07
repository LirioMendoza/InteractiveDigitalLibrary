import React, { useEffect, useState } from 'react';
import {Card, Grid, CardActions, CardContent, CardMedia, Button, Typography} from '@mui/material';
import { Dialog, DialogTitle, DialogContent, DialogActions } from '@mui/material';
import { Alert } from '@mui/material';
import Download from '../download/downloads';
import ButtonPDf from '@/components/read/button-Pdf';
import Comments from '../comments/Comments';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';

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

export default function ImgMediaCard({ resource_id, title, imageSrc, description }) {
  const { status, data: session } = useSession();
  const router = useRouter();
  const [isModalOpen, setIsModalOpen] = useState(false); // State

  useEffect(() => {
    if (!(status === 'authenticated' && session)) {
      router.push('/login'); //return to login page
    }
  }, [status, session, router]);

  try{
    console.debug({ level: LOG_LEVELS.DEBUG, message: 'Trying to show the Cards Media of the books' });
    return (
      <Card sx={{ maxWidth: 200, height:"300"}}>
        <CardMedia component="img" alt={title} height="250" image={imageSrc} />
        {/* This shows the title and author of the book showed */}
        <CardContent >
          <Typography gutterBottom variant="h6" component="div"> {title} </Typography>
          <Typography variant="body2" color="text.secondary"> {description} </Typography>
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
            <ButtonPDf code={title}/>
          </CardActions>
        </Grid>

        {/* Download Button */}
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

