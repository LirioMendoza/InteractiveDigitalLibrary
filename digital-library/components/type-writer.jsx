'use client';
import React, { useState, useEffect, useMemo  } from 'react';
import Typography from '@mui/material/Typography';
import { useSession } from 'next-auth/react';
import {textHome, textHome1} from "@/constants/constants";

const TypeWriter = ({ text, speed = 100 }) => {
  
  const { status, data: session } = useSession();

  if (status === 'authenticated' && session) {
    text = textHome;
  }else{
    text = textHome+'\n'+textHome1;
  }
  const memoizedText = useMemo(() => text, [text]);
  const [displayText, setDisplayText] = useState('');
  useEffect(() => {
    let currentText = '';
    let index = 0;

    const intervalId = setInterval(() => {
      
      if (index === memoizedText.length) {
        currentText += memoizedText[index]+'\n';
      } else {
        currentText += memoizedText[index];
      }
      
      setDisplayText(currentText);
      index += 1;
      if (index === memoizedText.length) {
        clearInterval(intervalId);
      }
    }, speed);

    return () => clearInterval(intervalId);
  }, [memoizedText, speed]);

  return (
    <Typography variant="h4" 
      sx={{ textAlign: 'center', 
        justifyContent: 'center', 
        alignItems: 'center', 
        whiteSpace: 'pre-line',
        fontWeight: 'bold',
        fontStyle: 'italic',
    }}>
      {displayText}
    </Typography>
  );
};

export default TypeWriter;