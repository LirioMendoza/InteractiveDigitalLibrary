'use client';
import React, { useState, useEffect } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import { Button, Grid, Typography, ThemeProvider} from '@mui/material';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import Theme from '@/styles/theme';
import ZoomInIcon from '@mui/icons-material/ZoomIn';
import ZoomOutIcon from '@mui/icons-material/ZoomOut';
import jsonData from './Books.json'

const LOG_LEVELS = {
  INFO: 'INFO',
  SUCCESS: 'SUCCESS',
  ERROR: 'ERROR',
  WARNING: 'WARNING',
  DEBUG: 'DEBUG',
};

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function PDFViewer({KEY, INDEX}) {
  const rutes = jsonData.map((books) => {
      return books.value;
  });
  try {
    const ruteExists = Boolean(rutes[INDEX]);
    console.log({ level: LOG_LEVELS.SUCCESS, message: `The key "${KEY}" is located at the index ${INDEX} in the Map.`});
  } catch (error) {
    console.error({ level: LOG_LEVELS.ERROR, message: 'An Error has occurred: Book path not found.', error });
  }
  
  const ruta = rutes[INDEX];
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [scale, setScale] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  };

  function handleZoomIn() {
    setScale(scale + 0.05);
  }

  function handleZoomOut() {
    setScale(scale - 0.05);
  }
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    // Agregar un evento de cambio de tamaño al montar el componente
    window.addEventListener('resize', handleResize);

    // Eliminar el evento de cambio de tamaño al desmontar el componente
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const width = (window.screen.width - 700)/2;
  const height = (window.screen.height - 500)/2;
  return (
    <ThemeProvider theme={Theme}>
    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 0, md: 0 }} >
      <Grid item xs={12} alignContent='center' >
        <Typography gutterBottom variant="h4" component="div">
          {KEY}
        </Typography>
      </Grid>
      <Grid item xs={12} md={12} alignContent='center' textAlign= 'center' >
        <Button
          variant="contained"
          onClick={handleZoomIn}
          disabled={scale >= 1.5}
        >
          <ZoomInIcon />
        </Button>
        <Button
          variant="contained"
          onClick={handleZoomOut}
          disabled={scale <= 0.75}
        >
          <ZoomOutIcon />
        </Button>
      </Grid>
      <Grid item  xs={12} justifyContent="center" alignItems="center" >
        <Document
          file={ruta}
          onLoadSuccess={onDocumentLoadSuccess} 
        >
          {((pageNumber == 1)||(windowSize.width < (2*width)))? (
            <Grid container columnSpacing={{ xs: 0, sm: 0, md: 0 }} justifyContent="center" alignItems="center">
              <Grid item xs={0.3} sm={1.3} md={2.3}/>
              <Grid item xs="auto">
                <Page pageNumber={pageNumber} renderTextLayer={false}  renderAnnotationLayer={false} height={height} width={width} scale={scale}/>
              </Grid>
              <Grid item xs={0.3} sm={1.3} md={2.3} />
            </Grid>
          ) : ( 
            <Grid container columnSpacing={{ xs: 1, sm: 0, md: 0 }} justifyContent="center" alignItems="center" width="100n">
              <Grid item md={1} lg={1.5} xl={2}/>
              <Grid item xs="auto">
                <Page pageNumber={pageNumber} renderTextLayer={false}  renderAnnotationLayer={false} height={height} width={width} scale={scale}/>
              </Grid>
              <Grid item xs="auto">
                <Page pageNumber={pageNumber+1} renderTextLayer={false} renderAnnotationLayer={false} height={height} width={width} scale={scale}/>
              </Grid>
              <Grid item md={1} lg={1.5} xl={2} />
            </Grid>
          )}
        </Document>
      </Grid>

      <Grid item xs={12} alignContent='center' textAlign= 'center'>
        {((pageNumber == 1)||(windowSize.width <= 2*width))? (
          <Typography>
            Page {pageNumber} of {numPages} 
          </Typography>
        ) : (
          <Typography>
            Page {pageNumber}-{pageNumber + 1} of {numPages} 
          </Typography>
        )} 
      </Grid>

      <Grid item xs={12} md={12} alignContent='center' textAlign= 'center' >
        <Button
          variant="contained"
          onClick={((pageNumber == 2)||(windowSize.width <= 2*width))? (
            () => setPageNumber(pageNumber - 1)
            ) : (
              () => setPageNumber(pageNumber - 2)
            )}
          disabled={pageNumber <= 1}
        >
          <KeyboardArrowLeftIcon />Previous Page
        </Button>
        <Button
          variant="contained"
          onClick={((pageNumber == 1)||(windowSize.width <= 2*width))? (
            () => setPageNumber(pageNumber + 1)
            ) : (
              () => setPageNumber(pageNumber + 2)
            )}
          disabled={pageNumber >= numPages}
        >
          <KeyboardArrowRightIcon/>Next Page
        </Button>
      </Grid>
      <Grid item xs={12} />
    </Grid>
    </ThemeProvider>
  );
}

export default PDFViewer;