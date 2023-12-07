'use client';

let inMemoryLogs = [];

export const logToMemory = ({ level, message, error, data }) => {
  let logEntry = `[${level}] ${message}`;

  if (error) {
    logEntry += `\nError Details: ${JSON.stringify(error)}`;
  }

  if (data) {
    logEntry += `\nData: ${JSON.stringify(data)}`;
  }
  console.log(logEntry);
  inMemoryLogs.push(logEntry);
};

export const getInMemoryLogs = () => {
  return inMemoryLogs;
};

export const clearInMemoryLogs = () => {
  inMemoryLogs.length = 0;
};

export const downloadLogs = () => {
  const content = inMemoryLogs.join('\n');
  const blob = new Blob([content], { type: 'text/plain' });


  const enlaceDescarga = document.createElement('a');
  enlaceDescarga.href = URL.createObjectURL(blob);
  enlaceDescarga.download = 'consoleLogs.txt';
  document.body.appendChild(enlaceDescarga);
  enlaceDescarga.click();

  document.body.removeChild(enlaceDescarga);
  inMemoryLogs.length = 0;
};

