"use client";
import React from 'react';
import { Container } from "@mui/material";
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from '@/components/navbar/Navbar';
import Carousel from "../components/navbar/Carousel";
import Login from "./login/page";
import Home from "./home/page";
import Comments from '@/components/comments/comments';
import BasicAppGrid from '@/components/navbar/basic-app-bar';

import PdfRead from '../app/reading/pdf-viewer';


const navArrayLinks = [
  {
    title: 'Home',
    path: '/'
  },
  {
    title: 'Comment',
    path: '/comments'
  },
  {
    title: 'Catalog',
    path: '/catalog'
  }
  
];

export default function App() {
  return (
    <>
      <Router>
        <Navbar navArrayLinks={navArrayLinks} />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/comments" element={<Comments />} />
            <Route path="/catalog" element={<BasicAppGrid />} />
            <Route path={'/pdf-viewer/:param1/:param2'} element={<PdfRead />} />
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