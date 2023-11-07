'use client';

import { Box,Button, Typography, createTheme, ThemeProvider } from '@mui/material';
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
                discord: {
                        main: '#5865F2',
                        main2: '#EB459E',
                        contrastText: '#fff',
                } ,
                action: {
                        active: '#C5AFFF',
                        hover: '#57BFB4',
                }      },
        });
          
export default function Signin() {

    return (
    <ThemeProvider theme={theme}>

        <Box sx={{  display: 'flex',
                    flexDirection:'column',
                    textAlign: 'center',
                    boxShadow: 10, 
                    my: '2rem',
                    mx:'0.5rem',
                    p: '2rem',
                    borderBottom: 4, 
                    borderBottomColor: 'primary.dark',
                    borderRadius: 5,
                }} > 
            <Typography sx={{textTransform: 'uppercase', 
                            fontWeight: 'bold',
                            fontSize: 'h6.fontSize', mb: '0.8rem',  
            }} >Inicia Sesión 
            </Typography>

            <Button onClick={() => signIn('discord')}
                        variant='contained'
                        sx={{   borderRadius: '12px',
                                p: '1rem', 
                                bgcolor: 'discord.main',

                                '&:hover': {
                                borderBottom: '4px inset',
                                borderLeft: '2px inset',
                                bgcolor: 'discord.main',   
                                borderColor: 'action.hover'   , 
                                },
                                
                                '&:active': { 
                                borderBottom    : '4px inset', 
                                borderLeft  : '2px inset', 
                                bgcolor: 'discord.main2',
                                borderColor: 'action.active'   , 
                                },
                        }}>

                        <Box  sx={{ fontSize: 30, mr: '0.8rem'}} />
                                        
                
                        <Typography variant="button" sx={{  m:1, }}>
                                Inicia sesión con Discord
                        </Typography>
                </Button>
        
        </Box>
//     </ThemeProvider>
    );
}

