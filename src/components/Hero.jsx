import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative w-full min-h-[88vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/7m4PRZ7kg6K1jPfF/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/40 via-black/40 to-black" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 sm:py-32 text-center">
        <div className="mx-auto max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-3 py-1 text-xs text-white/80 mb-5">
            <span className="inline-block h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
            Seats open for Q4 launch window
          </div>
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-semibold leading-tight tracking-tight">
            Explore the Cosmos at a Human Price
          </h1>
          <p className="mt-5 text-white/80 text-base sm:text-lg md:text-xl">
            Premium suborbital and orbital experiences designed for comfort, safety, and awe. Transparent pricing, unforgettable voyages.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
            <a href="#pricing" className="pointer-events-auto inline-flex items-center justify-center rounded-lg bg-gradient-to-r from-fuchsia-500 via-cyan-400 to-indigo-500 px-6 py-3 text-black font-medium shadow-[0_0_30px_rgba(99,102,241,0.35)]">
              View Pricing
            </a>
            <a href="#programs" className="pointer-events-auto inline-flex items-center justify-center rounded-lg border border-white/20 bg-white/10 px-6 py-3 text-white/90 hover:bg-white/15 transition">
              Discover Programs
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
