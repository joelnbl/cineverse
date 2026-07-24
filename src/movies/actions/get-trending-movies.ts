import { toTrendingMovie } from "../adapters/ trending-movies.adapter";
import { tmdbApi } from "../api/TMDB.api";

import type { TmdbTrendingResponse } from "../interfaces.ts/tmdb-trending.response";
import type { TrendingMovie } from "./trending-movies.interface";

interface TrendingMoviesResponse {
  movies: TrendingMovie[];
  totalPages: number;
}

export const getTrendingMovies = async (
  page: number = 1,
): Promise<TrendingMoviesResponse> => {
  const { data } = await tmdbApi.get<TmdbTrendingResponse>(
    "/trending/movie/day",
    {
      params: {
        page,
      },
    },
  );

  return {
    movies: data.results.map(toTrendingMovie),
    totalPages: data.total_pages,
  };
};
