'use client';
import React, { useState, useEffect, useMemo } from 'react';
import Typography from '@mui/material/Typography';
import { useSession } from 'next-auth/react';
import { textHome, textHome1 } from '@/constants/constants';

/*
Description: Handles text created by Javascript
*/

const TypeWriter = ({ speed = 100 }) => {
  const { status, data: session } = useSession();
  const isUserAuthenticated = status === 'authenticated';

  const text = useMemo(() => (isUserAuthenticated ? textHome : textHome1), [isUserAuthenticated]);
  const memoizedText = useMemo(() => text, [text]);
  const [displayText, setDisplayText] = useState('');

  useEffect(() => {
    let currentText = '';
    let index = 0;

    const intervalId = setInterval(() => {
      if (index === memoizedText.length) {
        currentText += memoizedText[index] + '\n';
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
    <Typography
      variant="h4"
      sx={{
        textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        whiteSpace: 'pre-line',
        fontWeight: 'bold',
        fontStyle: 'italic',
        marginBottom: '40px', // Ajusta este valor según sea necesario
      }}
    >
      {displayText}
    </Typography>
  );
};

export default TypeWriter;