"use client";
import React from 'react';
import { Container } from "@mui/material";
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from '@/components/navbar/Navbar';
import Carousel from "../components/navbar/Carousel";
import BasicAppGrid from '@/components/navbar/basic-app-grid';
import Home from "./home/page";
import PdfRead from './reading/pdf-viewer';

import HomeLogin from './login/page';

const LOG_LEVELS = {
  INFO: 'INFO',
  SUCCESS: 'SUCCESS',
  ERROR: 'ERROR',
  WARNING: 'WARNING',
  DEBUG: 'DEBUG',
};

function log(level, message) {
  const timestamp = new Date().toLocaleString();
  console.log(`[${timestamp}] [${level}] - ${message}`);
}


const navArrayLinks = [
  {
    title: 'Home',
    path: '/'
  },
  // {
  //   title: 'Catalog',
  //   path: '/catalog'
  // }, 
  {
    title: 'Login',
    path: '/login'
  }
  
];

export default function App() {
  
  //Se observa el mensaje en consola
  log(LOG_LEVELS.INFO, 'Application started');
  return (
    <>
      <Router>
        <Navbar navArrayLinks={navArrayLinks}/>
        <Container sx={{ mt: 5}}>
          <Routes>
            <Route path="/" element={<Home />} />
            {/* <Route path="/catalog" element={<BasicAppGrid />} /> */}
            <Route path={'/pdf-viewer/:param1/:param2'} element={<PdfRead />} />
            <Route path="/login" element={<HomeLogin />} />
          </Routes>
          <RouteRenderer />
        </Container>
      </Router>

      </>
    

  );
}
       
  
function RouteRenderer() {
  const location = useLocation();
  //Verificamos si la ruta actual es la ruta de inicio
  if (location.pathname === '/') {
    return <Carousel />;
  } else {
    return null; 
  }
}