export default function ReviewComponent({
  isReviewing,
  handleReviewText,
  reviewText,
}) {
  return (
    <>
      {isReviewing ? (
        <input
          className="border-1"
          type="text"
          placeholder="Write your review here"
          value={reviewText}
          onChange={handleReviewText}
        />
      ) : (
        <span>{reviewText}</span>
      )}
    </>
  );
}
