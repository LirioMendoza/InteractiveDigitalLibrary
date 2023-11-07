"use client";
import React from 'react';
import { Container,  createTheme, ThemeProvider  } from "@mui/material";
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from '@/components/navbar/Navbar';
import Carousel from "../components/navbar/Carousel";

import Home from "./home/page";
import PdfRead from './reading/pdf-viewer';

import HomeLogin from './login/page';


const theme = createTheme({
  palette: {
       mode: 'light',
          primary: {
                  main: '#29a493',
                  light: '#53B6A8',
                  dark: '#1C7266',
                  contrastText: '#fff',
          },
          secondary: {
                  main: '#7c2ec1',
                  light:'#9657CD',
                  dark: '#562087',
                  contrastText: '#fff',
          },
          discord: {
                  main: '#5865F2',
                  main2: '#EB459E',
                  contrastText: '#fff',
          } ,
          action: {
                  active: '#C5AFFF',
                  hover: '#57BFB4',
          }      },
  });


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

  {
    title: 'Login',
    path: '/login'
  }
  
];

export default function App() {
  
  //Se observa el mensaje en consola
  log(LOG_LEVELS.INFO, 'Application started');
  return (
    <ThemeProvider theme={theme}> 
      <Router>
        <Navbar navArrayLinks={navArrayLinks}/>
        <Container sx={{ mt: 5}}>
          <Routes>
            <Route path="/" element={<Home />} />

            <Route path={'/pdf-viewer/:param1/:param2'} element={<PdfRead />} />
            <Route path="/login" element={<HomeLogin />} />
          </Routes>
          <RouteRenderer />
        </Container>
      </Router>

      </ThemeProvider>
    

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