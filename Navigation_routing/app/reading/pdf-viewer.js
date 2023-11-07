'use client';
import React, { lazy, Suspense } from 'react';
import { useParams } from 'react-router-dom';

const PDFViewer = lazy(() => import('./PDFViewer'));
const Portada = lazy(() => import('./Portada'));


const PdfRead = () => {
  const { param1, param2 } = useParams();
  console.log(`La clave "${param1}" se encuentra en el índice ${param2} en el Map.`);
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