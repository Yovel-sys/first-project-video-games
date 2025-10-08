import { useState } from "react";
import "../app.css";
import GameCard from "../components/GameCard";
import Header from "../components/Header";

export default function HomePage({ games, handleLike }) {
  const [reviewText, setReviewText] = useState("");
  function handleReviewText(event) {
    setReviewText(event.target.value);
  }
  const [isReviewing, setIsReviewing] = useState(false);
  function handleReviewButton() {
    setIsReviewing((reviewing) => !reviewing);
  }

  return (
    <>
      <div className="w-screen">
        <Header
          mainHeader={"The Game Place"}
          seconderyHeader={
            "Add your favorite games to your library! Hit the like button!"
          }
        />

        {games.map((game) => {
          return (
            <GameCard
              handleLike={handleLike}
              game={game}
              reviewText={reviewText}
              isReviewing={isReviewing}
              handleReviewButton={handleReviewButton}
              handleReviewText={handleReviewText}
            />
          );
        })}
      </div>
    </>
  );
}
