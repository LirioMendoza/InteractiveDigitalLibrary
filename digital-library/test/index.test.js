import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import CommentForm from '@/components/comments/Comment-Form';

describe('CommentForm', () => {
  it('renders CommentForm component correctly', () => {
    render(<CommentForm addComment={() => {}} />);
    
    expect(screen.getByLabelText(/Rating/i, { selector: '#rating-box' })).toBeInTheDocument();
    expect(screen.getByLabelText(/Title/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Comment/i)).toBeInTheDocument();
    expect(screen.getByText(/Add comment/i)).toBeInTheDocument();
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
      rating: 0,  // Deberías ajustar esto si esperas un valor diferente
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
});
