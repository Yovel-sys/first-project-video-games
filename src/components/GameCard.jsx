import GameInteractiveComponent from "./GameInteractiveComponent";
import gameImagePlaceolder from "../assets/gameImagePlaceholder.png";

export default function GameCard({
  handleLike,
  game,
  reviewText,
  isReviewing,
  handleReviewButton,
  handleReviewText,
  className,
}) {
  return (
    <div
      className={`h-90 w-100 bg-gray-400 opacity-90 border-4 p-3 pb-10 m-2 rounded-2xl ${className}`}
    >
      <div className="flex items-start flex-grow mb-4">
        <img src={gameImagePlaceolder} alt="" className="h-25 w-20 mr-4" />
        <div>
          <h1 className="m-1">{game.gameName}</h1>
          <p className="m-1">Released: {game.releaseDate}</p>
          <p>{game.gameDescription}</p>
        </div>
      </div>

      <GameInteractiveComponent
        onLike={() => {
          handleLike(game.id);
        }}
        isLiked={game.isLiked}
        isReviewing={isReviewing}
        handleReviewButton={handleReviewButton}
        reviewText={reviewText}
        handleReviewText={handleReviewText}
      />
    </div>
  );
}
