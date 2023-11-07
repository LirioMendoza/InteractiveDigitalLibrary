import UserInfo from '@/components/user-info';

import { Grid, } from '@mui/material';

export default function Home() {
  return (

  <Grid container
      justifyContent='center'
      alignItems='center'
      style={{ height: '100vh', 
              marginTop: '-12px' }}>

    <UserInfo />
  </Grid>

  );
}
