import { Bookmark } from "lucide-react";
import { Card } from "../../shared/components/Card";
import type { TrendingMovie } from "../actions/trending-movies.interface";

interface MovieCardProps {
  movie: TrendingMovie;
}

export const MovieCard = ({ movie }: MovieCardProps) => {
  return (
    <Card>
      <div className="relative aspect-2/3 overflow-hidden bg-white/5">
        <img
          className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
          src={movie.poster_url}
          alt={movie.title}
        />
        <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        <div className="absolute top-3 left-3 flex items-center gap-1 bg-black/60 backdrop-blur-md rounded-full px-2.5 py-1">
          <span className="text-cyan-400 text-xs">★</span>
          <span className="text-xs font-semibold text-white">
            {movie.vote_count}
          </span>
        </div>

        <button className="absolute cursor-pointer top-3 right-3 w-7 h-7 rounded-full bg-black/60 backdrop-blur-md flex items-center justify-center text-white/80 hover:text-cyan-400 transition-colors">
          <Bookmark className="w-3.5 h-3.5" />
        </button>
      </div>

      <div className="p-5">
        <h3 className="text-[17px] font-semibold text-white tracking-tight leading-snug truncate">
          {movie.title}
        </h3>
        <p className="mt-1.5 text-[14px] text-gray-500 leading-relaxed line-clamp-2">
          {movie.overview}
        </p>
        <div className="mt-4 flex items-center gap-3 text-[13px] text-gray-500">
          <span>
            {new Date(movie.release_date).toLocaleDateString("es-ES", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </span>
        </div>
      </div>
    </Card>
  );
};
