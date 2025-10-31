import { useState } from "react";
import "../app.css";
import GameCard from "../components/game-components/GameCard";
import Header from "../components/base-components/Header";
import SearchComp from "../components/base-components/SearchComp";
import gamePlaceLogo1 from "../assets/gamePlaceLogo1.png";
import GameOfTheDay from "../components/game-components/GameOfTheDay";
import GameModal from "../components/game-components/GameModal";

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

  function handleSearchText(event) {
    setSearchText(event.target.value);
  }

  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = (game) => {
    setIsModalOpen(true);
    setSelectedGame(game);
  };
  const closeModal = () => setIsModalOpen(false);
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
        <GameModal
          isOpen={isModalOpen}
          onClose={closeModal}
          game={selectedGame}
          handleLike={handleGamesLike}
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
                  openModal={openModal}
                />
              );
          })}
        </div>
      </div>
    </>
  );
}
