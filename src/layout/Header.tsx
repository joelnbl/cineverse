import { Search, Plus, Bell, Clapperboard } from "lucide-react";

const NAV_ITEMS = ["Movies", "TV Shows", "People", "Awards"];

export function Header() {
  return (
    <header className="sticky top-0 z-50 bg-[#0B1220]/95 backdrop-blur-md border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-10">
          <a href="/" className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-md bg-cyan-400 flex items-center justify-center text-[#0B1220] font-bold text-sm">
              <Clapperboard />
            </div>
            <span className="text-white font-bold text-lg tracking-tight">
              CineVerse
            </span>
          </a>

          <nav className="hidden md:flex items-center gap-7">
            {NAV_ITEMS.map((item, i) => (
              <a
                key={item}
                href="#"
                className={`text-sm transition-colors ${
                  i === 0
                    ? "text-white font-medium"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                {item}
              </a>
            ))}
          </nav>
        </div>

        <div className="flex items-center gap-4">
          <div className="hidden sm:flex items-center gap-2 bg-white/5 rounded-full px-4 py-2 w-64">
            <Search className="w-4 h-4 text-gray-500" />
            <input
              placeholder="Search films..."
              className="bg-transparent text-sm text-gray-300 placeholder:text-gray-500 outline-none w-full"
            />
          </div>
          <button className="text-gray-400 hover:text-white transition-colors">
            <Plus className="w-5 h-5" />
          </button>
          <button className="relative text-gray-400 hover:text-white transition-colors">
            <Bell className="w-5 h-5" />
            <span className="absolute -top-0.5 -right-0.5 w-2 h-2 rounded-full bg-amber-400" />
          </button>
          <div className="w-8 h-8 rounded-full bg-linear-to-br from-cyan-400 to-emerald-400 flex items-center justify-center text-xs font-semibold text-[#0B1220]">
            J
          </div>
        </div>
      </div>
    </header>
  );
}
