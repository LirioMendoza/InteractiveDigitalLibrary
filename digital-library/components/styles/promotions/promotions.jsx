"use client";
import { Typography } from "@mui/material";
import { Box, styled } from "@mui/system";


export const PromotionsContainer = styled(Box)(({ theme }) => ({
  [theme.breakpoints.up("md")]: {
    padding: "15px 0px 15px 0px",
  },
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  padding: "20px 0px 20px 0px",
  overflow: "hidden",
  backgroundColor: '#ADD8E6',
}));

export const MessageText = styled(Typography)(({ theme }) => ({
    fontFamily: '"Montez", "cursive"',
    color: 'white',  
  
    [theme.breakpoints.up("md")]: {
      fontSize: "2.0rem",
    },
    fontSize: "1.5rem",
  }));
  