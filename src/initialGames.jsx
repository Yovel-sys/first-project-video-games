import { games } from "./data";

export const initialAllGAmes = () => {
  const gamesFromLS = localStorage.getItem("allMyGames");
  if (gamesFromLS) {
    return JSON.parse(gamesFromLS);
  }
  return games;
};
export const saveGamesToLS = (gm) => {
  localStorage.setItem("allMyGames", JSON.stringify(gm));
};
