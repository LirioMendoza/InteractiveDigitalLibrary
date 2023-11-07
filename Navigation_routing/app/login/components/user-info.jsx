'use client';
import React from 'react';
import Carousel from 'react-material-ui-carousel'
import Item from "../../../components/navbar/Item"
import slider from "helper/slider.json"


 import { Avatar, Grid, Button, Paper, Typography } from '@mui/material';
import Signin from './Signin';
import { useSession, signIn, signOut } from 'next-auth/react';
import { f1 }  from  '@/components/navbar/Carousel';
import BasicAppGrid from '@/components/navbar/basic-app-grid';


export default function UserInfo() {
    const { status, data: session } = useSession();

    if (status === 'authenticated') {
         return (

            <BasicAppGrid>
                
            </BasicAppGrid>
        //      <Grid container justifyContent='center'>
        //          <Paper elevation={8}  
        //                 sx={{ display: 'flex', 
        //                     alignItems:'center', 
        //                     flexDirection:'column', 
        //                     p: '2rem',
        //                     borderRadius: 3, 
        //                     bgcolor: '#5865F2' }}>

        //             <Avatar src={session?.user?.image} 
        //                     sx={{ width: 60, 
        //                     height: 60, 
        //                     bgcolor: 'white' }}/>
                    
        //             <Typography variant='h6' 
        //                         sx={{mt: 2, 
        //                             color: '#FFFFFF', 
        //                             textAlign: 'center',}}>
        //                 Usuario: 
        //                 <Typography variant='subtitle1'  
        //                             component='span' 
        //                             sx={{fontWeight: 'bold' }}>
        //                     {session?.user.name}
        //                 </Typography>
        //             </Typography>

        //              <Typography variant='h6' 
        //                         sx={{ mt: 2, 
        //                             color: '#FFFFFF', 
        //                         textAlign: 'center', }}>
        //                 Correo: 
        //                 <Typography variant='subtitle1' 
        //                             component='span' 
        //                             sx={{ fontWeight: 'bold' }}>
        //                     {session?.user.email}
        //                 </Typography>
        //              </Typography>

        //              {status === 'authenticated' ? (
        //                 <Button onClick={() => signOut()} color='inherit'>Cerrar Sesión</Button>
        //             ) : null }

        //          </Paper>
        //      </Grid>

          );
     } else {
          return <Signin/>;
     } 
}