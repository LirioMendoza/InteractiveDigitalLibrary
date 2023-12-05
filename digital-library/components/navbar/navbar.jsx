'use client';

import { AppBar, Box, Button, Drawer, Toolbar, IconButton, Typography, Menu, ThemeProvider, List, ListItem, ListItemButton, ListItemText } from '@mui/material';
import { useSession } from 'next-auth/react';
import Image from 'next/image';
import { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import Theme from '@/styles/theme';
import NavBar1 from './NavBar-List1.json';
import NavBar2 from './NavBar-List2.json';
import Link from 'next/link';

/*
Description: Component for the navigation on the page, 
responsive and validates there's a session and user has 
authenticated to acces to different pages when log in
*/ 
export default function Navbar({navArrayLinks}) {
    const { status } = useSession();
    const [open, setOpen] = useState(false);


    if (status === 'authenticated') { //when authenticated
        navArrayLinks = NavBar2; //HOME and LOGIN
    }else{
        navArrayLinks = NavBar1; //HOME CATALOG and PROFILE
    }
    return ( 
        <ThemeProvider theme={Theme}>
            {/* Navbar for the application    */}
            <AppBar position='static' sx={{ boxShadow: 'md' }}>
                <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap' }} >

                    {/*For the Menu */}
                    <Box sx={{ display: { xs: 'flex', sm: 'none' } }}>
                        <IconButton
                            color="inherit"
                            size="large"
                            onClick={() => setOpen(true)}
                            edge="start"
                        >
                            <MenuIcon />
                        </IconButton>
                    </Box>

                    {/* Drawer, allowing responsive navbar */}
                    <Drawer
                        open={open}
                        anchor="left"
                        onClose={() => setOpen(false)}
                        sx={{ display: { xs: 'flex', sm: 'none' } }}
                        >
                        <AppBar>
                            <List>
                            {navArrayLinks.map(item => (
                                <ListItem
                                disablePadding
                                key={item.title}
                                >
                                <ListItemButton
                                    component={Link}
                                    href={item.path}
                                    onClick={() => setOpen(false)}
                                >
                                    <ListItemText>{item.title}</ListItemText>
                                </ListItemButton>
                                </ListItem>
                            ))}
                            </List>
                        </AppBar>
                    </Drawer>

                    {/* Button for every page with their respective link */}
                    <Box sx={{ display: { xs: 'none', sm: 'flex' }, gap: '10px' }}>
                    {navArrayLinks.map(item => (
                        <Typography key={item.title} variant='h6' color='inherit' textDecoration='none'>
                        <Button component={Link} href={item.path} color='inherit'>{item.title}</Button>
                        </Typography>
                    ))}
                    </Box>

                </Toolbar>
            </AppBar>
        </ThemeProvider>
    );
}