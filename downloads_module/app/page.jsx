'use client';
import { Button } from '@mui/material';
import DownloadIcon from '@mui/icons-material/Download';

const LOG_LEVELS = {
  INFO: 'INFO',
  SUCCESS: 'SUCCESS',
  ERROR: 'ERROR',
  WARNING: 'WARNING',
  DEBUG: 'DEBUG',
};

const DownloadButton = ({ fileURL }) => {
  const handleDownload = (url, filename) => {
    console.log({ level: LOG_LEVELS.INFO, message: 'Se ha iniciado la descarga.' });
    console.debug({ level: LOG_LEVELS.DEBUG, message: 'URL:', url });

    try {

      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', filename);
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      console.log({ level: LOG_LEVELS.SUCCESS, message: 'La descarga se ha completado con éxito.' });
    } catch (error) {
        console.error({ level: LOG_LEVELS.ERROR, message: 'Ha ocurrido un error en la descarga.', error });
    }
    

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

  return (
    <div>
      <h1>DOWNLOAD</h1>
      <div style={{ margin: '10px' }}>
        <DownloadButton fileURL={fileURL1} />
      </div>
    </div>
  );
};

export default Page;

