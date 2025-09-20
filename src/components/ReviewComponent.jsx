import { useState } from "react";

export default function ReviewComponent({ isReviewing }) {
  const [reviewText, setReviewText] = useState("");

  let reviewWindow = <span>{reviewText}</span>;
  if (isReviewing) {
    reviewWindow = (
      <input
        className="border-1"
        type="text"
        placeholder="Write your review here"
        value={reviewText}
        onChange={(event) => setReviewText(event.target.value)}
      />
    );
  }
  return <>{reviewWindow}</>;
}
