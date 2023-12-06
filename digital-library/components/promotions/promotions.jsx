"use client";

import { Box, Slide } from "@mui/material";
import { useEffect, useState } from "react";
import { MessageText, PromotionsContainer } from "../styles/promotions/promotions.jsx";


const messages = [
    "Welcome to UNAM e-Books",
    "Download the books and magazines of your choice",
    "¡¡Have fun!!",
  ];

  export default function Promotions() {
        const [messageIndex, setMessageIndex] = useState(0)
        const [show, setShow] = useState(true);
        useEffect(() => {

            setTimeout(() => {
                setShow(false)
            }, 3000);

            const intervalId = setInterval(() => {
                setMessageIndex(i => (i+1)%messages.length)
                setShow(true);

                setTimeout(() => {
                    setShow(false)
                }, 3000);

            }, 4000);

            return () => {
                clearInterval(intervalId);
            }
        }, []);
        return (
            <PromotionsContainer>
                <Slide
                    direction="left"
                    in={show}
                >
                <Box display={"flex"} justifyContent="center" alingitems={"center"}>
                    <MessageText>
                        {messages[messageIndex]}
                    </MessageText>
                </Box>
                </Slide>
            </PromotionsContainer>
    );
  }