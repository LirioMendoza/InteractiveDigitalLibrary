'use client';

import { Box,Button, Typography, ThemeProvider} from '@mui/material';
import { useSession, signIn, signOut } from 'next-auth/react';

// import { theme } from '../../../styles/theme'
          
export default function Signin() {

    return (
//     <ThemeProvider theme={theme}>

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
                                        
                        {/* <Image  variant='contained' 
                        alt="logo_Discord"  
                        width= '60' height='60'
                        src={"/login_app/images/clyde.png"} 
                        
                        /> */}
                
                        <Typography variant="button" sx={{  m:1, }}>
                                Inicia sesión con Discord
                        </Typography>
                </Button>
        
        </Box>
//     </ThemeProvider>
    );
}

