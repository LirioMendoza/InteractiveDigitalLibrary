import { experimental_extendTheme } from '@mui/material';
import Page from '@/app/page';
import ButtonPDf from '@/app/pages/buttonPdf';
import PdfRead from '@/app/pages/pdf-viewer';
import '@testing-library/jest-dom';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import jsonData from '../components/Books.json'

describe('Reading PDF', () => {
  jsonData.map((book, index) => {
    if( index === 8){
      it('read pdf '+book.key+' link', () => {
        render(<Page />);

        const link = screen.queryByText(book.key);
        expect(link).toBeInTheDocument();//'#0', '/#+0'
        
      });


      it('read pdf '+book.key+' open', () => {
        render(<Page />);
        
        const link = screen.queryByText(book.key);
        act(() => {
          link.click();
        });
        expect(window.location.pathname).toBe('/pdf-viewer'+"/"+index);
      });

    }
    
  });
});