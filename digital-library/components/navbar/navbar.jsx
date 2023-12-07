'use client';

import { AppBar, Box, Button, Drawer, Toolbar, IconButton, Typography, ThemeProvider, List, ListItem, ListItemButton, ListItemText, Avatar } from '@mui/material';
import { useSession } from 'next-auth/react';
import { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import Theme from '@/styles/theme';
import NavBar1 from './NavBar-List1.json';
import NavBar2 from './NavBar-List2.json';
import Link from 'next/link';

/*
Description: Component for the navigation on the page, 
responsive and validates there's a session and user has 
authenticated to access different pages when logged in
*/ 

export default function Navbar({ navArrayLinks }) {
    const { status, data: session } = useSession();
    const [open, setOpen] = useState(false);
  
    if (status === 'authenticated') { //when authenticated
      navArrayLinks = NavBar2; //HOME and LOGIN
    } else {
      navArrayLinks = NavBar1; //HOME CATALOG and PROFILE
    }
  
    return (
      <ThemeProvider theme={Theme}>
        {/* Navbar for the application    */}
        <AppBar position='static' sx={{ boxShadow: 'md' }}>
          <Toolbar sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap' }}>
  
            {/* Left content for larger devices */}
            <Box sx={{ display: { xs: 'none', sm: 'flex' }, alignItems: 'center', gap: '10px' }}>
              {navArrayLinks.map(item => (
                <Typography key={item.title} variant='h6' color='inherit' textDecoration='none'>
                  {item.title === 'Profile' ? (
                    <Button component={Link} href={item.path} color='inherit'>
                      <Avatar src={session.user.image} alt={session.user.name} />
                    </Button>
                  ) : (
                    <Button
                      component={Link}
                      href={item.path}
                      sx={{ color:'primary.contrastText', 
                        '&:hover': {
                          backgroundColor: 'primary.dark',
                          color:'primary.light'
                        },
                        ...(item.title === 'Login' && {
                          backgroundColor: 'primary.light',
                          padding: '8px 16px',
                          borderRadius: '4px',
                        }),
                      }}
                    >
                      {item.title}
                    </Button>
                  )}
                </Typography>
              ))}
            </Box>
  
            {/* Menu button for smaller devices */}
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
  
            {/* Drawer for smaller devices */}
            <Drawer
              open={open}
              anchor="left"
              onClose={() => setOpen(false)}
              sx={{ display: { xs: 'flex', sm: 'none' } }}
            >
              <AppBar sx={{ '&:hover': {backgroundColor: 'primary.light' }}}>
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
          </Toolbar>
        </AppBar>
      </ThemeProvider>
    );
  }
