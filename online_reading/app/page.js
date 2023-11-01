'use client';

import React, { lazy, Suspense } from 'react';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import Link from 'next/link';
import { Button, Grid, Typography, Color } from '@mui/material';

const PdfRead = lazy(() => import('./pdfRead/pdf-viewer'));

const openPDFViewer = (url, title, width, height) => {
  const left = (window.screen.width - width) / 2;
  const top = (window.screen.height - height) / 2;
  window.open( 
    url,
    title,
    `toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no, copyhistory=no, width=${width}, height=${height}, top=${top}, left=${left}`
  );
};

const containerPdf = () => {
  const jsFileUrl = './pdfRead/pdf-viewer.js';
  
  return(
    <>
      <Button
          onClick={() => openPDFViewer(jsFileUrl, 'PDF Popup', 800, 600)}
          variant="contained"
          color="primary"
          startIcon={<PictureAsPdfIcon />}
        >
          <Typography variant="h6" gutterBottom >
            book
          </Typography>
        </Button> 
    </>
  );
}
const Page = () => {

  return(
    <>
      <div>
        <h1>BOOKS</h1>
        {containerPdf()}

        <PdfRead />
      </div>    
    </>
  );
};


export default Page;