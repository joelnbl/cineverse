import { Header } from "./layout/Header";
import { Hero } from "./layout/Hero";
import { Footer } from "./layout/Footer";
import { TrendingMovieList } from "./movies/components/TrendingMovieList";
import { useTrendingMovies } from "./movies/hooks/useTrendingMovies";
import { MovieFilters } from "./movies/components/MovieFilters";

function App() {
  const { movies, loading } = useTrendingMovies();

  return (
    <div className="min-h-screen bg-[#0B1220] flex flex-col">
      <Header />
      <Hero />

      <main className="max-w-7xl mx-auto px-6 py-10 flex gap-8 flex-1 w-full">
        <MovieFilters />

        <div className="flex-1">
          <div className="flex items-center justify-between mb-6">
            <p className="text-gray-400 text-sm">
              <span className="text-white font-semibold">
                {movies?.length ?? 0}
              </span>{" "}
              films found
            </p>
          </div>

          {loading ? (
            <div className="text-center py-20 text-gray-500">Cargando…</div>
          ) : (
            <TrendingMovieList movies={movies ?? []} />
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default App;
