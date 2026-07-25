import { MovieCard } from "./MovieCard";
import type { TrendingMovie } from "../actions/trending-movies.interface";
import { useInfiniteScroll } from "../hooks/useInfiniteScroll";

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
  const observerRef = useInfiniteScroll({
    hasMore,
    isLoading,
    onLoadMore: fetchNextPage,
  });

  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {movies?.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>

      <div ref={observerRef} className="py-8 flex justify-center items-center">
        {isLoading && <span>Cargando más películas...</span>}
        {!hasMore && movies.length > 0 && (
          <p>Has llegado al final del catálogo.</p>
        )}
      </div>
    </div>
  );
};
