'use client';

import { Paper, Box, Button, Typography } from '@mui/material';
import Image from 'next/image';
import { signIn } from 'next-auth/react';

export default function SignInBtn() {
  return (
    <Button     onClick={() => signIn('discord')}
                variant='contained'
                color='primary'
                sx={{   bgcolor: '#5865F2', borderRadius: '12px',
                        p: '1rem', 
                        '&:hover': {
                            backgroundColor: '#EB459E',
                        },
                }}>
        <Box  sx={{ fontSize: 30, mr: '0.8rem'}} />
                
                <Image  variant='contained' alt="logo_Discord"  width= '60' height='60'
                src={"/login_app/images/clyde.png"} 
                
                 />
 
            <Typography variant="button" sx={{  m:1, color: 'white' }}>
                Inicia sesión con Discord
            </Typography>
    </Button>
  );
}