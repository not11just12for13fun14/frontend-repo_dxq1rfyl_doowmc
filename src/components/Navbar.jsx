import { Menu, Handshake } from "lucide-react";

export default function Navbar() {
  return (
    <header className="w-full bg-[#0b1b3b]/90 backdrop-blur sticky top-0 z-40">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center">
            <span className="text-white font-extrabold tracking-wide">S</span>
          </div>
          <span className="text-white font-semibold text-lg">SEDECO</span>
        </div>
        <nav className="hidden sm:flex items-center gap-3">
          <a href="#partnership" className="inline-flex items-center gap-2 bg-white text-[#0b1b3b] px-4 py-2 rounded-full text-sm font-semibold shadow hover:shadow-md transition">
            <Handshake size={18} />
            Partenariat
          </a>
        </nav>
        <button className="sm:hidden text-white/80" aria-label="Menu">
          <Menu />
        </button>
      </div>
    </header>
  );
}
