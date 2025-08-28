import { Rocket, Star } from 'lucide-react';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full">
      <div className="backdrop-blur-md bg-black/40 border-b border-white/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <a href="#" className="flex items-center gap-2 group">
            <div className="relative">
              <div className="absolute inset-0 blur-md rounded-full bg-gradient-to-tr from-fuchsia-500 via-cyan-400 to-indigo-500 opacity-60 group-hover:opacity-80 transition" />
              <Rocket className="relative z-10 w-6 h-6 text-white" />
            </div>
            <span className="text-white font-semibold tracking-wide">Nebula Voyages</span>
          </a>
          <nav className="hidden md:flex items-center gap-8 text-sm text-white/80">
            <a href="#programs" className="hover:text-white transition">Programs</a>
            <a href="#pricing" className="hover:text-white transition">Pricing</a>
            <a href="#about" className="hover:text-white transition">About</a>
            <a href="#contact" className="hover:text-white transition">Contact</a>
          </nav>
          <button className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-lg border border-white/10 transition">
            <Star className="w-4 h-4" />
            Book Now
          </button>
        </div>
      </div>
    </header>
  );
}
