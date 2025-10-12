import GameCard from "./GameCard";
export default function GameOfTheDay({
  games,
  handleLike,
  reviewText,
  isReviewing,
  handleReviewButton,
  handleReviewText,
}) {
  const game = games[1];
  // זמני. כאן תיכנס בחירה רנדומלית וטיימר של יום

  return (
    <div className="border-gray-500 rounded-2xl">
      <GameCard
        key={game.id}
        handleLike={handleLike}
        game={game}
        reviewText={reviewText}
        isReviewing={isReviewing}
        handleReviewButton={handleReviewButton}
        handleReviewText={handleReviewText}
      />
    </div>
  );
}
