import { games } from "../data";
import GameInteractiveComponent from "./GameInteractiveComponent";

export default function GameComponent() {
  return (
    <div>
      {games.map((game) => {
        return (
          <div key={game.id} className="bg-gray-300 border-4 p-3 pb-10 m-2">
            <h1 className="m-1">{game.gameName}</h1>
            <p className="m-1">Released: {game.releaseDate}</p>
            <p>{game.gameDescription}</p>
            <GameInteractiveComponent />
          </div>
        );
      })}
    </div>
  );
}
