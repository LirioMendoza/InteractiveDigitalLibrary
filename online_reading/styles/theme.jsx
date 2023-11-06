import { createTheme } from '@mui/material';
import { lightBlue, red, } from '@mui/material/colors';

const Theme = createTheme({
    palette: {
        primary: {
            main: lightBlue[300]
        },
        secondary:{
            main : red[500]
        }, 
    },
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