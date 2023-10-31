'use client';
import { Button } from '@mui/material';
import DownloadIcon from '@mui/icons-material/Download';

const DownloadButton = ({ fileURL }) => {
  const handleDownload = (url, filename) => {
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', filename);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <Button
      onClick={() => handleDownload(fileURL)}
      variant="contained"
      color="primary"
      startIcon={<DownloadIcon />}
    >
      Descargar
    </Button>
  );
  
};

const Page = () => {
  const fileURL1 = 'https://drive.google.com/uc?id=1ezbfcYcVFiXMzRpJG5-tlDl6Y9pkjRk1&export=download';
  const fileURL2 = 'https://drive.google.com/uc?id=1Y1y6aLShKHLMaXkMYGotX1-b25cu-DIF&export=download ';
  const fileURL3 = 'https://drive.google.com/uc?id=1spqoR-SLaSdcgp8eiiaWjLPiFV_fKxCl&export=download ';
  const fileURL4 = 'https://drive.google.com/uc?id=1k5DTOHil6HVrasfn4pjoSSOq69YJy8CG&export=download';
  const fileURL5 = 'https://drive.google.com/uc?id=1MGydTngr04hT69AFEnVnHRroAlpH7bCU&export=download';
  const fileURL6 = 'https://drive.google.com/uc?id=18DNT7kAT4T6MDaqYpFEKBUS2QS-G95kR&export=downloa';
  const fileURL7 = 'https://drive.google.com/uc?id=18DNT7kAT4T6MDaqYpFEKBUS2QS-G95kR&export=download';
  const fileURL8 = 'https://drive.google.com/uc?id=187MWR4C3NYsJCceveA7s-vk5sUzNqke9&export=download';
  const fileURL9 = 'https://drive.google.com/uc?id=144nZanRGubfSH57hafeethxX_xeYYotb&export=download';
  const fileURL10 = 'https://drive.google.com/uc?id=1klsflkVzkLP6VE0l0rc18IbafAAgNMK1&export=download';
  const fileURL11 = 'https://drive.google.com/uc?id=13c3DvOBFZMsCR-QzdlRa5LdLFlQw5poH&export=download';
  const fileURL12 = 'https://drive.google.com/uc?id=15Lf-zsjkiwFKuTrXHF5zoFVXTVbpJ1rG&export=download';
  const fileURL13 = 'https://drive.google.com/uc?id=1HVKTQIyOJhFvXnZTGAfQR0XLTqBvXXdl&export=download';
  const fileURL14 = 'https://drive.google.com/uc?id=1r42lITWprkLbEk79kGz65PMrbLQr01Bv&export=download';
  const fileURL15 = 'https://drive.google.com/uc?id=1hmTbkbZrJUGnk_t7aWSGUkjimt6hGT_H&export=download';
  const fileURL16 = 'https://drive.google.com/uc?id=1MApii_lxiTEwgXpvTesiGyGdhFri42fo&export=download';
  const fileURL17 = 'https://drive.google.com/uc?id=1skWsVI5MRKaS20dlwlOrEwQ87w8H4QxP&export=download';
  const fileURL18 = 'https://drive.google.com/uc?id=12TM4vB0T8gfPCchLSwcNvqOKFVIUpV-H&export=download';
  const fileURL19 = 'https://drive.google.com/uc?id=17VySu4mUXHcykF4Piu45A41mYk7nliRn&export=download';
  const fileURL20 = 'https://drive.google.com/uc?id=1hbXP5Hr9YlZdgVxyco0zti6cVWPebHAa&export=download';
  const fileURL21 = 'https://drive.google.com/uc?id=1PryAwjnZflgYCEUr4tUvltD9NHpYdfQO&export=download';


  return (
    <div>
      <h1>DOWNLOAD</h1>
      <div style={{ margin: '10px' }}>
        {DownloadButton({ fileURL: fileURL1 })}
      </div>
      <div style={{ margin: '10px' }}>
        {DownloadButton({ fileURL: fileURL2 })}
      </div>
      <div style={{ margin: '10px' }}>
        {DownloadButton({ fileURL: fileURL3 })}
      </div>
      <div style={{ margin: '10px' }}>
        {DownloadButton({ fileURL: fileURL4 })}
      </div>
      <div style={{ margin: '10px' }}>
        {DownloadButton({ fileURL: fileURL5 })}
      </div>
      <div style={{ margin: '10px' }}>
        {DownloadButton({ fileURL: fileURL6 })}
      </div>
      <div style={{ margin: '10px' }}>
        {DownloadButton({ fileURL: fileURL7 })}
      </div>
      <div style={{ margin: '10px' }}>
        {DownloadButton({ fileURL: fileURL8 })}
      </div>
      <div style={{ margin: '10px' }}>
        {DownloadButton({ fileURL: fileURL9 })}
      </div>
      <div style={{ margin: '10px' }}>
        {DownloadButton({ fileURL: fileURL10 })}
      </div>
      <div style={{ margin: '10px' }}>
        {DownloadButton({ fileURL: fileURL11 })}
      </div>
      <div style={{ margin: '10px' }}>
        {DownloadButton({ fileURL: fileURL12 })}
      </div>
      <div style={{ margin: '10px' }}>
        {DownloadButton({ fileURL: fileURL13 })}
      </div>
      <div style={{ margin: '10px' }}>
        {DownloadButton({ fileURL: fileURL14 })}
      </div>
      <div style={{ margin: '10px' }}>
        {DownloadButton({ fileURL: fileURL15 })}
      </div>
      <div style={{ margin: '10px' }}>
        {DownloadButton({ fileURL: fileURL16 })}
      </div>
      <div style={{ margin: '10px' }}>
        {DownloadButton({ fileURL: fileURL17 })}
      </div>
      <div style={{ margin: '10px' }}>
        {DownloadButton({ fileURL: fileURL18 })}
      </div>
      <div style={{ margin: '10px' }}>
        {DownloadButton({ fileURL: fileURL19 })}
      </div>
      <div style={{ margin: '10px' }}>
        {DownloadButton({ fileURL: fileURL20 })}
      </div>
      <div style={{ margin: '10px' }}>
        {DownloadButton({ fileURL: fileURL21 })}
      </div>
    </div>
  );
};

export default Page;