import { useState } from "react";
import "../app.css";
import GameCard from "../components/GameCard";
import Header from "../components/Header";
import TopBar from "../components/TopBar";
import { games } from "../data";

export default function HomePage(allGames) {
  // const [topBarLikeCount, setTopBarLikeCount] = useState(0);

  // function handleLike(id) {
  //   const newLikedGames = allGames.map((game) => {
  //     if (game.id === id) {
  //       return { ...game, isLiked: !game.isLiked };
  //     }
  //     return game;
  //   });
  //   setAllGames(newLikedGames);
  //   saveGamesToLS(newLikedGames);
  //   const likeCount = newLikedGames.reduce((count, game) => {
  //     if (game.isLiked) {
  //       return count + 1;
  //     }
  //     return count;
  //   }, 0);
  //   console.log(likeCount);
  //   setTopBarLikeCount(likeCount);
  // }
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
      <TopBar likeCount="0" />
      <div className="w-screen">
        <Header
          mainHeader={"The Game Library"}
          seconderyHeader={
            "Add your favorite games to your library! Hit the like button and the Like button"
          }
        />
        <GameCard
          handleLike={1}
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
