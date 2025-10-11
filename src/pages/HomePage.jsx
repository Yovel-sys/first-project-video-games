import { useState } from "react";
import "../app.css";
import GameCard from "../components/GameCard";
import Header from "../components/Header";
import SearchComp from "../components/SearchComp";
import gamePlaceLogo1 from "../assets/gamePlaceLogo1.png";

export default function HomePage({ games, handleLike }) {
  // const [shuffledGames] = useState(() =>
  //   games.slice().sort(() => Math.random() - 0.5)
  // );

  const [reviewText, setReviewText] = useState("");
  function handleReviewText(event) {
    setReviewText(event.target.value);
  }
  const [isReviewing, setIsReviewing] = useState(false);
  function handleReviewButton() {
    setIsReviewing((reviewing) => !reviewing);
  }
  const [searchText, setSearchText] = useState("");
  function handleSearchText(event) {
    setSearchText(event.target.value);
    console.log(searchText);
  }

  return (
    <>
      <div className="w-screen">
        <Header
          mainHeader={"The Game Place"}
          seconderyHeader={
            "Add your favorite games to your library! Hit the like button!"
          }
          image={gamePlaceLogo1}
        />

        <SearchComp
          handleSearchText={handleSearchText}
          searchText={searchText}
        />
        <div className="grid grid-cols-3 gap-4">
          {games.map((game) => {
            //{shuffledGames.map((game) => {
            const lowerCaseGameName = game.gameName.toLowerCase();
            if (lowerCaseGameName.includes(searchText.toLowerCase()))
              return (
                <GameCard
                  key={game.id}
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
      </div>
    </>
  );
}
