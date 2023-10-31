'use client';

import React from 'react';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import { red } from '@mui/material/colors';
import Typography from '@mui/material/Typography';
import Link from 'next/link';

const openPopup = (url, title, width, height) => {
  const left = (window.screen.width - width) / 2;
  const top = (window.screen.height - height) / 2;
  window.open( 
    url,
    title,
    `toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no, copyhistory=no, width=${width}, height=${height}, top=${top}, left=${left}`
  );
};

const index = (key, books) => {
  const searchKey = {key};

  const array = Array.from(books);
  const inde = array.findIndex(([clave]) => clave === key);

  if (inde !== -1) {
    return inde;
  } 
};

const containerPdf = (key) => {
  const books = new Map();
  books.set("Rayuela" ,"https://publuu.com/flip-book/279008/652295");
  books.set("Cocina mexicana" , "https://publuu.com/flip-book/279008/652307");
  books.set("El pueblo del Sol", "https://publuu.com/flip-book/279008/652315");
  books.set("La vuelta al mundo en 80 días" , "https://publuu.com/flip-book/279008/652320");
  books.set("La odisea de Homero" , "https://publuu.com/flip-book/279008/652277");
  books.set("Las Batallas en el desierto", "https://publuu.com/flip-book/279008/652326");
  books.set("ELLE magazine" , "https://publuu.com/flip-book/279008/652334");
  books.set("FORBES magazine" , "https://publuu.com/flip-book/279008/652337");
  books.set("Marie Claire magazine" , "https://publuu.com/flip-book/279008/652341");
  books.set("GLAMOUR magazine" , "https://publuu.com/flip-book/279008/652345");
  books.set("BAZAAR magazine" , "https://publuu.com/flip-book/279042/652362");
  books.set("VOGUE magazine" , "https://publuu.com/flip-book/279042/652369");
  books.set("La Teoría del Todo" , "https://publuu.com/flip-book/279042/652375");
  books.set("Mujercitas" , "https://publuu.com/flip-book/279042/652377");
  books.set("Pride and Prejudice" , "https://publuu.com/flip-book/279042/652392");
  books.set("Moby Dick" , "https://publuu.com/flip-book/279042/652399");
  books.set("Alicia a Través del Espejo" , "https://publuu.com/flip-book/279042/652412");
  books.set("La Naranja Mecánica" , "https://publuu.com/flip-book/279042/652417");
  books.set("Erase una vez México" , "https://publuu.com/flip-book/279042/652424");
  books.set("El jardín y la Torre" , "https://publuu.com/flip-book/279042/652428");
  books.set("Aura" , "https://publuu.com/flip-book/279072/652441");
  
  const keyExists = books.has(key);
  //const keyExists = true;

  if(keyExists == true){
    const ind = index(key, books);
    return(
      <div>
        <Link href={"#"+ ind} 
          onClick={() => openPopup(books.get(key), 'PDF Popup', 800, 600) }>
          <PictureAsPdfIcon 
          sx={{color : red[500],
              fontSize: 30,   
          }} data-testid = 'pdf-icon'>
          </PictureAsPdfIcon> 
          <Typography variant="h6" gutterBottom >
            {key}
          </Typography>
        </Link>
      </div>
    );
  }
};

const Page = () => {
  const key = "Cocina mexicana";

  return (
    <div>
      <h1>BOOKS</h1>
      {containerPdf(key)}
    </div>
  );
};


export default Page;