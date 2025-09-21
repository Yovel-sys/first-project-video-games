import { useState } from "react";

export default function ReviewComponent({ isReviewing }) {
  const [reviewText, setReviewText] = useState("");

  return (
    <>
      {isReviewing ? (
        <input
          className="border-1"
          type="text"
          placeholder="Write your review here"
          value={reviewText}
          onChange={(event) => setReviewText(event.target.value)}
        />
      ) : (
        <span>{reviewText}</span>
      )}
    </>
  );
}
