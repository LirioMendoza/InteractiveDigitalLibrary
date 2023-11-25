"use client";
import React from 'react';
import Navbar from '@/components/navbar/navbar'
import { NextAuthProvider } from '../app/Providers'
import { CssBaseline } from '@mui/material'


function MyApp({ Component, pageProps }) {
  return (
    <NextAuthProvider>
        <CssBaseline />
        <Navbar />
        <Component {...pageProps} />
    </NextAuthProvider>
  );
}

export default MyApp;