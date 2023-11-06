
"use client";
import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from '@/components/navbar/Navbar';
import BasicAppGrid from '@/components/navbar/basic-app-grid';
import Comments from '@/components/comments/comments';
const Home = lazy(() => import('./home/page'));
const Login = lazy(() => import('./login/page'));
const Catalog = lazy(() => import('./catalog/page'));
const Comment =lazy(() => import('./comments/page'));

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

        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/comments" element={<Comments />} />
            <Route path="/catalog" element={<BasicAppGrid />} />
            
          </Routes>
        </Suspense>
      </Router>
      
    </>
  );
}