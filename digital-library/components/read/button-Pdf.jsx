'use client';
import React from 'react';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import { Button, Typography} from '@mui/material';
import {NavLink} from 'react-router-dom';
import jsonData from './Books.json';
import Link from 'next/link';


const searchKeyIndex = (searchkey) => {
  
// Find the index of the key in the array
  const keys = jsonData.map((books) => {
    return books.key;
  });
  const inde = keys.indexOf(searchkey);
  return inde;
};

const ContainerPdf = (title, ind) => {
  const encodedTitle = encodeURIComponent(title);
  const encodedInd = encodeURIComponent(ind);
  const pdfUrl = `/pdf-viewer/${encodedTitle}/${encodedInd}`;
  return(
    <>
      <Typography variant='h6' color='inherit'  textDecoration='none'>
        <Link href="/pdf-viewer/[param1]/[param2]" as={pdfUrl} passHref>
          <Button
            variant="contained"
            startIcon={<PictureAsPdfIcon />}
            style={{ width: '100%' }}
          >
            READ
          </Button>
        </Link>
      </Typography>
    </>
  );
}
const ButtonPDf = ({code}) => {

  const inde = searchKeyIndex(code);
  return(
    <>
      <div>
        {ContainerPdf(code, inde)}
      </div>
    </>
  );
};

export default ButtonPDf;