import GameCard from "./GameCard";
export default function GameOfTheDay({ games, handleLike }) {
  const game = games[1];
  // זמני. כאן תיכנס בחירה רנדומלית וטיימר של יום

  return (
    <div className="border-gray-500 rounded-2xl">
      <GameCard key={game.id} handleLike={handleLike} game={game} />
    </div>
  );
}
