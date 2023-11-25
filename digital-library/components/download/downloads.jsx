'use client';
import { Button } from '@mui/material';
import DownloadIcon from '@mui/icons-material/Download';
import DownloadBooks from '@/components/download/Dowload-books.json';

const LOG_LEVELS = {
  INFO: 'INFO',
  SUCCESS: 'SUCCESS',
  ERROR: 'ERROR',
  WARNING: 'WARNING',
  DEBUG: 'DEBUG',
};
const searchKeyIndex = (searchkey) => {
// Find the index of the key in the array
  const keys = DownloadBooks.map((books) => {
    return books.key;
  });
  const inde = keys.indexOf(searchkey);
  return inde;
};

const DownloadButton = ({ title }) => {
  const handleDownload = (url, filename) => {
    console.log({ level: LOG_LEVELS.INFO, message: 'The download has started.' });
    console.debug({ level: LOG_LEVELS.DEBUG, message: 'Trying to create the download link.' });
    console.debug({ level: LOG_LEVELS.DEBUG, message: 'URL:', url });

    try {

      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', filename);
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      console.log({ level: LOG_LEVELS.SUCCESS, message: 'The download has been completed successfully.' });
    } catch (error) {
        console.error({ level: LOG_LEVELS.ERROR, message: 'An error occurred during the download.', error });
    }
    

  };
  const ind = searchKeyIndex(title);
  const links = DownloadBooks.map((books) => {
      return books.value;
  });
  const linkDownload = links[ind];
  return (
    <Button
      onClick={() => handleDownload(linkDownload)}
      variant="contained"
      color="primary"
      startIcon={<DownloadIcon />}
      style={{width: '100%'}}
    >
      Descargar
    </Button>
  );
};

const Page = ({Title}) => {
  return (
    <div>
      <div>
        <DownloadButton title={Title} />
      </div>
    </div>
  );
};

export default Page;