import { useState } from 'react';
import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';

const SelectStars = ({ onRatingChange }) => {
  const [rating, setRating] = useState(0);

  const handleClick = (newRating) => {
    newRating = rating === newRating ? 0 : newRating;
    setRating(newRating);
    onRatingChange(newRating);
  };

  return (
    <div>
      {[1, 2, 3, 4, 5].map((index) => (
        <span key={index} onClick={() => handleClick(index)}>
          {index <= rating ? <StarIcon /> : <StarBorderIcon />}
        </span>
      ))}
    </div>
  );
};

export default SelectStars;
