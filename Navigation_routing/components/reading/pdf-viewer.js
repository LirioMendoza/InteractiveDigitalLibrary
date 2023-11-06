'use client';
import React, { lazy, Suspense } from 'react';
//import PDFReader from './PDFViewer'      <PDFViewer />

const PDFViewer = lazy(() => import('../reading/PDFViewer'));
const Portada = lazy(() => import('../reading/Portada'));
const PdfRead = ({code, inde}) => {
  return (
    
      <div style={{ width: '100%', height: '100%', 
      backgroundImage: 'url("/images/Background_Book.jpg")', 
      backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', display: 'flex', 
      flexDirection: 'column', color: 'white' }}>
        
        <Portada />
        <PDFViewer KEY={code} INDEX={inde} /> 
      </div>
  );
};

export default PdfRead;