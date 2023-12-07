import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';

import CommentForm from '@/components/comments/Comment-Form';
import ImgMediaCard from '@/components/card_books/card-media';

describe('CommentForm', () => {
  it('renders CommentForm component correctly', () => {
    render(<CommentForm addComment={() => {}} />);
    expect(document.getElementById('Rating'));
    expect(document.getElementById('title'));
    expect(document.getElementById('Add comment'));
    
  });

  it('allows user to input text in the Title and Comment fields', () => {
    render(<CommentForm addComment={() => {}} />);
    
    const titleInput = screen.getByLabelText(/Title/i);
    const commentInput = screen.getByLabelText(/Comment/i);
    
    fireEvent.change(titleInput, { target: { value: 'Sample Title' } });
    fireEvent.change(commentInput, { target: { value: 'Sample Comment' } });
    
    expect(titleInput.value).toBe('Sample Title');
    expect(commentInput.value).toBe('Sample Comment');
  });

  it('submits the form with valid input', () => {
    const addCommentMock = jest.fn();
    render(<CommentForm addComment={addCommentMock} />);
    
    const titleInput = screen.getByLabelText(/Title/i);
    const commentInput = screen.getByLabelText(/Comment/i);
    const submitButton = screen.getByText(/Add comment/i);
    
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

  it('prevents form submission with invalid input', () => {
    const addCommentMock = jest.fn();
    render(<CommentForm addComment={addCommentMock} />);
    
    const titleInput = screen.getByLabelText(/Title/i);
    const commentInput = screen.getByLabelText(/Comment/i);
    const submitButton = screen.getByText(/Add comment/i);
    
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

