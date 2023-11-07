import React from 'react';
import Grid from '@mui/material/Grid';
import Portada from './Portada';
import ImgMediaCard from './card-media';
import jsonData from './books.json'; // Importa el JSON

export default function BasicAppGrid() {
  const { title, imageSrc, description } = jsonData;

  return (
    <Grid container spacing={0.5}>
       <Grid item xs={12}>
       <Portada/>
      </Grid>

      {jsonData.map((book, index) => (
        
        <Grid item key={index} xs={6} sm={4} md={2} lg={2} sx={{ padding: 1.5 }}>
          <ImgMediaCard title={book.title} imageSrc={book.imageSrc} description={book.description} />
        </Grid>

      ))}
    </Grid>
  );
}
