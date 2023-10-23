'use client';

import { Box } from '@mui/material';
import { useSession, signIn, signOut } from 'next-auth/react';
import SignInBtn from './SignInBtn';

export default function Signin() {
    const { status } = useSession();

    return (
        
    <Box sx={{  display: 'flex',
                flexDirection:'column',
                textAlign: 'center',
                boxShadow: 10, 
                my: '2rem',
                mx:'0.5rem',
                p: '2rem',
                borderBottom: 4, 
                borderBottomColor: 'primary.main',
                borderRadius: 5,
            }} > 
      <h2  sx={{}} >Inicia Sesión </h2>

      <SignInBtn></SignInBtn>
      
    </Box>
    );
}

