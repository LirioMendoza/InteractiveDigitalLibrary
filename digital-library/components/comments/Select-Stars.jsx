import { useState } from 'react';
import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import { Box, createTheme, ThemeProvider } from '@mui/material/';
import Theme from '@/styles/theme';

const SelectStars = ({ onRatingChange }) => {
  const [rating, setRating] = useState(0);

  const handleClick = (newRating) => {
    try {
      newRating = rating === newRating ? 0 : newRating;
      setRating(newRating);
      onRatingChange(newRating);
      console.log({ level: "SUCCESS", message: 'A new rating has been setted.'});
    } catch (error) {
      console.error({ level: "ERROR", message: 'An error occurred while setting a new rating.', error});
    }
  };

  return (
    <ThemeProvider theme={Theme}>
    <Box component='div' sx={ {display:'block'}}>
      {[1, 2, 3, 4, 5].map((index) => (
        <span key={index} onClick={() => handleClick(index)} 
         >
          {index <= rating ? <StarIcon  
          sx={{color:"secondary.main",  
        '&:hover': {  color: 'secondary.dark', },
        }} /> : <StarBorderIcon 
        sx={{color:"secondary.main",  
        '&:hover': { color: 'secondary.dark',  },
        }} />}
        </span>
      ))}
    </Box>
    </ThemeProvider>
  );
};

export default SelectStars;
