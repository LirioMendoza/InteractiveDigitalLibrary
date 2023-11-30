"use client";
import React from 'react';
import { Link, AppBar } from 'next/link';

export default function Header(){

    return(
        <AppBar>
            <Link href="/home" sx={{ textDecoration: 'none' }}>Home</Link>
            <Link href="/login"sx={{ textDecoration: 'none' }}>About</Link>
            <Link href="/contact" sx={{ textDecoration: 'none' }}>Contact</Link>
            <Link href="/posts/latest" sx={{ textDecoration: 'none' }}>Latest Post</Link>
        </AppBar>  
    );
}