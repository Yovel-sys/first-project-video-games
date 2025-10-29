import Header from "../components/base-components/Header";
import GameCard from "../components/game-components/GameCard";

export default function MyLibrary({ games, handleLike }) {
  return (
    <>
      <div className="w-screen">
        <Header
          mainHeader="My Library"
          seconderyHeader="Games you liked will show here!"
        />
      </div>
      <div className="grid grid-cols-3 gap-4">
        {games.map((game) => {
          if (game.isLiked === true) {
            return (
              <GameCard key={game.id} handleLike={handleLike} game={game} />
            );
          }
        })}
      </div>
    </>
  );
}
