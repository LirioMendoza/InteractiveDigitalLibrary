import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import CommentForm from '@/components/comments/commentForm';
import DownloadButton from '@/components/navbar/downloads';
import ImgMediaCard from '@/components/card_books/card-media';


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

test('renders CommentForm component', () => {
    render(<CommentForm addComment={() => {}} />);
    
    expect(screen.getByLabelText(/rating/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/title/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/comment/i)).toBeInTheDocument();
    expect(screen.getByText(/add comment/i)).toBeInTheDocument();
  });
  
  test('allows user to input text in the Title and Comment fields', () => {
    render(<CommentForm addComment={() => {}} />);
    
    const titleInput = screen.getByLabelText(/title/i);
    const commentInput = screen.getByLabelText(/comment/i);
    
    fireEvent.change(titleInput, { target: { value: 'Sample Title' } });
    fireEvent.change(commentInput, { target: { value: 'Sample Comment' } });
    
    expect(titleInput.value).toBe('Sample Title');
    expect(commentInput.value).toBe('Sample Comment');
  });
  
  test('submits the form with valid input', () => {
    const addCommentMock = jest.fn();
    render(<CommentForm addComment={addCommentMock} />);
    
    const titleInput = screen.getByLabelText(/title/i);
    const commentInput = screen.getByLabelText(/comment/i);
    const submitButton = screen.getByText(/add comment/i);
    
    fireEvent.change(titleInput, { target: { value: 'Sample Title' } });
    fireEvent.change(commentInput, { target: { value: 'Sample Comment' } });
    fireEvent.click(submitButton);
    
    expect(addCommentMock).toHaveBeenCalledWith({
      comment: 'Sample Comment',
      title: 'Sample Title',
      rating: 0, 
    });
    
    expect(titleInput.value).toBe('');
    expect(commentInput.value).toBe('');
  });
  
  test('prevents form submission with invalid input', () => {
    const addCommentMock = jest.fn();
    render(<CommentForm addComment={addCommentMock} />);
    
    const titleInput = screen.getByLabelText(/title/i);
    const commentInput = screen.getByLabelText(/comment/i);
    const submitButton = screen.getByText(/add comment/i);
    
    fireEvent.change(titleInput, { target: { value: '' } });
    fireEvent.change(commentInput, { target: { value: 'Sample Comment' } });
    fireEvent.click(submitButton);
    
    expect(addCommentMock).not.toHaveBeenCalled();
  });

  describe('ImgMediaCard', () => {
    test('renders card with book details', () => {
      const title = 'Sample Book';
      const author = 'John Doe';
      const description = 'A great book';
      const imageSrc = 'https://assets-global.website-files.com/6034d7d1f3e0f52c50b2adee/625452ebb0e15e764981b44c_6034d7d1f3e0f55fcab2b2de_Orgullo-y-prejuicio-jane-austen-editorial-alma.jpeg';
  
      render(<ImgMediaCard title={title} author={author} description={description} imageSrc={imageSrc} />);
  
      // Verify that the book details are rendered
      expect(screen.getByText(title)).toBeInTheDocument();
      expect(screen.getByText(author)).toBeInTheDocument();
      expect(screen.getByText(description)).toBeInTheDocument();
      expect(screen.getByAltText(title)).toHaveAttribute('src', imageSrc);
    });
  
    test('clicking comment button opens comments', async () => {
      const title = 'Sample Book';
      render(<ImgMediaCard title={title} />);
  
      // Click the comment button
      userEvent.click(screen.getByText('Comment'));
  
      // Verify that comments are rendered
      expect(await screen.findByText('Comments')).toBeInTheDocument();
    });
  
    
  });