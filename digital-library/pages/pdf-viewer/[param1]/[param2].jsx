'use client';
import React, { useReducer } from 'react';
import { useRouter } from 'next/router';
import PDFViewer from '@/components/read/pdf-viewer';
import Portada from '@/components/portada';

const LOG_LEVELS = {
  INFO: 'INFO',
  SUCCESS: 'SUCCESS',
  ERROR: 'ERROR',
  WARNING: 'WARNING',
  DEBUG: 'DEBUG',
};

const PdfRead = () => {
  const router = useRouter();//returns the parameters passed through the route
  const { param1, param2 } = router.query || {};
  try {
    console.log({ level: LOG_LEVELS.SUCCESS, message: `The key "${param1}" is located at the index ${param2} in the Map.`});
  } catch (error) {
    console.error({ level: LOG_LEVELS.ERROR, message: 'An Error has occurred: Parameters not found', error });
  }
  
  return (
    
      <div style={{ width: '100%', height: '100%', 
      backgroundImage: 'url("/images/Background_Book.jpg")', 
      backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', display: 'flex', 
      flexDirection: 'column', color: 'white' }}>
        
        <Portada />
        <PDFViewer KEY={param1} INDEX={param2} /> 
      </div>
  );
};

export default PdfRead;