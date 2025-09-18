import { useState } from "react";

export default function ReviewComponent() {
  const [isReviewing, setIsReviewing] = useState(false);
  function handleReviewButton() {
    setIsReviewing((reviewing) => !reviewing);
  }
  return (
    <div>
      <button onClick={handleReviewButton}>
        {isReviewing ? "Save Review" : "Add a Review"}
      </button>
      <div>
        {isReviewing ? (
          <input type="text" placeholder="Write your review here" />
        ) : null}
      </div>
    </div>
  );
}
