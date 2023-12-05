'use client';
import React, { useState, useEffect } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import { Button, Grid, Typography, ThemeProvider} from '@mui/material';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import Theme from '@/styles/theme';
import ZoomInIcon from '@mui/icons-material/ZoomIn';
import ZoomOutIcon from '@mui/icons-material/ZoomOut';
import jsonData from './Books.json';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';

const LOG_LEVELS = {
  INFO: 'INFO',
  SUCCESS: 'SUCCESS',
  ERROR: 'ERROR',
  WARNING: 'WARNING',
  DEBUG: 'DEBUG',
};

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

/* 
Description: Encapsulates main section to show the pdf file 
*/ 

function PDFViewer({KEY, INDEX}) {
  const { status, data: session } = useSession();
  const router = useRouter();
  let width, height;
  useEffect(() => {
    if (!(status === 'authenticated' && session)) {
      router.push('/login');
    }
  }, [status, session, router]);

  if (status === 'authenticated' && session) {
    try {
      const rutes = jsonData.map((books) => {
          return books.value;
      });
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
        width: typeof window !== 'undefined' ? window.innerWidth : 0,
        height: typeof window !== 'undefined' ? window.innerHeight : 0,
      });
      useEffect(() => {
        if (typeof window !== 'undefined') {
          const handleResize = () => {
            setWindowSize({
              width: window.innerWidth,
              height: window.innerHeight,
            });
          };

          // Add an event to change size for component. 
          window.addEventListener('resize', handleResize);

          // Deletes evento for size change  
          return () => {
            window.removeEventListener('resize', handleResize);
          };
        }
      }, []);
      if (typeof window !== 'undefined') {
        if(window.innerWidth >= 900 && window.innerHeight >= 500){
          width = (window.innerWidth - 300)/2;
          height = (window.innerHeight - 100)/2;
        }else{
          width = (window.innerWidth)/2;
          height = (window.innerHeight)/2;
        }
        
      }
      console.log({ level: LOG_LEVELS.INFO, message: `The width of the window is: "${windowSize.width}" and the height is: ${windowSize.height}`});
      /*The PDF viewer returns, with buttons to change the page and zoom into the document*/
      console.log({ level: LOG_LEVELS.SUCCESS, message: `The key "${KEY}" is located in the ${rutes[INDEX]} path of the Map.`});
      return (
        <ThemeProvider theme={Theme}>
          <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 0, md: 0 }} >
          <Grid item xs={12} alignContent='center' >
            <Typography gutterBottom variant="h4" component="div">
              {KEY}
            </Typography>
          </Grid>
          <Grid item xs={12} md={12} sx={{justifyContent:"center",  alignItems:"center", textAlign:'center'}} >
            
            {/* Button to zoom out */}
            <Button
              variant="contained"
              onClick={handleZoomOut}
              disabled={scale <= 0.75}
            >
              <ZoomOutIcon />
            </Button>

            {/* Button to zoom in */}
            <Button
              variant="contained"
              onClick={handleZoomIn}
              disabled={scale >= 1.5}
            >
              <ZoomInIcon />
            </Button>
            
          </Grid>
          <Grid item  xs={12} sx={{justifyContent:"center", alignItems:"center"}} >
            <Document
              file={ruta}
              onLoadSuccess={onDocumentLoadSuccess} 
            >
              {((pageNumber == 1)||(window.innerWidth < 900 ))? (
                <Grid container columnSpacing={{ xs: 0, sm: 0, md: 0 }} sx={{justifyContent:"center", alignItems:"center"}}>
                  <Grid item xs={0.3} sm={1.3} md={2.3}/>
                  <Grid item xs="auto">
                    <Page pageNumber={pageNumber} renderTextLayer={false}  renderAnnotationLayer={false} height={height} width={width} scale={scale}/>
                  </Grid>
                  <Grid item xs={0.3} sm={1.3} md={2.3} />
                </Grid>
              ) : ( 
                <Grid container columnSpacing={{ xs: 1, sm: 0, md: 0 }} sx={{justifyContent:"center", alignItems:"center", width:"100n"}}>
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

          <Grid item xs={12} sx={{alignContent:'center' }}>
            {((pageNumber == 1)||(window.innerWidth < 900 ))? (
              <Typography sx={{textAlign:'center'}}>
                Page {pageNumber} of {numPages} 
              </Typography>
            ) : (
              <Typography sx={{textAlign:'center'}}>
                Page {pageNumber}-{pageNumber + 1} of {numPages} 
              </Typography>
            )} 
          </Grid>

          <Grid item xs={12} md={12} sx={{justifyContent:"center",  alignItems:"center", textAlign:'center'}}>
            
            {/* Button for the previous page */}
            <Button
              variant="contained"
              onClick={((pageNumber == 2)||(window.innerWidth < 900 ))? (
                () => setPageNumber(pageNumber - 1)
                ) : (
                  () => setPageNumber(pageNumber - 2)
                )}
              disabled={pageNumber <= 1}
              sx={{justifyContent:"center",  alignItems:"center", textAlign:'center'}}
            >
              <KeyboardArrowLeftIcon />Previous Page
            </Button>

            {/* Button for the next page */}
            <Button
              variant="contained"
              onClick={((pageNumber == 1)||(window.innerWidth < 900 ))? (
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
    

      
    } catch (error) {
      console.error({ level: LOG_LEVELS.ERROR, message: 'An Error has occurred: Book not found.', error });
    }
  }

  return (
    <Box type='div'> Loading... </Box> // Puedes mostrar un mensaje de carga mientras se verifica la sesión
  );
}


export default PDFViewer;