import React, { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import { Button, Grid, Typography } from '@mui/material';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function PDFViewer() {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Typography variant="h5">PDF Viewer</Typography>
      </Grid>
      <Grid item xs={12}>
        <Document
          file="/ruta-al-tu-archivo.pdf"
          onLoadSuccess={onDocumentLoadSuccess}
        >
          <Page pageNumber={pageNumber} />
        </Document>
      </Grid>
      <Grid item xs={12}>
        <Typography>
          Page {pageNumber} of {numPages}
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Button
          variant="contained"
          onClick={() => setPageNumber(pageNumber - 1)}
          disabled={pageNumber <= 1}
        >
          Previous Page
        </Button>
        <Button
          variant="contained"
          onClick={() => setPageNumber(pageNumber + 1)}
          disabled={pageNumber >= numPages}
        >
          Next Page
        </Button>
      </Grid>
    </Grid>
  );
}

export default PDFViewer;