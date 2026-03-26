import type { Game } from "../types/types";

const apikey = import.meta.env.VITE_API_KEY;

export const GetGames = async () => {
  const res = await fetch(`https://api.rawg.io/api/games?key=${apikey}`);
  if (!res.ok) {
    throw "api request failed";
  }
  const Response = await res.json();
  const games: Game[] = Response.results;

  return games;
};
