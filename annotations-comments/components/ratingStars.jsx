import StarIcon from '@mui/icons-material/Star';
import StarOutlineIcon from '@mui/icons-material/StarOutline';

const RatingStars = ({ rating }) => {
  const filledStars = Array.from({ length: rating }, (_, index) => <StarIcon color="secondary" key={index} />);
  const emptyStars = Array.from({ length: 5 - rating }, (_, index) => <StarOutlineIcon color="secondary" key={index} />);

  return (
    <div style={{ display: 'flex' }}>
      {filledStars}
      {emptyStars}
    </div>
  );
};

export default RatingStars;
