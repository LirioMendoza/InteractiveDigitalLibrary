'use client';

import { useSession, signOut  } from 'next-auth/react';
import { Avatar, Grid, Card, CardContent, Typography, Button } from '@mui/material';
import Link from 'next/link';


export default function UserInfo() {
    const { status, data: session } = useSession();

    if (status === 'authenticated' && session) {
        return (
            <Grid container justifyContent="center">
                <Grid item xs={12} md={4}>
                    <Card >
                    <CardContent >
                        <Typography variant="h4"sx={{textAlign: 'center'}}>{session?.user.name}</Typography>
                        <Avatar src={session?.user?.image} sx={{ width: '75%', height: '75%',bgcolor: 'white', margin: 'auto'}} />
                        <Typography variant="body1" paragraph sx={{textAlign: 'center'}}>
                            {session?.user?.email}
                        </Typography>
                        <Button
                        component={Link}
                        href='/books'
                        variant="outlined"
                        fullWidth
                        sx={{ my: 2 }}
                        >
                        See Book Catalog
                        </Button>
                        <Button  fullWidth target="_blank" 
                        variant="outlined" 
                        onClick={() => signOut()} >
                            Sign Out
                        </Button>
                    </CardContent>
                    </Card>
                </Grid>
            </Grid>
        );
    } 
}