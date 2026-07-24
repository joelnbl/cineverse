import { LayoutGrid } from "lucide-react";

export const Hero = () => (
  <section className="border-b border-white/5">
    <div className="max-w-7xl mx-auto px-6 py-14">
      <div className="flex items-center gap-2 text-cyan-400 text-sm font-medium mb-4">
        <LayoutGrid className="w-4 h-4" />
        Popular this week
      </div>
      <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight">
        Discover your next favorite film
      </h1>
      <p className="mt-4 text-gray-400 max-w-xl leading-relaxed">
        Browse trending movies and fine-tune with intuitive filters for genre,
        score, and runtime — all in one place.
      </p>
    </div>
  </section>
);
