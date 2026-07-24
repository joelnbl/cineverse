import { toTrendingMovie } from "../adapters/ trending-movies.adapter";
import { tmdbApi } from "../api/TMDB.api";
import type { TmdbTrendingResponse } from "../interfaces.ts/tmdb-trending.response";
import type { TrendingMovie } from "./trending-movies.interface";

export const getTrendingMovies = async (): Promise<TrendingMovie[]> => {
  const { data } = await tmdbApi<TmdbTrendingResponse>("3/trending/movie/day");

  return data.results.map(toTrendingMovie);
};
