"use client";
import { createTheme } from '@mui/material';

const Theme = createTheme({
    palette: {
        mode: 'light',
           primary: {
                   main: '#76ddff',
                   light: '#c8f1ff',
                   dark: '#2f5866',
                   contrastText: '#172c33',
           },
           secondary: {
                   main: '#bc8fd4',
                   light:'#9657CD',
                   dark: '#270a33',
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