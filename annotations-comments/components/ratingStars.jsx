import StarIcon from '@mui/icons-material/Star';
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import { createTheme, ThemeProvider } from '@mui/material/';

const RatingStars = ({ rating }) => {
  const filledStars = Array.from({ length: rating }, (_, index) => <StarIcon color="secondary.main" key={index} />);
  const emptyStars = Array.from({ length: 5 - rating }, (_, index) => <StarOutlineIcon color="secondary.main" key={index} />);

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
        light:'#9657CD',
        dark: '#562087',
        contrastText: '#fff',
      },}, 
    }
    );

  return (
    <ThemeProvider theme={theme}>
    <div style={{ display: 'flex'  }} >
      {filledStars} 
      {emptyStars}
    </div>
    </ThemeProvider>
  );
};

export default RatingStars;
