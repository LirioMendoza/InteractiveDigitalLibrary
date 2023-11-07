import { createTheme } from '@mui/material';
import { lightBlue, red, } from '@mui/material/colors';

const Theme = createTheme({
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
    typography: {
        fontFamily: 'Roboto',
        h6: {
            fontSize: '1.5rem',
            fontWeight: 600
        },
        body1: {
            fontSize: '1rem'
        }
    },
    customStyles: {
        paper: {
            padding: 2,
            border: '1px solid #0198AA',
            height: '100%', focus: "none"
        }, 
        focus: {
            outline: "none"
        }
    },
});

export default Theme;