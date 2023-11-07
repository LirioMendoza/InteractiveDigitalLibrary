import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import DownloadButton from './DownloadButton';

describe('DownloadButton', () => {
  it('renders the button with text Descargar', () => {
    const fileURL = 'https://drive.google.com/uc?id=1ezbfcYcVFiXMzRpJG5-tlDl6Y9pkjRk1&export=download';
    render(<DownloadButton fileURL={fileURL} />);
    const buttonElement = screen.getByRole('button', { name: /Descargar/i });
    expect(buttonElement).toBeInTheDocument();
  });

  it('simulates the download when the button is clicked', () => {
    const fileURL = 'https://drive.google.com/uc?id=1ezbfcYcVFiXMzRpJG5-tlDl6Y9pkjRk1&export=download';
    const handleDownloadSpy = jest.spyOn(DownloadButton, 'handleDownload');
    render(<DownloadButton fileURL={fileURL} />);
    const buttonElement = screen.getByRole('button', { name: /Descargar/i });

    fireEvent.click(buttonElement);

    expect(handleDownloadSpy).toHaveBeenCalled();
  });
});