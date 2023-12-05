import StarIcon from '@mui/icons-material/Star';
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import { ThemeProvider } from '@mui/material/';

/* 
Description: Handles rating Stars between Filled and Empty
*/ 

const RatingStars = ({ rating }) => {
  console.info({ level: "INFO", message: "Trying to show RaitingStarts from comments."});
  try {
    const filledStars = Array.from({ length: rating }, (_, index) => (
      <StarIcon color="secondary.main" key={index} />
    ));
    const emptyStars = Array.from({ length: 5 - rating }, (_, index) => (
      <StarOutlineIcon color="secondary.main" key={index} />
    ));

    console.info({ level: "DEBUG", message: "Rating value.", data: rating});
    console.log({level: "SUCCESS", message: "Star raiting is displayed."});

    return (
      <ThemeProvider theme={theme}>
        <Box type='div' style={{ display: 'flex' }}>
          {filledStars}
          {emptyStars}
        </Box>
      </ThemeProvider>
    );
  } catch (error) {
      console.error({ level: "ERROR", message: "An error occurred with RaitingStarts.", error});
    return null; 
  }
};

export default RatingStars;
