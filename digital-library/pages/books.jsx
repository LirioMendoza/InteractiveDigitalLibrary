import React, { useEffect, useState } from 'react';
import Grid from '@mui/material/Grid';
import { Alert, Card, Typography, Paper, Container } from '@mui/material';
import Portada from '../components/portada';
import ImgMediaCard from '@/components/card_books/card-media';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import { getResources } from '@/utils/api'; //API

/* BasicAppGrid 

Description: Main section that encapsulates the catalog to show it.

*/

export default function BasicAppGrid() {

  const { status, data: session } = useSession();
  const router = useRouter();
  const [resources, setResources] = useState([]);

  useEffect(() => {
     if (!(status === 'authenticated' && session)) { //if the user doesn't have a session
      router.push('/login'); //returns to login page
     }
     async function fetchResources() {
      try {
        const data = await getResources();
        console.log({ level: "INFO", message: 'Trying to get resources from DB.', data: data });
        setResources(data);
      } catch (error) {
        console.error('Error fetching Resources:', error);
      }
    }

    fetchResources();
  }, [status, session, router]);

  if (status === 'authenticated' && session) { //if the user has a session
    try{
      
    return (
      <Grid container spacing={0.5}>
          <Portada />
          {resources.map((resource) => (
            <Grid item key={resource._id} xs={6} sm={4} md={2} lg={2} sx={{ padding: 1.5 }}>
              <ImgMediaCard resource_id={resource._id} title={resource.title} imageSrc={resource.imageSrc} description={resource.description} />
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
  //Shows a 403 error page
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