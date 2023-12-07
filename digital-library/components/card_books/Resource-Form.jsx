'use client';

import { useState } from 'react';

import { TextField, FormControl, InputLabel, Box, Button } from '@mui/material';
import Theme from '@/styles/theme';
import { ThemeProvider } from '@mui/material/';

/* 
Description: Handles every part of the comment Form.
*/

const ResourceForm = ({ onAddResource}) => {

  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [description, setDescription] = useState('');
  const [book_cover, setBookCover] = useState('');
  const [pdf_url, setPdfUrl] = useState('');

  //Handling Submit Resource 
  const handleAddResource = (e) => {
    e.preventDefault();
    console.info({level: "INFO", message: "Trying to submit resource form."});
    try {
      onAddResource({ title, author, description, book_cover, pdf_url});
      
      setTitle('');
      setAuthor('');
      setDescription('');
      setBookCover('');
      setPdfUrl('');    

      console.log({level: "SUCCESS", message: "Resource form submitted."});
      
    }catch (error) {
      console.error({level: "WARNING", message: error.message, error});
    }
    console.info({level: "DEBUG", message: "Title", data: title});
  };

  return (
    <ThemeProvider theme={Theme}>
      <Box sx={{ maxWidth: '400px', margin: '0 auto'}} >

        {/* Title section */}
        <FormControl fullWidth margin="normal">
          <TextField
            required
            type="text"
            value={title}
            label="Title"
            onChange={(e) => setTitle(e.target.value)}
            placeholder="What is the title of the book?"
            variant="outlined"
          />
        </FormControl>

        {/* Author */}
        <FormControl fullWidth margin="normal">
          <TextField
            required
            type="text"
            value={author}
            label="Author"
            onChange={(e) => setAuthor(e.target.value)}
            placeholder="Who is the author of the book?"
            variant="outlined"
          />
        </FormControl>

        {/* Description */}
        <FormControl fullWidth margin="normal">
          <TextField
            required
            type="text"
            value={description}
            label="Description"
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Describe the book"
            variant="outlined"
          />
        </FormControl>

        {/* Book Cover */}
        <FormControl fullWidth margin="normal">
          <TextField
            type="text"
            value={book_cover}
            label="Book Cover URL"
            onChange={(e) => setBookCover(e.target.value)}
            placeholder="Enter the URL of the book cover"
            variant="outlined"
          />
        </FormControl>

        {/* PDF URL */}
        <FormControl fullWidth margin="normal">
          <TextField
            type="text"
            value={pdf_url}
            label="PDF URL"
            onChange={(e) => setPdfUrl(e.target.value)}
            placeholder="Enter the URL of the PDF"
            variant="outlined"
          />
        </FormControl>        

        {/* Add resource Button */}
  
        <Button 
            variant='contained' 
            color='primary'
            onClick={handleAddResource} 
            fullWidth
          >
          Add Resource
        </Button>

      
      
      </Box>
    </ThemeProvider>
  );
};

export default ResourceForm;