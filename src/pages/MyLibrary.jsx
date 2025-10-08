import Header from "../components/Header";
import GameCard from "../components/GameCard";

export default function MyLibrary({ games }) {
  return (
    <>
      <div className="w-screen">
        <Header
          mainHeader="My Library"
          seconderyHeader="Games you liked will show here!"
        />
      </div>
      {games.map((game) => {
        if (game.isLiked === true) {
          return <GameCard game={game} />;
        }
      })}
    </>
  );
}
