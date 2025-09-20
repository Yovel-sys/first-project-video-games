import { useState } from "react";
import LikeButton from "./LikeButton";
import ReviewButton from "./ReviewButton";
import ReviewComponent from "./ReviewComponent";

export default function GameInteractiveComponent() {
  const [isReviewing, setIsReviewing] = useState(false);

  function handleReviewButton() {
    setIsReviewing((reviewing) => !reviewing);
    console.log(isReviewing);
  }
  return (
    <>
      <div className="flex gap-2">
        <LikeButton />
        <ReviewButton isReviewing={isReviewing} onClick={handleReviewButton} />
      </div>
      <ReviewComponent isReviewing={isReviewing} />
    </>
  );
}
