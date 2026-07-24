import type { TrendingMovie } from "../actions/trending-movies.interface";
import type { TmdbMovie } from "../interfaces.ts/tmdb-movie.interface";

export const toTrendingMovie = (movie: TmdbMovie): TrendingMovie => ({
  id: movie.id,
  title: movie.title,
  language: movie.original_language,
  overview: movie.overview,
  poster_url: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
  popularity: movie.popularity,
  release_date: movie.release_date,
  vote_count: movie.vote_count,
});
