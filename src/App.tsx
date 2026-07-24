import { Header } from "./layout/Header";
import { Hero } from "./layout/Hero";
import { Footer } from "./layout/Footer";
import { TrendingMovieList } from "./movies/components/TrendingMovieList";
import { useTrendingMovies } from "./movies/hooks/useTrendingMovies";

function App() {
  const { movies, loading, hasMore, fetchNextPage } = useTrendingMovies();

  const isInitialLoading = loading && movies.length === 0;

  return (
    <div className="min-h-screen bg-[#0B1220] flex flex-col">
      <Header />
      <Hero />

      <main className="max-w-7xl mx-auto px-6 py-10 flex gap-8 flex-1 w-full">
        <div className="flex-1">
          <div className="flex items-center justify-between mb-6">
            <p className="text-gray-400 text-sm">
              <span className="text-white font-semibold">
                {movies?.length ?? 0}
              </span>{" "}
              films found
            </p>
          </div>

          {isInitialLoading ? (
            <div className="flex justify-center items-center py-20 text-gray-400">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-indigo-500 mr-3" />
              <span>Cargando catálogo...</span>
            </div>
          ) : (
            <TrendingMovieList
              movies={movies}
              fetchNextPage={fetchNextPage}
              hasMore={hasMore}
              isLoading={loading}
            />
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default App;
