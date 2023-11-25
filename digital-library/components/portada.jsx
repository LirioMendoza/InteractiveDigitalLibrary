
import { Box, Typography, Container,  ThemeProvider  } from "@mui/material";
import theme from '@/styles/theme';


export default function Portada() {


    return(
        <ThemeProvider theme={theme}>
        <Box   sx={{
            background:'linear-gradient(5deg, #53B6A8 40%, #9657CD 80%)', 
            color:'primary.contrastText',
            mb:'2.5rem',  
            p:'2rem', 
            display:'flex', 
            flexDirection:'column', 
            fontWeight: 'bold', 
            }}>
            <Container>
                <Typography variant='h2' sx={{ fontWeight: 'bold', m:'1rem', textAlign:'center'}}>UNAM e-Books</Typography>
                <Typography variant='h4' sx={{ fontWeight: 'bold', m:'1rem', textAlign:'center'}}>Books and magazines for all university students.</Typography>
            </Container>
        </Box>
    </ThemeProvider>
    );
}