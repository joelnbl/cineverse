import { useEffect, useState } from "react";
import { getTrendingMovies } from "../actions/get-trending-movies";
import type { TrendingMovie } from "../actions/trending-movies.interface";

export const useTrendingMovies = () => {
  const [movies, setMovies] = useState<TrendingMovie[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadMovies = async () => {
      const movies = await getTrendingMovies();
      setMovies(movies);
      setLoading(false);
    };
    loadMovies();
  }, []);
  return { movies, loading };
};
