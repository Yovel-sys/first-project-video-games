import { useState } from "react";

export default function ReviewComponent({ isReviewing }) {
  const [reviewText, setReviewText] = useState("");

  let reviewWindow = <span>{reviewText}</span>;
  if (isReviewing) {
    reviewWindow = (
      <input
        type="text"
        placeholder="Write your review here"
        value={reviewText}
        onChange={(event) => setReviewText(event.target.value)}
      />
    );
  }
  return <>{reviewWindow}</>;
}
