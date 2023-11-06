import StarIcon from '@mui/icons-material/Star';
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import { createTheme, ThemeProvider } from '@mui/material/';

const RatingStars = ({ rating }) => {
  console.log("INFO: Trying to show RaitingStarts from comments.");
  try {
    const filledStars = Array.from({ length: rating }, (_, index) => (
      <StarIcon color="secondary.main" key={index} />
    ));
    const emptyStars = Array.from({ length: 5 - rating }, (_, index) => (
      <StarOutlineIcon color="secondary.main" key={index} />
    ));

    const theme = createTheme({
      palette: {
        mode: 'light',
        primary: {
          main: '#29a493',
          dark: '#1C7266',
          contrastText: '#fff',
        },
        secondary: {
          main: '#7c2ec1',
          light: '#9657CD',
          dark: '#562087',
          contrastText: '#fff',
        },
      },
    });

    console.info("DEBUG: Rating value:", rating);
    console.log("SUCCES: Star raiting is displayed.");

    return (
      <ThemeProvider theme={theme}>
        <div style={{ display: 'flex' }}>
          {filledStars}
          {emptyStars}
        </div>
      </ThemeProvider>
    );
  } catch (error) {
    console.error('ERROR: An error occurred with RaitingStarts.', error);
    return null; 
  }
};

export default RatingStars;
