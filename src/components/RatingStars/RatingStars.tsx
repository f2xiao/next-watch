import { useState } from "react";
import "./RatingStars.scss";

type Props = {
  initialValue: number;
  maxRating: number;
  updateValue: (value: string) => void;
};

const RatingStars = (props: Props) => {
  const initialRatings = new Array(props.initialValue).fill(true);
  const initialEmptyStars = new Array(
    props.maxRating - props.initialValue
  ).fill(false);
  const initialState = [...initialRatings, ...initialEmptyStars];
  const [ratingStars, setRatingStars] = useState(initialState);

  const handleClick = (index: number) => {
    setRatingStars((prevState) => {
      const filledStarStatus = new Array(index + 1).fill(true);
      const unfilledStarStatus = new Array(prevState.length - (index + 1)).fill(
        false
      );
      return [...filledStarStatus, ...unfilledStarStatus];
    });
    props.updateValue(String(index + 1));
  };

  const styleObj = {
    cursor: "pointer",
    fontSize: "1.5rem",
    transition: "all 0.5s ease",
  };
  return (
    <div>
      {ratingStars.map((ele, index) =>
        ele ? (
          <span
            style={{ ...styleObj, color: "#646cffaa" }}
            className="star"
            key={index}
            onClick={() => {
              handleClick(index);
            }}
          >
            ★
          </span>
        ) : (
          <span
            style={styleObj}
            className="star"
            key={index}
            onClick={() => {
              handleClick(index);
            }}
          >
            ☆
          </span>
        )
      )}
    </div>
  );
};

export default RatingStars;
