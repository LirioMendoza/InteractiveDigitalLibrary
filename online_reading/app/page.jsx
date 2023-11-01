'use client';

import React from 'react';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import { red } from '@mui/material/colors';
import Typography from '@mui/material/Typography';
import Link from 'next/link';
import Button from '@mui/material/Button';
import PDFViewer from '@/components/PDFViewer';

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
  return(
    <>
      <Button
          onClick={() => openPDFViewer("/pdf-viewer", 'PDF Popup', 800, 600)}
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
      </div>
    
    </>
    
    
  );
};


export default Page;
