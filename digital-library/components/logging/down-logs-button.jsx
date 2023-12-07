'use client';
import React from 'react';
import { Button } from '@mui/material';
import { downloadLogs } from './logger';
const DownloadLogsButton = () => {
  const handleDownloadLogs = () => {
    downloadLogs();
  };
  return (
    <Button target="_blank" 
    variant="outlined" onClick={handleDownloadLogs}>
      Descargar Registros
    </Button>
  );
};

export default DownloadLogsButton;