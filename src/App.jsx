import { useState } from "react";
import "./app.css";
import GameComponent from "./components/GameComponent";
import { Header } from "./components/Header";
import TopBar from "./components/TopBar";

export default function App() {
  // const [likedGames, setLikedGames] = useState(0);
  const [isliked, setIsLiked] = useState(false);
  function handleLike() {
    setIsLiked((like) => !like);
    // setLikedGames(likedGames + 1);
    // console.log(likedGames);
  }
  return (
    <>
      <TopBar />
      <Header />
      <div className="h-24 w-15 bg-red-500">library?</div>
      <GameComponent handleLike={handleLike} isliked={isliked} />
    </>
  );
}
