import { useState } from "react";

const EmojiStarRating = () => {
  const [rating, setRating] = useState(0);

  const handleRate = (rating) => {
    setRating(rating);
  };
  return (
    <div
      style={{
        display: "flex",
        cursor: "pointer",
        gap: "8px",
        fontSize: "48px",
      }}
    >
      <div>
        {Array.from({ length: 5 }, (__, i) => (
          <Star
            key={i + 1}
            onRate={() => handleRate(i + 1)}
            rating={rating}
            index={i + 1}
          />
        ))}
      </div>
      <p>{rating}</p>
    </div>
  );
};

const Star = ({ onRate, rating, index }) => {
  return (
    <span
      onClick={onRate}
      style={{
        color: index <= rating ? "yellow" : "gray",
      }}
    >
      🌟
    </span>
  );
};

export default EmojiStarRating;
