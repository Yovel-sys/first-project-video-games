import { useState } from "react";
import "../app.css";
import GameComponent from "../components/GameComponent";
import { Header } from "../components/Header";
import TopBar from "../components/TopBar";
import { games } from "../data";
import NavBarComp from "../components/NavBarComp";

const initialAllGAmes = () => {
  const gamesFromLS = localStorage.getItem("allMyGames");
  if (gamesFromLS) {
    return JSON.parse(gamesFromLS);
  }
  return games;
};
const saveGamesToLS = (gm) => {
  localStorage.setItem("allMyGames", JSON.stringify(gm));
};

export default function HomePage() {
  const [topBarLikeCount, setTopBarLikeCount] = useState(0);

  const [allGames, setAllGames] = useState(initialAllGAmes());
  function handleLike(id) {
    const newLikedGames = allGames.map((game) => {
      if (game.id === id) {
        return { ...game, isLiked: !game.isLiked };
      }
      return game;
    });
    setAllGames(newLikedGames);
    saveGamesToLS(newLikedGames);
    const likeCount = newLikedGames.reduce((count, game) => {
      if (game.isLiked) {
        return count + 1;
      }
      return count;
    }, 0);
    console.log(likeCount);
    setTopBarLikeCount(likeCount);
  }
  const [reviewText, setReviewText] = useState("");
  function handleReviewText(event) {
    setReviewText(event.target.value);
  }
  const [isReviewing, setIsReviewing] = useState(false);
  function handleReviewButton() {
    setIsReviewing((reviewing) => !reviewing);
  }

  return (
    <div className="w-screen">
      <NavBarComp />
      <TopBar likeCount={topBarLikeCount} />
      <Header />
      <div className="h-24 w-15 bg-red-500">library?</div>
      <GameComponent
        handleLike={handleLike}
        games={allGames}
        reviewText={reviewText}
        isReviewing={isReviewing}
        handleReviewButton={handleReviewButton}
        handleReviewText={handleReviewText}
      />
    </div>
  );
}
