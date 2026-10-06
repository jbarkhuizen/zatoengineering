import HeroCanvas from "../components/HeroCanvas";
import Link from "next/link";

export default function HomePage() {
  return (
    <div>
      {/* Hero Section Layout */}
      <section className="relative max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 items-center pt-10 pb-16 gap-12">
        <div className="space-y-6 z-10">
          <span className="text-zato-gold font-bold tracking-widest uppercase text-xs block border-l-2 border-zato-gold pl-3">
            Precision Grinding & Hard Chrome Specialists
          </span>
          <h1 className="text-5xl md:text-6xl font-black tracking-tight leading-none text-white uppercase">
            60 Years of Industrial <span className="text-transparent bg-clip-text bg-gradient-to-r from-zato-gold to-yellow-600">Universal Grinding</span>
          </h1>
          <p className="text-slate-400 text-base md:text-lg max-w-xl leading-relaxed">
            Registered in 2010 to service the heavy mining industry, Zato Engineering integrates decades of elite asset, skill, and technology heritage transferred directly from Renier Precision Grinding.
          </p>
          <div className="pt-4 flex flex-wrap gap-4">
            <Link href="/products" className="bg-zato-gold hover:bg-yellow-600 text-slate-950 font-bold px-8 py-3.5 rounded text-sm uppercase tracking-wider transition-colors">
              Our Capabilities
            </Link>
            <Link href="/contact" className="border border-slate-800 hover:border-slate-600 text-slate-300 font-medium px-8 py-3.5 rounded text-sm uppercase tracking-wider transition-colors">
              CONTACT US
            </Link>
          </div>
        </div>
        
        {/* Interactive 3D Metal Model Window */}
        <div className="w-full h-full bg-slate-900/50 border border-slate-900 rounded-xl overflow-hidden shadow-2xl backdrop-blur-sm">
          <HeroCanvas />
        </div>
      </section>

      <hr className="border-slate-900 max-w-7xl mx-auto" />

      {/* Specialty Grid Section - Extracted from your core copy */}
      <section className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Card 1 */}
        <div className="p-8 bg-white/[0.01] border border-white/[0.03] rounded-xl space-y-4 hover:border-zato-gold/30 hover:bg-white/[0.02] transition-all duration-300 group transform hover:-translate-y-1 shadow-2xl">
          <div className="flex justify-between items-center border-b border-white/[0.04] pb-2">
            <span className="text-zato-gold font-mono text-[14px] tracking-widest uppercase font-bold">01 / Mechanical Limits</span>
          </div>
          <h3 className="text-white text-xl font-bold uppercase tracking-wide font-display">Precision Grinding</h3>
          <p className="text-slate-400 text-sm leading-relaxed font-sans font-light">
            Precision grinding and engineering services that boast a tolerance of 0.001mm, Perfection to the micron for critical components.
          </p>
        </div>
        {/* Card 2 */}
        <div className="p-8 bg-white/[0.01] border border-white/[0.03] rounded-xl space-y-4 hover:border-zato-gold/30 hover:bg-white/[0.02] transition-all duration-300 group transform hover:-translate-y-1 shadow-2xl">
          <div className="flex justify-between items-center border-b border-white/[0.04] pb-2">
            <span className="text-zato-gold font-mono text-[14px] tracking-widest uppercase font-bold">02 / Special Services</span>
          </div>
          <h3 className="text-white text-xl font-bold uppercase tracking-wide font-display">Advanced Materials</h3>
          <p className="text-slate-400 text-sm leading-relaxed font-sans font-light">
            Engineered surfacing optimized for hyper-hard components including Silicon Carbide, Tungsten Carbide, and Alumina Oxide.
          </p>
        </div>
        {/* Card 3 */}
        <div className="p-8 bg-white/[0.01] border border-white/[0.03] rounded-xl space-y-4 hover:border-zato-gold/30 hover:bg-white/[0.02] transition-all duration-300 group transform hover:-translate-y-1 shadow-2xl">
          <div className="flex justify-between items-center border-b border-white/[0.04] pg-2">
            <span className="text-zato-gold font-mono text-[14px] tracking-widest uppercase font-bold">03 / Core Focus</span>
          </div>
          <h3 className="text-white text-xl font-bold uppercase tracking-wide font-display">Rockdrill Reconditioning</h3>
          <p className="text-slate-400 text-sm leading-relaxed font-sans font-light">
            Complete tactical repair and structural overhaul of mining cylinders paired with specialized hard-chrome electroplating setups.
          </p>
        </div>

      </section>
    </div>
  );
}