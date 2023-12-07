import SignInBtn from '@/components/signin-btn';
import { Grid } from '@mui/material';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';

/*
Description: Login Page for Library
*/

export default function Login() {
  const { status, data: session } = useSession();
  const router = useRouter();

  if (status === 'authenticated' && session) {
    router.push('/profile');
  }

  return (
    <Grid 
      container
      justifyContent='center'
      alignItems='center'
      style={{ height: '100vh', marginTop: '-24px' }}
    >
      <SignInBtn />
    </Grid>
  );
}