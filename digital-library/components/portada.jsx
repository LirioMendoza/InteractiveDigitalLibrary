
import { Box, Typography, Container,  ThemeProvider  } from "@mui/material";
import theme from '@/styles/theme';

/*
Description: Creates a banner that shows the page name
*/

export default function Portada() {
    return( //Banner section
        <ThemeProvider theme={theme}>
            <Box  sx={{
                background:'linear-gradient(5deg, #d5bbeb 20%, #ab78d7 80%)', 
                color:'secondary.dark',
                mb:'2.5rem',  
                p:'2rem', 
                width: '100%',
                display:'flex', 
                flexDirection:'column', 
                fontWeight: 'bold', 
                }}>
                <Container>
                    <Typography variant='h3' sx={{ fontWeight: 'bold', m:'1rem', textAlign:'center'}}>UNAM e-Books</Typography>
                    <Typography variant='h5' sx={{ fontWeight: 'bold', m:'1rem', textAlign:'center'}}>Books and magazines for all university students.</Typography>
                </Container>
            </Box>
    </ThemeProvider>
    );
}