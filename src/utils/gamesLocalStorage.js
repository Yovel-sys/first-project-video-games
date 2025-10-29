import { games } from "./data";

export const initializeGames = () => {
  const gamesFromLS = localStorage.getItem("allMyGames");
  if (gamesFromLS) {
    return JSON.parse(gamesFromLS);
  }
  return games;
};
export const saveGames = (gm) => {
  localStorage.setItem("allMyGames", JSON.stringify(gm));
};
