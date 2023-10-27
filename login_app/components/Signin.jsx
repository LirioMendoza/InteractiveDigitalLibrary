'use client';

import { Box, Typography, createTheme, ThemeProvider} from '@mui/material';
import SignInBtn from './SignInBtn';

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
        }, },
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

            <SignInBtn></SignInBtn>
        
        </Box>
    </ThemeProvider>
    );
}

