"use client";
import React from 'react';
import Carousel from 'react-material-ui-carousel'
import { Paper, Box, Typography } from '@mui/material';
import Image from 'next/image';
import slider from "./slider.json";
import { Grid } from '@mui/material';
import { useSession } from 'next-auth/react';
import Link from 'next/link';

/*
Description: Shows and image carousel so users can see 
some of the books available at the library, as well
to access to the catalog when the click on to one of them 
*/

export default function CarouselBooks() {

    let carouselPath = '/login';
    const { status, data: session } = useSession();

    if (status === 'authenticated' && session) {
        carouselPath = '/books';

    }
    return (
        <Grid container rowSpacing={1} columnSpacing={ 1 } item xs={12} justifyContent='center' alignContent='center' >
            <Carousel sx={{ width: 400, height: 500, m: '1rem' }}>
                {slider.map(item => (
                    <Paper key={item.id} component={Link} href={carouselPath} style={{ width: 400, height: 450, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <Image src={item.image} alt={item.title} width={300} height={450} priority={true} loading="eager" />
                    </Paper>
                ))}
            </Carousel>
        </Grid>
    )
}



