import { useEffect, useState, useCallback, useRef } from "react";

import { getTrendingMovies } from "../actions/get-trending-movies";

import type { TrendingMovie } from "../actions/trending-movies.interface";

export const useTrendingMovies = () => {
  const [movies, setMovies] = useState<TrendingMovie[]>([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);

  const isLoadingRef = useRef(false);

  const loadMovies = useCallback(async (pageToFetch: number) => {
    if (isLoadingRef.current) return;

    isLoadingRef.current = true;
    setLoading(true);

    try {
      const { movies: newMovies, totalPages } =
        await getTrendingMovies(pageToFetch);

      setMovies((prev) =>
        pageToFetch === 1 ? newMovies : [...prev, ...newMovies],
      );

      setHasMore(pageToFetch < totalPages);
    } catch (error) {
      console.error("Error al cargar películas:", error);
    } finally {
      isLoadingRef.current = false;
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    loadMovies(page);
  }, [loadMovies]);

  const fetchNextPage = useCallback(() => {
    if (!isLoadingRef.current && hasMore) {
      setPage((prevPage) => {
        const nextPage = prevPage + 1;
        loadMovies(nextPage);
        return nextPage;
      });
    }
  }, [hasMore, loadMovies]);

  return {
    movies,
    loading,
    hasMore,
    fetchNextPage,
  };
};
