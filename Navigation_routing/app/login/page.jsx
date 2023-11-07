// import UserInfo from '@/components/user-info';
import UserInfo from './components/user-info';
import { Grid, } from '@mui/material';

import { NextAuthProvider } from '../Providers'

export default function HomeLogin() {
  return (
    <NextAuthProvider> 
  <Grid container
      justifyContent='center'
      alignItems='center'
      style={{ height: '100vh', 
              marginTop: '-12px' }}>

    <UserInfo />
  </Grid>
  </NextAuthProvider> 

  );
}
