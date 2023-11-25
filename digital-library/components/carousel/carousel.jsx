"use client";
import React from 'react';
import Carousel from 'react-material-ui-carousel'
import { Paper } from '@mui/material';
import Image from 'next/image';
import slider from "./slider.json";
import { Grid } from '@mui/material';
import { useSession } from 'next-auth/react';
import Link from 'next/link';

export default function CarouselBooks() {
    let carouselPath;
    const { status, data: session } = useSession();
    if (status === 'authenticated' && session) {
        carouselPath = '/books';
    }else{
        carouselPath = '/login';
    }
    return (
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 0, md: 0 }} >
            <Grid item xs={12} alignContent='center' component={Link} href={carouselPath}>
                <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                    <Carousel sx={{width: 400, height: 550}} >
                        {slider.map(item => (
                            <Paper key={item.id} style={{ width: 400, height: 500, display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                                <Image  src={item.image} alt={item.title} width={300} height={450} priority="true" loading="eager"/>
                                <h2>{item.title}</h2>
                            </Paper>))
                        }

                    </Carousel>
                </div>
            </Grid>

        </Grid>


        

    )
}



