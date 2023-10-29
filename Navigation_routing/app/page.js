"use client";
import Navbar from "@/components/navbar/Navbar";
import { Container } from "@mui/material";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import React from 'react';
import Login from "./login/page";
import Catalog from "./catalog/page";
import Home from "./home/page";

const navArrayLinks = [
  {
      title: "Home", path: "/"
  },
  {
      title: "Login", path: "/login"
  },
  {
      title: "Catalog", path: "/catalog"
  }
]

export default function App(){
  return (
    <>
    <Router>
    <Navbar navArrayLinks={navArrayLinks}/>
    
    <Container sx={{ mt: 5}}>
   
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/catalog" element={<Catalog />} />
      </Routes>
      
    </Container>
    </Router>
    </>
  );
}