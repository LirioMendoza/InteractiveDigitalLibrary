import * as React from 'react';
import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import DownloadIcon from '@mui/icons-material/Download';
import { Alert } from '@mui/material';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import Download from './downloads';
import Fade from '@mui/material/Fade';
import Paper from '@mui/material/Paper';
//import Page from './reading/page';
import ButtonPDf from '../../app/reading/buttonPdf';
import Comments from '../comments/comments';
import Popper from '@mui/material/Popper';
import PopupState, { bindToggle, bindPopper } from 'material-ui-popup-state';
export default function ImgMediaCard({ title, imageSrc, description }) {
  try{
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
        <Grid item>
          <CardActions>
          <PopupState variant="popper" popupId="demo-popup-popper">
      {(popupState) => (
        <div>
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
        </div>
      )}
    </PopupState>
            <ButtonPDf code={title}></ButtonPDf>
  
          </CardActions>
        </Grid>
        <Grid item>
          <CardActions >
            <Download></Download>
          </CardActions>
        </Grid>
        
      </Card>
    );
  }catch(error){
    <Alert severity="error">Error: No se  pudo cargar el Libro.</Alert>
  }
  
}
