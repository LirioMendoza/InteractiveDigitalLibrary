
"use client";
import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from '@/components/navbar/Navbar';

const Home = lazy(() => import('./home/page'));
const Login = lazy(() => import('./login/page'));
const Catalog = lazy(() => import('./catalog/page'));

const navArrayLinks = [
  {
    title: 'Home',
    path: '/'
  },
  {
    title: 'Login',
    path: '/login'
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

        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/catalog" element={<Catalog />} />
          </Routes>
        </Suspense>
      </Router>
    </>
  );
}