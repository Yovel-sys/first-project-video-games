import { useState } from "react";
import "../app.css";
import GamesCards from "../components/GamesCards";
import Header from "../components/Header";

export default function HomePage({ allGames, handleLike }) {
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
          mainHeader={"The Game Library"}
          seconderyHeader={
            "Add your favorite games to your library! Hit the like button and the Like button"
          }
        />
        <GamesCards
          handleLike={handleLike}
          games={allGames}
          reviewText={reviewText}
          isReviewing={isReviewing}
          handleReviewButton={handleReviewButton}
          handleReviewText={handleReviewText}
        />
      </div>
    </>
  );
}
