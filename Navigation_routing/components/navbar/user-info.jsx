'use client';


import { useSession } from 'next-auth/react';
 import { Avatar, Grid, Paper, Typography } from '@mui/material';
import Signin from './Signin';


          
export default function UserInfo() {
    const { status, data: session } = useSession();

    if (status === 'authenticated') {
         return (

             <Grid container justifyContent='center'>
                 <Paper elevation={8}  
                        sx={{ display: 'flex', 
                            alignItems:'center', 
                            flexDirection:'column', 
                            p: '2rem',
                            borderRadius: 3, 
                            bgcolor: '#5865F2' }}>

                    <Avatar src={session?.user?.image} 
                            sx={{ width: 60, 
                            height: 60, 
                            bgcolor: 'white' }}/>
                    
                    <Typography variant='h6' 
                                sx={{mt: 2, 
                                    color: '#FFFFFF', 
                                    textAlign: 'center',}}>
                        Usuario: 
                        <Typography variant='subtitle1'  
                                    component='span' 
                                    sx={{fontWeight: 'bold' }}>
                            {session?.user.name}
                        </Typography>
                    </Typography>

                     <Typography variant='h6' 
                                sx={{ mt: 2, 
                                    color: '#FFFFFF', 
                                textAlign: 'center', }}>
                        Correo: 
                        <Typography variant='subtitle1' 
                                    component='span' 
                                    sx={{ fontWeight: 'bold' }}>
                            {session?.user.email}
                        </Typography>
                     </Typography>

                 </Paper>
             </Grid>

         );
     } else {
          return <Signin/>;
     } 
}