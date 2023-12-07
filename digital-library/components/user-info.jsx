'use client';

import { useSession, signOut } from 'next-auth/react';
import { Avatar, Grid, Card, CardContent, Typography, Button, ThemeProvider } from '@mui/material';
import Link from 'next/link';
import Theme from '@/styles/theme';

export default function UserInfo() {
  const { status, data: session } = useSession();

  if (status === 'authenticated' && session) {
    return (
      <ThemeProvider theme={Theme}>
        <Grid container justifyContent="center" sx={{ marginTop: '40px' }}>
          <Grid item xs={12} md={4}>
            <Card sx={{ border: '2px solid #2f5866', bgcolor: 'primary.light' }}>
              <CardContent>
                <Typography variant="h4" sx={{ textAlign: 'center', marginBottom: '20px' }}>
                  Welcome, {session?.user.name}!
                </Typography>
                <Avatar
                  src={session?.user?.image}
                  sx={{ width: '50%', height: '50%', bgcolor: 'white', margin: 'auto', marginTop: '10px', marginBottom: '20px' }}
                />
                <Typography variant="body1" paragraph sx={{ textAlign: 'center', marginTop: '10px', marginBottom: '10px' }}>
                  Your Email:
                </Typography>
                <Typography variant="body1" paragraph sx={{ textAlign: 'center', marginTop: '5px', marginBottom: '20px' }}>
                  {session?.user?.email}
                </Typography>
                <Button
                  component={Link}
                  href="/books"
                  variant="outlined"
                  fullWidth
                  sx={{ mb: 2, color:'primary.dark', borderColor:'primary.dark', 
                  '&:hover': {
                    bgcolor: 'primary.dark',
                    color:'secondary.contrastText',
                  },}}
                >
                  See Book Catalog
                </Button>
                <Button fullWidth target="_blank" variant="outlined" 
                sx={{  color:'primary.dark', borderColor:'primary.dark', 
                '&:hover': {
                  bgcolor: 'primary.dark',
                  color:'secondary.contrastText',
                },}}
                onClick={() => signOut()}>
                  Sign Out
                </Button>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </ThemeProvider>
    );
  }
}