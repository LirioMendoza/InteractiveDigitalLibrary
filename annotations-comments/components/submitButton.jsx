import * as React from 'react';
import { Button, Stack, createTheme, ThemeProvider } from '@mui/material/';

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#29a493',
      dark: '#1C7266',
      contrastText: '#fff',
    },
    secondary: {
      main: '#7c2ec1',
      light:'#9657CD',
      dark: '#562087',
      contrastText: '#fff',
    },}, 
  }
  );

const SubmitButton = ({ label }) => {
  return (
    <ThemeProvider theme={theme}>
      <Stack direction="row" justifyContent="center">
        <Button type="submit" variant="contained"  
                sx={{m: '0.5rem', bgcolor:"secondary.main",  
                  '&:hover': {
                  bgcolor: 'secondary.dark',   
                  }}}  >{label}</Button>
      </Stack>
    </ThemeProvider>
  );
};

export default SubmitButton;