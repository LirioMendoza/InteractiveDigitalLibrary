'use client';

import { AppBar, Box, Button, Drawer, Toolbar, IconButton, Typography, ThemeProvider, List, ListItem, ListItemButton, ListItemText } from '@mui/material';
import { useSession } from 'next-auth/react';
import Image from 'next/image';
import { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import Theme from '@/styles/theme';
import NavBar1 from './NavBar-List1.json';
import NavBar2 from './NavBar-List2.json';
import Link from 'next/link';

export default function Navbar({navArrayLinks}) {
    const { status } = useSession();
    const [open, setOpen] = useState(false);
    if (status === 'authenticated') {
        navArrayLinks = NavBar2;
    }else{
        navArrayLinks = NavBar1;
    }
    return (
        
        <Box sx={{ flexGrow: 1 }}>
            <ThemeProvider theme={Theme}>
            <AppBar position='static' sx={{ boxShadow: 'md' }}>
                <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap' }} >
                    <Box sx={{ display: 'flex', gap: '10px' }} >
                        <IconButton
                            color="inherit"
                            size="large"
                            onClick={() => setOpen(true)}
                            sx={{display: {xs: "flex", sm: "none"}}}
                            edge="start"
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography variant='h6' component='div' noWrap >
                            <Button component={Link} href='/'color='inherit'>
                                <Image src="/images/UNAM e-Books_Logo2.png" alt="Icono" 
                                    width={120} height={60}/>
                            </Button>
                        </Typography>
                    </Box>    
                    <Box sx={{ display: 'flex', gap: '10px' }}> 
                        {navArrayLinks.map(item =>(
                            <Typography key={item.title} variant='h6' color='inherit'  textDecoration='none'>
                                <Button component={Link} href={item.path} color='inherit'>{item.title}</Button>
                            </Typography>
                            ))
                        }
                        
                    </Box>
                </Toolbar>
            </AppBar> 
            <Drawer
                open={open}
                anchor="left"
                onClose={() => setOpen(false)}
                sx={{display: {xs: "flex", sm: "none"}}}

            >
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
            </Drawer>
            </ThemeProvider>
        </Box>
       
    );
}