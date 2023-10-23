'use client';

import { Button, Typography } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { signIn } from 'next-auth/react';

export default function SignInBtn() {
  return (
    <Button     onClick={() => signIn('google')}
                variant='contained'
                color='primary'
                sx={{   borderRadius: '12px',
                        p: '1rem', 
                        '&:hover': {
                            backgroundColor: 'primary.light',
                        },
                }}>
        <LinkedInIcon sx={{ fontSize: 30, mr: '0.8rem'}} />
            <Typography variant="button" sx={{ color: 'white' }}>
                Sign in with LinkedIn
            </Typography>
    </Button>
  );
}