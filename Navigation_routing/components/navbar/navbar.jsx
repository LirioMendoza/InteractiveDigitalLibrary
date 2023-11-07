'use client';

import { AppBar, Grid, IconButton, Button, Toolbar, Typography, createTheme, ThemeProvider } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu'
import SearchIcon from '@mui/icons-material/Search';
import { useSession, signIn, signOut } from 'next-auth/react';


const theme = createTheme({
    palette: {
         mode: 'light',
            primary: {
                    main: '#29a493',
                    light: '#53B6A8',
                    dark: '#1C7266',
                    contrastText: '#fff',
            },
            secondary: {
                    main: '#7c2ec1',
                    light:'#9657CD',
                    dark: '#562087',
                    contrastText: '#fff',
            },
            action: {
                    active: '#C5AFFF',
                    hover: '#57BFB4',
            }      },
    });


export default function Navbar() {
    const { status } = useSession();
    return (
        <ThemeProvider theme={theme}>
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
        </ThemeProvider>
    );
}