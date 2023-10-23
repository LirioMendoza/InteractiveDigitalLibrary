import UserInfo from '@/components/user-info';
import SigninForm from '@/components/Signin';

import { Button, Container, Grid, TextField, Box } from '@mui/material';

export default function Home() {
  return (

<Grid 
      container
      justifyContent='center'
      alignItems='center'
      style={{ height: '100vh', marginTop: '-12px' }}
    >
      <UserInfo />

    </Grid>

  );
}
