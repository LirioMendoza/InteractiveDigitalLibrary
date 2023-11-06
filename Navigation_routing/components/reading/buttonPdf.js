'use client';
import React, { lazy, Suspense } from 'react';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import Link from 'next/link';
import { Button, Grid, Typography, Color, ThemeProvider } from '@mui/material';
import theme from '@/styles/theme';
import {NavLink} from 'react-router-dom'
//import PdfRead from './pdf-viewer';


const openPDFViewer = (url, title, width, height) => {
  const left = (window.screen.width - width) / 2;
  const top = (window.screen.height - height) / 2;
  window.open(
    url,
    title,
    `toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no, copyhistory=no, width=${width}, height=${height}, top=${top}, left=${left}`
  );
};
//
const containerPdf = (key, ind) => {
  const jsFileUrl = '/pdf-viewer'+"/"+ind;
  return(
    <>
      <NavLink hrefLang='./pdf-viewer.js'  to={jsFileUrl}>
        <Button
          variant="contained"
          color='secondary'
          startIcon={<PictureAsPdfIcon />}
          data-testid = 'pdf-icon'
        >
          <Typography variant="h9" gutterBottom >
            {key}
          </Typography>
        </Button> 
      </NavLink>
    </>
  );
}
const ButtonPDf = ({code, index}) => {
  //console.log(`Al boton le pasaste La clave "${code}" se encuentra en el índice ${index} en el Map.`);
  return(
    <>
      <ThemeProvider theme={theme}>
          <div>
            {containerPdf(code, index)}
          </div>
      </ThemeProvider>
    </>
  );
};

export default ButtonPDf;