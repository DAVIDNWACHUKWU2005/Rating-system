import "../css/index.css";
import React, { useState } from "react"; 
import Star from "./star"; 

const starLabels = ["Very bad", "Bad", "Okay", "Good", "Excellent"]; 
function StarRating() {
  const [chosenStars, setChosenStars] = useState(0); 
  return (
    <div className="star-rating">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i} 
          selected={i < chosenStars}
          onClick={() => setChosenStars(i + 1)}
        />
      ))}
      <h2>{chosenStars ? starLabels[chosenStars - 1] : "Rate us!"}</h2>
    </div>
  );
}

export default StarRating;
