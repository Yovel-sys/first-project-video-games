import LikeButton from "./LikeButton";
import gameImagePlaceolder from "../assets/gameImagePlaceholder.png";
import { useState } from "react";

export default function GameCard({
  handleLike,
  game,
  className,
  openFullPage,
}) {
  return (
    <div
      id={game.id}
      className={`h-90 w-100 !bg-gray-400 !opacity-90 border-4 p-3 pb-10 m-2 rounded-2xl ${className}`}
      onClick={() => openFullPage(game)}
    >
      <div>
        <div className="flex items-start flex-grow mb-4">
          <img src={gameImagePlaceolder} alt="" className="h-25 w-20 mr-4" />
          <div>
            <h1 className="m-1">{game.gameName}</h1>
            <p className="m-1">Released: {game.releaseDate}</p>
            <p>{game.gameDescription}</p>
          </div>
        </div>
      </div>
      <LikeButton
        onLike={() => {
          handleLike(game.id);
        }}
        isLiked={game.isLiked}
      />
    </div>
  );
}
