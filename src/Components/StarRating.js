import React from "react";
import StarRatings from "react-star-ratings";

function StarRating(props) {
  return (
    <>
      <StarRatings
        rating={props.rating}
        starDimension="30px"
        starSpacing="5px"
      />
    </>
  );
}

export default StarRating;
