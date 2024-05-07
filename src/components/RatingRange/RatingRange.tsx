import { useState } from "react";
import "./RatingRange.scss";

type PropTypes = {
  initialValue: number;
  updateValue: (value: string) => void;
};

const RatingRange = ({ initialValue, updateValue }: PropTypes) => {
  const [rating, setRating] = useState(initialValue);

  return (
    <div className="rating-range">
      {" "}
      <input
        className="rating-range__slider"
        type="range"
        min="1"
        max="10"
        id="ratingRange"
        value={rating}
        onChange={(event) => {
          setRating(parseInt(event.target.value));
          updateValue(event.target.value);
        }}
      />
      <span className="rating-range__value">{rating}</span>
    </div>
  );
};

export default RatingRange;
