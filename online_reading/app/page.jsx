'use client';

import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import jsonData from '../components/Books.json' 


const ButtonPDf = lazy(() => import('./pages/buttonPdf'));
const PdfRead = lazy(() => import('./pages/pdf-viewer'));

const searchKeyIndex = (searchkey) => {
  
// Busca el índice de la clave en el array
  const keys = jsonData.map((books) => {
    return books.key;
  });
  const inde = keys.indexOf(searchkey);
  //console.log(`La clave "${searchkey}" se encuentra en el índice ${inde} en el Map.`);
  return inde;
};
const Page = () => {
  const key = "Obras selectas de Julio Verne";
  const ind = searchKeyIndex(key);
  return(
    <>
      <Router>
        <Suspense fallback={<div className='Loading'>Loading...</div>}>
          <Routes>
            <Route path="/" element={<ButtonPDf code={key} index={ind} />} />
            <Route path={"/pdf-viewer"+"/"+ind} element={<PdfRead code={key} inde={ind} />}/>
          </Routes>
        </Suspense>
      </Router>
    </>
  );
};

export default Page;