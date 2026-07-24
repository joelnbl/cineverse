const GENRES = [
  "Action", "Adventure", "Animation", "Comedy", "Crime", "Documentary",
  "Drama", "Family", "Fantasy", "History", "Horror", "Music",
  "Mystery", "Romance", "Science Fiction", "Thriller", "War", "Western",
];

export function MovieFilters() {
  return (
    <aside className="w-72 shrink-0 bg-[#131C2E] rounded-2xl p-6 h-fit">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-white font-semibold">Filters</h2>
        <button className="text-xs text-gray-400 hover:text-white flex items-center gap-1">
          ↺ Reset
        </button>
      </div>

      <div className="mb-6">
        <p className="text-[11px] font-semibold text-gray-500 tracking-wide mb-3">
          SHOW ME
        </p>
        <div className="flex bg-white/5 rounded-lg p-1">
          {["Everything", "Haven't Seen", "Have Seen"].map((label, i) => (
            <button
              key={label}
              className={`flex-1 text-xs py-2 rounded-md transition-colors ${
                i === 0
                  ? "bg-cyan-400 text-[#0B1220] font-semibold"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              {label}
            </button>
          ))}
        </div>
      </div>

      <div className="mb-6">
        <p className="text-[11px] font-semibold text-gray-500 tracking-wide mb-3">
          GENRES
        </p>
        <div className="flex flex-wrap gap-2">
          {GENRES.map((genre) => (
            <button
              key={genre}
              className="text-xs text-gray-300 bg-white/5 hover:bg-white/10 px-3 py-1.5 rounded-full transition-colors"
            >
              {genre}
            </button>
          ))}
        </div>
      </div>

      <div>
        <div className="flex items-center justify-between mb-2">
          <p className="text-[11px] font-semibold text-gray-500 tracking-wide">
            MIN SCORE
          </p>
          <span className="text-xs text-cyan-400">0%</span>
        </div>
        <input type="range" className="w-full accent-cyan-400" />
      </div>
    </aside>
  );
}