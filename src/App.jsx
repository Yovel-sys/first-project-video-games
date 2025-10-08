import { MyEmojis } from "./components/myEmojis";
import HomePage from "./pages/HomePage";
import ExamplePage from "./pages/ExamplePage";
import ItemPage from "./pages/ItemPage";
import { BrowserRouter, Route, Routes, Link } from "react-router";
import Page404 from "./pages/404Page";
import MyLibrary from "./pages/MyLibrary";
import { games } from "./data";
import { useState } from "react";

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

export default function App() {
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
  return (
    <>
      <BrowserRouter>
        <div className="fixed top-0 w-full z-10 text-white text-xl bg-gray-900 opacity-80">
          <Link className="ml-4 mr-4" to={"/"}>
            Home Page
          </Link>
          |
          <Link className="ml-4 mr-4" to={"/library"}>
            My Library
          </Link>
        </div>
        <Routes>
          <Route path="/" element={<HomePage allGames={allGames} />} />
          <Route path="/library" element={<MyLibrary />} />

          <Route path="/item/:id" element={<ItemPage />} />
          <Route path="/example" element={<ExamplePage />} />
          <Route path="*" element={<Page404 />} />
          <Route path="/emojis" element={<MyEmojis />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
