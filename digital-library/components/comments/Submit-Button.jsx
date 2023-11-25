import * as React from 'react';
import { Button, Stack, createTheme, ThemeProvider } from '@mui/material/';
import Theme from '@/styles/theme';

const SubmitButton = ({ label }) => {
  return (
    <ThemeProvider theme={Theme}>
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