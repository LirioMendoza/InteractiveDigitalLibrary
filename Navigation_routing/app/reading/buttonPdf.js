'use client';
import React from 'react';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import { Button, Typography} from '@mui/material';
import {NavLink} from 'react-router-dom';
import jsonData from './Books.json';
//import PdfRead from './pdf-viewer';


const searchKeyIndex = (searchkey) => {
  
// Find the index of the key in the array
  const keys = jsonData.map((books) => {
    return books.key;
  });
  const inde = keys.indexOf(searchkey);
  //console.log(`La clave "${searchkey}" se encuentra en el índice ${inde} en el Map.`);
  return inde;
};


//<Link href='/pdf-viewer' content={<PdfRead code={key} inde={ind}/>}>
const containerPdf = (title, ind) => {
  const jsFileUrl = '/pdf-viewer'+'/'+title+'/'+ind;
  return(
    <>
      <NavLink to={jsFileUrl} >
        <Button
          variant="contained"
          size="small"
          startIcon={<PictureAsPdfIcon />}

          data-testid = 'pdf-icon'
        >
          <Typography style={{color: 'white'}} >
            READ
          </Typography>
        </Button> 
      </NavLink>
    </>
  );
}
const ButtonPDf = ({code}) => {
  //console.log(`Al boton le pasaste La clave "${code}" se encuentra en el índice ${index} en el Map.`);
  //console.log(`La clave "${dataBook.TITLE}" se encuentra en el índice ${dataBook.IND} en el Map.`);
  const inde = searchKeyIndex(code);
  return(
    <>
      <div>
        {containerPdf(code, inde)}
      </div>
    </>
  );
};

export default ButtonPDf;