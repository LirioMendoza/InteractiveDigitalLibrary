import React, { useEffect } from 'react';
import UserInfo from '@/components/user-info';
import { Grid, Box } from '@mui/material';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';

/*
Description: User Profile Page for Library
*/

export default function Profile() {
  const { status, data: session } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (!(status === 'authenticated' && session)) {
      router.push('/login');
    }
  }, [status, session, router]);

  if (status === 'authenticated' && session) {
    return (
      <Grid 
        container
        justifyContent='center'
        alignItems='center'
        style={{ height: '100vh', marginTop: '24px' }}
      >
        <UserInfo />
      </Grid>
    );
  }

  return (
    <Box component='div'> Loading... </Box> // Puedes mostrar un mensaje de carga mientras se verifica la sesión
  );
}
