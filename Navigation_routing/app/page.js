"use client";
import React from 'react';
import { Container } from "@mui/material";
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from '@/components/navbar/Navbar';

import Carousel from "../components/navbar/Carousel";

import Login from "./login/page";
import Home from "./home/page";
import Comments from '@/components/navbar/comments/comments';
import BasicAppGrid from '@/components/navbar/basic-app-bar';


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
        <Container sx={{ mt: 5}}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/comments" element={<Comments />} />
            <Route path="/catalog" element={<BasicAppGrid />} />
            
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