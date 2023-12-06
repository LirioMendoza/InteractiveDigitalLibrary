"use client";
import { Typography, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/system";
import { BannerContainer, BannerContent, BannerTitle, BannerDescription, BannerImage } from "../styles/banner/banner";


export default function Banner() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <BannerContainer>
        <BannerImage src="/images/Banner.png" />
        <BannerContent>
            <Typography variant="h6">UNAM e-Books</Typography>
            <BannerTitle variant="h2">
                 Academic Reading
            </BannerTitle>
            <BannerDescription variant="subtitle">
            Explore our catalog, find your next favorite read, and let yourself be 
            captivated by the magic of books. Welcome to our bookstore, where each page is a new adventure!
            </BannerDescription>
        </BannerContent>
    </BannerContainer>
  );
}