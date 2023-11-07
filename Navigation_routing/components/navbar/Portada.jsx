
import { Box, Typography, Container,  createTheme, ThemeProvider  } from "@mui/material";


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
                <Typography variant='h2' sx={{ textAlign: 'center', fontWeight: 'bold', m:'1rem', }}>UNAM e-Books</Typography>
                <Typography variant='h4' sx={{ textAlign: 'center', fontWeight: 'bold', m:'1rem', }}>Books and magazines for all university students.</Typography>
            </Container>
        </Box>
    </ThemeProvider>
    );
}