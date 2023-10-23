'use client';

import Signin from './Signin';
import { useSession } from 'next-auth/react';
 import { Avatar, Grid, Paper, Typography } from '@mui/material';

export default function UserInfo() {
    const { status, data: session } = useSession();

    if (status === 'authenticated') {
         return (
             <Grid container justifyContent='center'>
                 <Paper elevation={8}  sx={{ p: 3, borderRadius: 3, bgcolor: '#FFE082' }} >
                     <Typography variant='h5' sx={{ mt: 2 }}>
                         Name: <Typography variant='subtitle1' component='span' sx={{ fontWeight: 'bold' }}>{session?.user.name}</Typography>
                     </Typography>
                     <Typography variant='h5' sx={{ mt: 2 }}>
                         Email: <Typography variant='subtitle1' component='span' sx={{ fontWeight: 'bold' }}>{session?.user.email}</Typography>
                     </Typography>
                 </Paper>

                 <Button
                    onClick={() => signIn('google')}
                    variant='contained'
                    color='primary'
                    sx={{
                        borderRadius: '24px',
                        padding: '8px 16px',
                        boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.2)',
                        '&:hover': {
                        backgroundColor: '#2E7D32',
                        },
                    }}
                    >
                    <GoogleIcon sx={{ fontSize: 30, marginRight: 1 }} />
                    <Typography variant="button" sx={{ color: 'white' }}>
                        Sign in with Google
                    </Typography>
                </Button>


             </Grid>
         );
     } else {
          return <Signin/>;
     } 
}