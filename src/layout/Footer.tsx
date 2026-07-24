const FOOTER_LINKS = {
  Explore: ["Movies", "TV Shows", "People", "Awards"],
  Company: ["About", "Careers", "Press"],
  Legal: ["Terms", "Privacy", "Cookies"],
};

export function Footer() {
  return (
    <footer className="border-t border-white/5 mt-16">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-7 h-7 rounded-md bg-cyan-400 flex items-center justify-center text-[#0B1220] font-bold text-sm">
                ▦
              </div>
              <span className="text-white font-bold text-lg tracking-tight">
                CineVerse
              </span>
            </div>
            <p className="text-sm text-gray-500 leading-relaxed">
              Discover, track, and rate every film worth watching.
            </p>
          </div>

          {Object.entries(FOOTER_LINKS).map(([section, links]) => (
            <div key={section}>
              <p className="text-white text-sm font-semibold mb-3">{section}</p>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-gray-500 hover:text-cyan-400 transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-10 pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-600">
            © {new Date().getFullYear()} CineVerse. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            {["Twitter", "Instagram", "Letterboxd"].map((social) => (
              <a
                key={social}
                href="#"
                className="text-xs text-gray-500 hover:text-cyan-400 transition-colors"
              >
                {social}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
