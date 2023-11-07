import ImgMediaCard from "@/components/navbar/card-media";
import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import jsonData from '../components/navbar/books.json';
import { Experimental_CssVarsProvider } from "@mui/material";
describe('ImgMediaCard',()=>{
    const { title, imageSrc, description } = jsonData;
    it('renders ImgMediaCard component', () => {
        const title = 'Test Title';
    const description = 'Test Description';

    render(<ImgMediaCard title={title} description={description} />);

    const titleElement = screen.getByTestId('title');
    const descriptionElement = screen.getByTestId('description');

    expect(titleElement).toBeInTheDocument();
    expect(titleElement).toHaveTextContent(title);

    expect(descriptionElement).toBeInTheDocument();
    expect(descriptionElement).toHaveTextContent(description);
      });
      
});