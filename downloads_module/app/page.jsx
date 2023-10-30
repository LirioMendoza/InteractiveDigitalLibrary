'use client';
import { Button } from '@mui/material';
import DownloadIcon from '@mui/icons-material/Download';

const DownloadButton = (fileURL) => {
  const handleDownload = (fileURL1) => {
    const link = document.createElement('a');
    link.href = fileURL1;
    link.setAttribute('download', 'RAYUELA.pdf');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <Button
      onClick={() => handleDownload(fileURL) }
      variant="contained"
      color="primary"
      startIcon={<DownloadIcon />}
    >
      Descargar
    </Button>
  );

};
const Page = () => {
  const fileURL = 'https://drive.google.com/uc?id=1ezbfcYcVFiXMzRpJG5-tlDl6Y9pkjRk1&export=download';
  return (
    <div>
      <h1>DOWNLOAD</h1>
      {DownloadButton(fileURL)}
    </div>

  );
};
export default Page;