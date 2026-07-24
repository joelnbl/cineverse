import type { TmdbMovie } from "./tmdb-movie.interface";

export interface TmdbTrendingResponse {
  page: number;
  results: TmdbMovie[];
  total_pages: number;
  total_results: number;
}
