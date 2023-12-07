'use client';
import React from 'react';
import { signIn } from 'next-auth/react';
import Theme from '@/styles/theme';
import { Avatar, Box, Button, Checkbox, Container, FormControlLabel, Grid, Link, TextField, Typography,  ThemeProvider} from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';

/*
Description: Encapsulates main login section 
*/

export default function SignInBtn() {
  return (
    <ThemeProvider theme={Theme}>
        <Container component='main' maxWidth='xs'>
            <Box
                sx={{
                    marginTop: 8,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center'
                }}
            >
                <Avatar sx={{ m: 1, bgcolor: 'primary.dark' }}>
                    <LockOutlinedIcon />
                </Avatar>

                <Typography component='h1' variant='h3'>
                    Sign in
                </Typography>

                <Box component='form' noValidate sx={{ mt: 1}}>
                    {/* Field for Email */}
                    <TextField margin='normal'
                        required
                        fullWidth
                        id='email'
                        label='Email Address'
                        name='email'
                        autoComplete='email'
                        autoFocus/>

                     {/* Field for password */}
                    <TextField margin='normal'
                        required
                        fullWidth
                        id='password'
                        label='Password'
                        name='password'
                        type='password'
                        autoComplete='current-password'/>

                    {/* CheckBox for remeber me*/}
                    <FormControlLabel  
                        control= {
                            <Checkbox value='remember' sx={{ color: 'primary.dark' }} />}
                        label='Remember me'
                        sx={{ color: 'primary.dark' }}
                    />

                    {/* Sign in Button*/}       
                    <Button 
                        type='submmit'
                        fullWidth
                        variant='contained'
                        sx={{ 
                          borderRadius: '24px',
                          padding: '8px 16px',
                          m: '10px', 
                          boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.2)',
                          '&:hover': {
                            bgcolor: 'primary.dark',
                            color:'secondary.contrastText',
                          },
                        }}
                    >
                        Sign In
                    </Button>

                    {/* Link for Forgot Password*/}   
                    <Grid container>
                        <Grid item xs>
                            <Link href='#' variant='body2' sx={{mt: '5px', color: 'primary.dark' }} >
                                Forgot password?
                            </Link>
                        </Grid>
                        <Grid item>
                            <Link href='#' variant='body2' sx={{ color: 'primary.dark' }}>
                                {"Don't have an account? Sign Up"}
                            </Link>
                        </Grid>
                    </Grid>

                    {/* To connect with discord*/}   
                    <Grid container>
                        <Grid item xs={12}>
                            <Box display="flex" alignItems="center" justifyContent="center">
                                <Typography variant="body1" sx={{ padding: '0 10px', m: '10px' }}>
                                    or connect with:
                                </Typography>
                            </Box>
                        </Grid>
                        <Grid item xs>

                            {/* Discord Button */}
                          <Button
                            onClick={() => signIn('discord')}
                            variant='contained'
                            fullWidth
                            sx={{
                              bgcolor: 'discord.main',
                              borderRadius: '24px',
                              padding: '8px 16px',
                              boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.2)',
                              '&:hover': {
                                backgroundColor: 'discord.main2',
                              },
                            }}
                          >
                            <Avatar alt="Remy Sharp" src="/images/discord-logo.png" sx={{ fontSize: 30, marginRight: 1 }}/>
                            <Typography variant="button" sx={{ color: 'white' }}>
                              Sign in with Discord
                            </Typography>
                          </Button>
                        </Grid>
                    </Grid>
                </Box>
            </Box>
        </Container>
    </ThemeProvider>
    
  );
}