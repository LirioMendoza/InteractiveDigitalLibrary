import React from 'react';
import Home from '@/pages/home';

const LOG_LEVELS = {
  INFO: 'INFO',
  SUCCESS: 'SUCCESS',
  ERROR: 'ERROR',
  WARNING: 'WARNING',
  DEBUG: 'DEBUG',
};

function log(level, message) {
  const timestamp = new Date().toLocaleString();
  console.log(`[${timestamp}] [${level}] - ${message}`);
}

export default function App() {
  //Message on terminal
  log(LOG_LEVELS.INFO, 'Application started');
  return (
      <Home/>
  );
}