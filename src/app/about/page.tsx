export default function AboutPage() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-16 space-y-20">
      
      {/* 1. HERO HEADER: Heritage & Foundation */}
      <section className="max-w-4xl space-y-6">
        <span className="text-zato-gold font-bold tracking-widest uppercase text-xs block border-l-2 border-zato-gold pl-3">
          Corporate Background & Technical Heritage
        </span>
        <h1 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tight leading-none">
          60 Years of Shared <span className="text-transparent bg-clip-text bg-gradient-to-r from-zato-gold to-yellow-600">Engineering Mastery</span>
        </h1>
        <p className="text-slate-300 leading-relaxed text-lg pt-2">
          Zato Engineering was established in 2010 with a singular, vital directive: to pioneer high-tier reconditioning and repair workflows for heavy rock drill cylinders within the mining sector. To achieve the absolute precision required for these extreme high-impact environments, Zato absorbed the complete operational heritage, physical assets, specialized machining skills, and advanced electroplating technologies of Renier Precision Grinding. This strategic inheritance allows us to back our modern operations with over six decades of industry-tested engineering mastery.
        </p>
      </section>

      {/* 2. ACCURACY ACCENT: The 0.01mm Tolerance Callout */}
      <section className="w-full bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 border border-slate-900 p-8 rounded-xl flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="space-y-1 text-center md:text-left">
          <h4 className="text-white font-bold uppercase tracking-wide text-lg">Definitive Precision Limits</h4>
          <p className="text-slate-400 text-sm max-w-xl">
            Where standard machine shops reach their mechanical limitations, our climate-monitored equipment holds continuous accuracy.
          </p>
        </div>
        <div className="text-center md:text-right">
          <div className="text-5xl font-black tracking-tight text-white font-mono">
            ±0.01<span className="text-zato-gold">mm</span>
          </div>
          <div className="text-[10px] uppercase tracking-widest text-slate-500 font-bold font-mono">
            Verified Deviation Boundary
          </div>
        </div>
      </section>

      {/* 3. CAPABILITY MATRIX: Facility & Materials */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        <div className="space-y-4">
          <h2 className="text-2xl font-black text-white uppercase tracking-tight">
            Universal Grinding & Material Compatibility
          </h2>
          <p className="text-slate-400 text-sm leading-relaxed">
            Our facility is custom-designed and strictly monitored to perform universal grinding on a comprehensive spectrum of specialized, hyper-hard compounds and substrate materials. We routinely process components that present severe machining challenges to standard engineering shops.
          </p>
          <p className="text-slate-400 text-sm leading-relaxed">
            By utilizing specialized diamond-wheel matrices and variable-speed rotative heads, we guarantee geometric roundness and parallel consistency across all hard-faced elements.
          </p>
        </div>

        {/* Dynamic Material Spec Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="p-5 bg-slate-900/40 border border-slate-900 rounded-lg space-y-2">
            <div className="text-zato-gold font-mono text-xs font-bold">[ SILICON CARBIDE ]</div>
            <p className="text-slate-300 text-xs leading-relaxed">High-wear composite surfacing optimized for intense friction and extreme thermal industrial environments.</p>
          </div>
          <div className="p-5 bg-slate-900/40 border border-slate-900 rounded-lg space-y-2">
            <div className="text-zato-gold font-mono text-xs font-bold">[ TUNGSTEN CARBIDE ]</div>
            <p className="text-slate-300 text-xs leading-relaxed">Hyper-dense surface profiles treated with custom wheel speeds to prevent micro-fracturing during grinding.</p>
          </div>
          <div className="p-5 bg-slate-900/40 border border-slate-900 rounded-lg space-y-2">
            <div className="text-zato-gold font-mono text-xs font-bold">[ ALUMINA OXIDE ]</div>
            <p className="text-slate-300 text-xs leading-relaxed">Specialized industrial structural ceramic faces requiring high-level technical precision processing.</p>
          </div>
          <div className="p-5 bg-slate-900/40 border border-slate-900 rounded-lg space-y-2">
            <div className="text-zato-gold font-mono text-xs font-bold">[ HARD CHROME ALLOYS ]</div>
            <p className="text-slate-300 text-xs leading-relaxed">Electroplated protective boundaries engineered to withstand abrasive geological wear and corrosive chemistry.</p>
          </div>
        </div>
      </section>

      {/* 4. THE COMPETITIVE EDGE: Purpose-Built Chroming Plant */}
      <section className="p-8 md:p-12 bg-slate-900/20 border border-slate-900 rounded-xl grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
        <div className="lg:col-span-2 space-y-4">
          <span className="text-zato-gold font-mono text-xs tracking-wider uppercase block">In-House Infrastructure Advantage</span>
          <h3 className="text-2xl font-bold text-white uppercase tracking-tight">The Purpose-Built Hard Chroming Plant</h3>
          <p className="text-slate-400 text-sm leading-relaxed">
            Unlike standard outsourced plating services, Zato Engineering boasts an in-house hard chroming plant designed and calibrated specifically to meet the rigorous physical demands of rock drill cylinder reconditioning. 
          </p>
          <p className="text-slate-400 text-sm leading-relaxed">
            By controlling both the precision pre-grinding, chemical electroplating, and final mirror-finish post-grinding processes entirely under one roof, we guarantee absolute molecular bond integrity and completely uniform layer thickness. This single-source quality loop dramatically extends the live operational field life of your mining components.
          </p>
        </div>
        <div className="bg-slate-950 p-6 rounded-lg border border-slate-800 space-y-3">
          <h4 className="text-white text-xs font-bold tracking-widest uppercase font-mono border-b border-slate-800 pb-2">Plant Specifications</h4>
          <ul className="text-xs text-slate-400 space-y-2 font-mono">
            <li className="flex justify-between"><span>[✓] Process Control:</span> <span className="text-slate-200">100% In-House</span></li>
            <li className="flex justify-between"><span>[✓] Primary Focus:</span> <span className="text-slate-200">Rockdrill Cylinders</span></li>
            <li className="flex justify-between"><span>[✓] Bond Matrix:</span> <span className="text-slate-200">High-Density Chrome</span></li>
            <li className="flex justify-between"><span>[✓] Quality Check:</span> <span className="text-slate-200">Ultrasonic Tested</span></li>
          </ul>
        </div>
      </section>

    </div>
  );
}