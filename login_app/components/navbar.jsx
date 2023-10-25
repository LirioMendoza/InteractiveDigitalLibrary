'use client';

import { AppBar, Slide, Grid, Box, IconButton, Button, Toolbar, Typography, Container } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu'
import SearchIcon from '@mui/icons-material/Search';
import { useSession, signIn, signOut } from 'next-auth/react';


export default function Navbar() {
    const { status } = useSession();
    return (
        <Grid>
            <AppBar position='static' >
                <Toolbar sx={{  display: 'flex',
                                justifyContent: 'center',
                            }}>
                    
                    <IconButton size="small"
                                color="inherit"
                                aria-label="menu"
                                sx={{ mr: 1 }}>
                        <MenuIcon />
                    </IconButton>

                    <Typography variant='h6' 
                                component='div' 
                                sx={{   display: 'flex', 
                                        flexGrow: 1, 
                                        justifyContent:'center',
                                    }}>
                                Inicio
                    </Typography>

                    <IconButton color='inherit'
                                aria-label='search'
                                sx={{ }}>
                        <SearchIcon/>
                    </IconButton>

                    {status === 'authenticated' ? (
                        <Button onClick={() => signOut()} color='inherit'>Cerrar Sesión</Button>
                    ) : null }

                </Toolbar>
            </AppBar>
        </Grid>
    );
}