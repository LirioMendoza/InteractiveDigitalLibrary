import React from 'react';
import Grid from '@mui/material/Grid';
import { Alert } from '@mui/material';
import Portada from '../components/portada';
import ImgMediaCard from '@/components/card_books/card-media';
import jsonData from '@/components/card_books/books.json';

export default function BasicAppGrid() {
  try{
    
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
  }catch(error){
    return (
      <Alert severity="error">Error: No se pudo caragr el catálogo.</Alert>
    );
  }
}
