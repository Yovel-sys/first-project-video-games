import gameImagePlaceolder from "../assets/gameImagePlaceholder.png";
import LikeButton from "./LikeButton";
import ReviewComponent from "./ReviewComponent";

export default function GameFullPage({
  isOpen,
  onClose,
  game,
  handleLike,
  onReviewSubmit,
  reviewText,
  handleReviewText,
}) {
  if (!isOpen) return null;

  return (
    <div
      className="
        fixed inset-0 bg-gray-700/50 flex justify-center items-center z-50"
      onClick={onClose}
    >
      <div
        className="bg-gray-200 rounded-2xl m-2 p-2"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative flex justify-between items-center border-b pb-3 mb-3">
          <button
            className="absolute top-2 right-2 text-gray-500 hover:text-gray-800 text-2xl"
            onClick={onClose}
          >
            &times;
          </button>
          <div className="flex items-start flex-grow mb-4">
            <img src={gameImagePlaceolder} alt="" className="h-25 w-20 mr-4" />
            <div>
              <h1 className="m-1">{game.gameName}</h1>
              <p className="m-1">Released: {game.releaseDate}</p>
              <p>{game.gameDescription}</p>
            </div>
          </div>
        </div>
        <div className="flex items-center space-x-4 mb-4">
          <LikeButton
            onLike={() => {
              handleLike(game.id);
            }}
            isLiked={game.isLiked}
          />
        </div>
        <ReviewComponent
          game={game}
          onReviewSubmit={onReviewSubmit}
          reviewText={reviewText}
          handleReviewText={handleReviewText}
        />
      </div>
    </div>
  );
}
