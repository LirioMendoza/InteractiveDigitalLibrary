import React, { useEffect } from 'react';
import UserInfo from '@/components/user-info';
import { Grid } from '@mui/material';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';

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
        style={{ height: '100vh', marginTop: '-24px' }}
      >
        <UserInfo />
      </Grid>
    );
  }

  return (
    <div> Loading... </div> // You can show a loading message while the session is being verified
  );
}
