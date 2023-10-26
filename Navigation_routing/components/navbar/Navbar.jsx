"use client";
import { AppBar, Box, Button, Drawer, IconButton, Toolbar, Typography } from "@mui/material";
import NavListDrawer from "./NavListDrawer";
import { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";


const navLinks = [
    {
        title: "Home", path: "#"
    },
    {
        title: "Login", path: "#login"
    },
    {
        title: "Catalog", path: "#catalog"
    }
]

export default function Navbar(){
    
    const [open, setOpen] = useState(false);
    
    return (
    <>

        <AppBar position="static">
            <Toolbar>
                <IconButton
                color="inherit"
                size="large"
                onClick={() => setOpen(true)}
                sx={{display: {xs: "flex", sm: "none"}}}
                edge="start"
                >
                    <MenuIcon />
                </IconButton>
                <Typography variant="h6" sx={{flexGrow: 1}}>
                    Libreary
                </Typography>

                <Box sx={{ display: {xs: "none", sm: "block" }}}> 

                {navLinks.map(item =>(
                    <Button color="inherit" 
                        key={item.title}
                        component="a"
                        href={item.path}
                        >
                        {item.title}
                    </Button>

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
            <NavListDrawer navLinks={navLinks} />
            </Drawer>
    </>
    )
}