import { useState } from "react";
import "../app.css";
import GameCard from "../components/GameCard";
import Header from "../components/Header";
import SearchComp from "../components/SearchComp";
import gamePlaceLogo1 from "../assets/gamePlaceLogo1.png";
import GameOfTheDay from "../components/GameOfTheDay";
import GameFullPage from "../components/GameFullPage";

export default function HomePage({ games, handleLike, onReviewSubmit }) {
  const [searchText, setSearchText] = useState("");
  const [selectedGame, setSelectedGame] = useState(null);

  const [reviewText, setReviewText] = useState("");
  function handleReviewText(event) {
    setReviewText(event.target.value);
  }

  function handleReviewSubmitRefresh(id, text) {
    const updatedGame = onReviewSubmit(id, text);
    setReviewText("");
    if (updatedGame) {
      setSelectedGame(updatedGame);
    }
  }

  const [isReviewing, setIsReviewing] = useState(false);
  function handleReviewButton() {
    setIsReviewing((reviewing) => !reviewing);
  }

  function handleSearchText(event) {
    setSearchText(event.target.value);
  }

  const [isFullPageOpen, setIsFullPageOpen] = useState(false);
  const openFullPage = (game) => {
    setIsFullPageOpen(true);
    setSelectedGame(game);
  };
  const closeFullPage = () => setIsFullPageOpen(false);
  function handleGamesLike(id) {
    handleLike(id);
    if (selectedGame && selectedGame.id === id) {
      setSelectedGame((prevSelectedGame) => ({
        ...prevSelectedGame,
        isLiked: !prevSelectedGame.isLiked,
      }));
    }
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
        <GameFullPage
          isOpen={isFullPageOpen}
          onClose={closeFullPage}
          game={selectedGame}
          handleLike={handleGamesLike}
          games={games}
          onReviewSubmit={handleReviewSubmitRefresh}
          reviewText={reviewText}
          handleReviewText={handleReviewText}
        />

        <SearchComp
          handleSearchText={handleSearchText}
          searchText={searchText}
        />
        <GameOfTheDay games={games} />
        <div className="flex flex-wrap justify-center p-3">
          {games.map((game) => {
            const lowerCaseGameName = game.gameName.toLowerCase();
            if (lowerCaseGameName.includes(searchText.toLowerCase()))
              return (
                <GameCard
                  className="w-full sm:w-[calc(45%-1rem)] lg:w-[calc(30%-1rem)]"
                  key={game.id}
                  handleLike={handleGamesLike}
                  game={game}
                  openFullPage={openFullPage}
                />
              );
          })}
        </div>
      </div>
    </>
  );
}
