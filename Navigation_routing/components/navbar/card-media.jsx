import * as React from 'react';
import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import DownloadIcon from '@mui/icons-material/Download';
import Download from './downloads';
import Page from './read';

export default function ImgMediaCard({ title, imageSrc, description }) {
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
          <Button size="small" variant="contained">Comment</Button>
          <Button  size="small" variant="contained"><Page key={title}></Page></Button>

        </CardActions>
      </Grid>
      <Grid item>
        <CardActions >
          <Download></Download>
        </CardActions>
      </Grid>
      
    </Card>
  );
}
