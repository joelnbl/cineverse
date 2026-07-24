import { MovieCard } from "./MovieCard";
import type { TrendingMovie } from "../actions/trending-movies.interface";

interface Props {
  movies: TrendingMovie[];
}

export const TrendingMovieList = ({ movies }: Props) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 p-6">
      {movies?.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
};
