'use client';
import { Button } from '@mui/material';
import DownloadIcon from '@mui/icons-material/Download';
import DownloadBooks from '@/components/download/Dowload-books.json';
import { LOG_LEVELS } from '@/constants/constants';
import { logToMemory } from '../logging/logger';

/*  
Description: Encapsulates the download section, 
handling the link for each book from the catalog
*/ 

const searchKeyIndex = (searchkey) => {
// Find the index of the key in the array
  const keys = DownloadBooks.map((books) => {
    return books.key;
  });
  const inde = keys.indexOf(searchkey);
  return inde;
};

//Handling Downloading of a book
const DownloadButton = ({ title }) => {
  const handleDownload = (url, filename) => {
    logToMemory({ level: LOG_LEVELS.INFO, message: 'The download has started.' });
    logToMemory({ level: LOG_LEVELS.INFO, message: 'Trying to create the download link.' });
    logToMemory({ level: LOG_LEVELS.DEBUG, message: 'URL:', url });

    try {
      //Creates a link in the document
      const link = document.createElement('a');
      link.href = url;
      //Set Download for the filename, that is the title for the book
      link.setAttribute('download', filename);
      document.body.appendChild(link);
      //Download
      link.click();
      document.body.removeChild(link);

      logToMemory({ level: LOG_LEVELS.SUCCESS, message: 'The download has been completed successfully.' });
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
      //Download Button
      <Button
        onClick={() => handleDownload(linkDownload)}
        variant="contained"
        color="primary"
        startIcon={<DownloadIcon />}
        style={{width: '100%'}}
      >
        Download
      </Button>
    );
};

//Handles Download for the book specified.
const Page = ({Title}) => {
  return (
    <DownloadButton title={Title} />
  );
};

export default Page;