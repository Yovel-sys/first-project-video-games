import ReviewButton from "./ReviewButton";
import ReviewComponent from "./ReviewComponent";

export default function GameInteractiveComponent({
  isLiked,
  onLike,
  reviewText,
  handleReviewText,
  isReviewing,
  handleReviewButton,
}) {
  return (
    <>
      <div className="flex gap-2 mt-3">
        <button onClick={onLike}>{isLiked ? "❤️" : "♡"}</button>
        <ReviewButton isReviewing={isReviewing} onClick={handleReviewButton} />
      </div>
      <ReviewComponent
        isReviewing={isReviewing}
        handleReviewText={handleReviewText}
        reviewText={reviewText}
      />
    </>
  );
}
