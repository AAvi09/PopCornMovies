import { useState } from "react";

const EmojiStarRating = () => {
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);

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
            onHoverIn={() => setHoverRating(i + 1)}
            onHoverOut={() => setHoverRating(0)}
            rating={rating}
            hoverRating={hoverRating}
            index={i + 1}
          />
        ))}
      </div>
      <p>{hoverRating || rating || ""}</p>
    </div>
  );
};

const Star = ({
  onRate,
  rating,
  index,
  onHoverIn,
  onHoverOut,
  hoverRating,
}) => {
  const isFilled = rating >= index || hoverRating >= index;
  return (
    <span
      onClick={onRate}
      onMouseEnter={onHoverIn}
      onMouseLeave={onHoverOut}
      style={{
        color: isFilled ? "yellow" : "gray",
        gap: "10px",
      }}
    >
      Star
    </span>
  );
};

export default EmojiStarRating;
