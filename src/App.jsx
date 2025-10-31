import HomePage from "./pages/HomePage";
import Page404 from "./pages/404Page";
import MyLibrary from "./pages/MyLibrary";
import { useState } from "react";
import { BrowserRouter, Route, Routes, Link } from "react-router";
import { initializeGames, saveGames } from "./utils/gamesLocalStorage";

export default function App() {
  const [allGames, setAllGames] = useState(initializeGames());

  const likeCount = allGames.reduce(
    (count, game) => (game.isLiked ? count + 1 : count),
    0
  );

  function handleLikeWithCount(id) {
    const newLikedGames = allGames.map((game) => {
      if (game.id === id) {
        return { ...game, isLiked: !game.isLiked };
      }
      return game;
    });
    setAllGames(newLikedGames);
    saveGames(newLikedGames);
  }

  function handleAddReview(id, reviewText) {
    if (!reviewText.trim()) return;
    let updatedGame = null;
    const newGamesWithReviews = allGames.map((game) => {
      if (game.id === id) {
        const updatedReviews = [...game.gameReviews, reviewText.trim()];
        updatedGame = { ...game, gameReviews: updatedReviews };
        return updatedGame;
      }
      return game;
    });
    setAllGames(newGamesWithReviews);
    saveGames(newGamesWithReviews);
    return updatedGame;
  }

  return (
    <>
      <BrowserRouter>
        <div className="fixed top-0 w-full z-10 text-white text-xl bg-gray-900 opacity-80">
          <Link className="ml-4 mr-4" to={"/"}>
            Home Page
          </Link>
          <Link className="ml-4 mr-4" to={"/library"}>
            My Library ({likeCount})
          </Link>
        </div>
        <Routes>
          <Route
            path="/"
            element={
              <HomePage
                games={allGames}
                handleLike={handleLikeWithCount}
                onReviewSubmit={handleAddReview}
              />
            }
          />
          <Route
            path="/library"
            element={
              <MyLibrary games={allGames} handleLike={handleLikeWithCount} />
            }
          />

          <Route path="*" element={<Page404 />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
