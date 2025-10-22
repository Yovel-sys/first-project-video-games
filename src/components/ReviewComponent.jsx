export default function ReviewComponent({
  game,
  onReviewSubmit,
  reviewText,
  handleReviewText,
}) {
  function handleSubmit() {
    onReviewSubmit(game.id, reviewText);
  }

  return (
    <>
      <input
        className="border-1 w-2xl h-2xl"
        type="text"
        placeholder="Write your review here"
        value={reviewText}
        onChange={handleReviewText}
      />
      <div className="mt-3 mb-3">
        <button onClick={handleSubmit}>Add a Review</button>
      </div>
      <div id="reviewBoard">
        {game.gameReviews.map((review, index) => (
          <p key={index} className="italic">
            "{review}"
          </p>
        ))}
      </div>
    </>
  );
}
