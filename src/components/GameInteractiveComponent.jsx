import { useState } from "react";
import ReviewButton from "./ReviewButton";
import ReviewComponent from "./ReviewComponent";

export default function GameInteractiveComponent({ isliked, handleLike }) {
  const [isReviewing, setIsReviewing] = useState(false);

  function handleReviewButton() {
    setIsReviewing((reviewing) => !reviewing);
    console.log(isReviewing);
  }

  return (
    <>
      <div className="flex gap-2 mt-3">
        <button onClick={handleLike}>{isliked ? "❤️" : "♡"}</button>
        <ReviewButton isReviewing={isReviewing} onClick={handleReviewButton} />
      </div>
      <ReviewComponent isReviewing={isReviewing} />
    </>
  );
}
