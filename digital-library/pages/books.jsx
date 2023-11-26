import React, { useEffect } from 'react';
import Grid from '@mui/material/Grid';
import { Alert, Card, Typography, Paper, Container } from '@mui/material';
import Portada from '../components/portada';
import ImgMediaCard from '@/components/card_books/card-media';
import jsonData from '@/components/card_books/books.json';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';

export default function BasicAppGrid() {
  const { status, data: session } = useSession();
  const router = useRouter();

  useEffect(() => {
     if (!(status === 'authenticated' && session)) {
      router.push('/login');
     }
  }, [status, session, router]);


  if (status === 'authenticated' && session) {
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
      <Alert severity="error">Error: Catalog cannot be loaded.</Alert>
    );
  }
}
return (
  <Grid container 
  flexDirection='column'  
  justifyContent='center'
  alignItems='center' 
  sx={{ textAlign:'center', mt:'5rem' }} >
    <Typography variant='h1' sx={{fontWeight: 'bold'}}> 403 </Typography>
    <Typography variant='h5' sx={{fontWeight: 'bold' }}> Forbidden</Typography>
    <Typography variant='subtitle1'> Access to this resource on the server is denied! </Typography>
  </Grid>
);  
}