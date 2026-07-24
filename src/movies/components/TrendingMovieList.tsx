import { useRef, useEffect, useCallback } from "react";
import { MovieCard } from "./MovieCard";
import type { TrendingMovie } from "../actions/trending-movies.interface";

interface Props {
  movies: TrendingMovie[];
  fetchNextPage: () => void;
  hasMore: boolean;
  isLoading: boolean;
}

export const TrendingMovieList = ({
  movies,
  fetchNextPage,
  hasMore,
  isLoading,
}: Props) => {
  const observerRef = useRef<HTMLDivElement | null>(null);

  const handleObserver = useCallback(
    (entries: IntersectionObserverEntry[]) => {
      const [entry] = entries;
      if (entry.isIntersecting && hasMore && !isLoading) {
        fetchNextPage();
      }
    },
    [fetchNextPage, hasMore, isLoading],
  );

  useEffect(() => {
    const element = observerRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(handleObserver, {
      root: null,
      rootMargin: "300px",
      threshold: 0,
    });

    observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, [handleObserver]);

  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {movies?.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>

      <div ref={observerRef} className="py-8 flex justify-center items-center">
        {isLoading && (
          <div className="flex items-center gap-2 text-gray-400">
            <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-indigo-500" />
            <span>Cargando más películas...</span>
          </div>
        )}

        {!hasMore && movies.length > 0 && (
          <p className="text-gray-500 text-sm">
            Has llegado al final del catálogo.
          </p>
        )}
      </div>
    </div>
  );
};
