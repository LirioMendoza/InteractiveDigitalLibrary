"use client";
import Navbar from "@/components/navbar/Navbar";
import { Container } from "@mui/material";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Login from "./login/page";
import Catalog from "./catalog/page";
import Home from "./home/page";

export default function App(){
  return (
    <>
    <Navbar />
    <Container sx={{ mt: 5}}>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      </Router>
    </Container>
    </>
  );
}