"use client";
import React, { useState } from 'react';
import Navbar from '@/components/navbar/navbar'
import { NextAuthProvider } from '../app/Providers'
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material'
import Home from './home';


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