"use client";
import React from 'react';
import { BrowserRouter as Router, Route, Link as RouterLink, Routes } from 'react-router-dom';
import Login from '../pages/login';
import Home from '../pages/home';
import Link from 'next/link';

export default function Header(){
    return(
        <nav>
            <Link href="/home" sx={{ textDecoration: 'none' }}>Home</Link>
            <Link href="/login"sx={{ textDecoration: 'none' }}>About</Link>
            <Link href="/contact" sx={{ textDecoration: 'none' }}>Contact</Link>
            <Link href="/posts/latest" sx={{ textDecoration: 'none' }}>Latest Post</Link>
        </nav>
        
    );
}
/*<Router>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/login' element={<Login />} />
            </Routes>
        </Router>*/