import { Rocket, Shield, Star } from 'lucide-react';

function Tier({ title, price, description, perks, cta, highlight }) {
  return (
    <div className={`relative rounded-2xl p-[1px] ${highlight ? 'bg-gradient-to-br from-fuchsia-500 via-cyan-400 to-indigo-500' : 'bg-white/10'} `}>
      <div className="rounded-2xl h-full bg-black p-6 sm:p-8">
        <div className="flex items-center justify-between">
          <h3 className="text-xl font-semibold text-white">{title}</h3>
          {highlight ? (
            <span className="text-[10px] uppercase tracking-widest bg-white/10 border border-white/10 text-white px-2 py-1 rounded">Popular</span>
          ) : (
            <span className="text-white/40 text-sm">{price.includes('/')} </span>
          )}
        </div>
        <div className="mt-3 flex items-baseline gap-2">
          <span className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-fuchsia-400 via-cyan-300 to-indigo-400">{price}</span>
        </div>
        <p className="mt-3 text-white/70 text-sm">{description}</p>
        <ul className="mt-6 space-y-3 text-sm text-white/80">
          {perks.map((p, i) => (
            <li key={i} className="flex items-start gap-3">
              <Star className="w-4 h-4 mt-0.5 text-cyan-300" />
              <span>{p}</span>
            </li>
          ))}
        </ul>
        <button className={`mt-8 w-full rounded-xl px-5 py-3 font-medium transition ${
          highlight
            ? 'bg-white text-black hover:bg-white/90'
            : 'bg-white/10 border border-white/10 text-white hover:bg-white/15'
        }`}>
          {cta}
        </button>
      </div>
    </div>
  );
}

export default function Pricing() {
  return (
    <section id="pricing" className="relative py-20 sm:py-28">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(60%_50%_at_50%_0%,rgba(163,94,255,0.25),transparent_60%)]" />
      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-3 py-1 text-xs text-white/80 mb-4">
            <Shield className="w-3.5 h-3.5" />
            Transparent, all-inclusive fares
          </div>
          <h2 className="text-3xl sm:text-5xl font-semibold">Choose your voyage</h2>
          <p className="mt-3 text-white/70">
            Every ticket includes training, bespoke suits, and lifetime alumni access. Financing plans available.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <Tier
            title="Suborbital Hop"
            price="$79,000"
            description="Reach the edge of space with minutes of weightlessness and panoramic views."
            perks={[
              '3-day preflight training',
              'Window seat guaranteed',
              'Personal flight footage in 8K',
              'Carbon-neutral offset included',
            ]}
            cta="Reserve Seat"
          />

          <Tier
            title="Orbital Weekend"
            price="$299,000"
            description="Two nights in low Earth orbit aboard our luxury capsule with chef-crafted meals."
            perks={[
              '6-day astronaut orientation',
              'Private sleeping berth',
              'Dedicated mission specialist',
              'Starlink+ comms package',
            ]}
            cta="Apply Now"
            highlight
          />

          <Tier
            title="Lunar Flyby"
            price="$690,000"
            description="A once-in-a-lifetime lunar slingshot with live Earthrise and deep-space comms."
            perks={[
              'Elite training cohort',
              'Custom-fitted smart suit',
              'Priority mission selection',
              'Exclusive gala + lifetime access',
            ]}
            cta="Join Waitlist"
          />
        </div>

        <div id="programs" className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <div className="flex items-center gap-2 text-white/90"><Rocket className="w-4 h-4 text-fuchsia-400" /> Training</div>
            <p className="mt-2 text-white/70">Human-centered training designed by veteran astronauts. VR sims, centrifuge, and microgravity flights included.</p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <div className="flex items-center gap-2 text-white/90"><Rocket className="w-4 h-4 text-cyan-300" /> Safety</div>
            <p className="mt-2 text-white/70">Triple-redundant systems, escape tower, and real-time telemetry monitored by mission control 24/7.</p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <div className="flex items-center gap-2 text-white/90"><Rocket className="w-4 h-4 text-indigo-300" /> Comfort</div>
            <p className="mt-2 text-white/70">Pressure-managed cabins, adaptive seating, and cinematic windows for an awe-inspiring, comfortable journey.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
