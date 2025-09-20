import { games } from "../data";
import GameInteractiveComponent from "./GameInteractiveComponent";
import gameImagePlaceolder from "../assets/gameImagePlaceholder.png";

export default function GameComponent() {
  return (
    <div>
      {games.map((game) => {
        return (
          <div
            key={game.id}
            className="bg-gray-300 opacity-70 border-4 p-3 pb-10 m-2"
          >
            <div className="flex items-center">
              <img
                src={gameImagePlaceolder}
                alt=""
                className="h-25 w-20 mr-4"
              />
              <div>
                <h1 className="m-1">{game.gameName}</h1>
                <p className="m-1">Released: {game.releaseDate}</p>
                <p>{game.gameDescription}</p>
              </div>
            </div>

            <GameInteractiveComponent />
          </div>
        );
      })}
    </div>
  );
}
