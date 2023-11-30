import { useState } from 'react';
import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import { Box, ThemeProvider, Typography } from '@mui/material/';
import Theme from '@/styles/theme';

/* 
Description: Handles a new rating, verifies the array, 
and depending on the user's click, selects the stars for the rating
*/

const SelectStars = ({ onRatingChange }) => {
  const [rating, setRating] = useState(0);

  //Handling New Rating 
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
    //Rating section
    <ThemeProvider theme={Theme}>
      <Box component='div' sx={ {display:'block'}}>
        {[1, 2, 3, 4, 5].map((index) => (
          <Typography sx={{display:'inline'}} key={index} onClick={() => handleClick(index)} >
            {index <= rating ? <StarIcon  sx={{ color:"secondary.main", 
                                  '&:hover': {  color:'secondary.dark', },
            }} /> : <StarBorderIcon sx={{color:"secondary.main",  
                            '&:hover': { color: 'secondary.dark',  },
            }} />}
          </Typography>
        ))}
      </Box>
    </ThemeProvider>
  );
};

export default SelectStars;
