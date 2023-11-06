import { experimental_extendTheme } from '@mui/material';
import Page from '../app/page';
import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import { act } from 'react-dom/test-utils';

describe('Reading PDF', () => {
  const books = [
    {key: "Rayuela", value: "https://publuu.com/flip-book/279008/652295" },
    {key: "Cocina mexicana", value: "https://publuu.com/flip-book/279008/652307" },
    {key: "El pueblo del Sol", value: "https://publuu.com/flip-book/279008/652315" },
    {key: "La vuelta al mundo en 80 días", value: "https://publuu.com/flip-book/279008/652320" },
    {key: "La odisea de Homero", value: "https://publuu.com/flip-book/279008/652277" },
    {key: "Las Batallas en el desierto", value: "https://publuu.com/flip-book/279008/652326" },
    {key: "ELLE magazine", value: "https://publuu.com/flip-book/279008/652334"},
    {key: "FORBES magazine", value: "https://publuu.com/flip-book/279008/652337" },
    {key: "Marie Claire magazine", value: "https://publuu.com/flip-book/279008/652341" },
    {key: "GLAMOUR magazine", value: "https://publuu.com/flip-book/279008/652345" },
    {key: "BAZAAR magazine", value: "https://publuu.com/flip-book/279042/652362" },
    {key: "VOGUE magazine", value: "https://publuu.com/flip-book/279042/652369" },
    {key: "La Teoría del Todo", value: "https://publuu.com/flip-book/279042/652375" },
    {key: "Mujercitas", value: "https://publuu.com/flip-book/279042/652377" },
    {key: "Pride and Prejudice", value: "https://publuu.com/flip-book/279042/652392" }, 
    {key: "Moby Dick", value: "https://publuu.com/flip-book/279042/652399" },
    {key: "Alicia a Través del Espejo", value: "https://publuu.com/flip-book/279042/652412" },
    {key: "La Naranja Mecánica", value: "https://publuu.com/flip-book/279042/652417" },
    {key: "Erase una vez México", value: "https://publuu.com/flip-book/279042/652424" },
    {key: "El jardín y la Torre", value: "https://publuu.com/flip-book/279042/652428 " },
    {key: "Aura", value: "https://publuu.com/flip-book/279072/652441" }
  ];
  it('render Pdf Icon', () => {
    render(<Page />);

    const icon = screen.queryByTestId('pdf-icon');
    expect(icon).toBeInTheDocument();

  });
  
  books.map((book) => {
    
    it('read pdf '+book.key+' link', () => {
      render(<Page />);

      const link = screen.queryByText(book.key);
      expect(link).toBeInTheDocument();//'#0', '/#+0'
      
    });


    it('read pdf '+book.key+' open', () => {
      const windowOpenSpy = jest.spyOn(window, 'open').mockReturnValue(null);
      render(<Page />);
      const width = 800;
      const height = 600;
      const left = (window.screen.width - width) / 2;
      const top = (window.screen.height - height) / 2;
      const link = screen.queryByText(book.key);
      act(() => {
        link.click();
      });
      expect(windowOpenSpy).toHaveBeenLastCalledWith(book.value, 
        'PDF Popup', `toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no, copyhistory=no, width=${width}, height=${height}, top=${top}, left=${left}`);
      windowOpenSpy.mockRestore();
    });

  });

  
});