import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import CommentForm from '@/components/commentForm';

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



