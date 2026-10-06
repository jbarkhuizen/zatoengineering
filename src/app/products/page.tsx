export default function ProductsPage() {
    return (
        <div className="industrial-grid min-h-screen relative overflow-hidden py-16">
            
            {/* Background ambient light mesh */}
            <div className="absolute top-[5%] left-[-10%] w-[600px] h-[600px] bg-zato-gold/5 rounded-full blur-[160px] pointer-events-none" />
            <div className="absolute bottom-[10%] right-[-5%] w-[500px] bg-slate-800/25 rounded-full blur-[140px] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 flex flex-col">
                
                {/* Page Header */}
                <div className="max-w-3xl space-y-4">
                    <span className="text-zato-gold font-mono text-xs font-bold tracking-widest uppercase block">
                        Capabilities
                    </span>
                    <h1 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tight font-display">
                        Products & Services
                    </h1>
                    <p className="text-slate-400 font-light max-w-2xl">
                        High-precision engineering workflows tailored for demanding industrial and mining applications. We manage tolerances down to micro-levels to maximise asset lifecyle efficiency.
                    </p>
                </div>

                {/* Dedicated Spacer Block */}
                <div className="h-24 w-full" />

                {/* Dynamic Capabilities Layout Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 space-y-4">

                    {/* Services Card 01 */}
                    <div className="p-8 bg-white/[0.04] border border-white/[0.03] rounded-xl space-y-6 hover:border-zato-gold/40 hover:bg-white/[0.02] transition-all duration-300 group transform hover:-translate-y-1 shadow-2xl flex flex-col justify-between">
                        <div className="space-y-4">
                            <div className="flex justify-between items-center border-b border-white/[0.4] pb-3">
                                <span className="text-zato-gold font-mono text-[10px] tracking-widest uppercase font-bold">
                                    Division 01
                                </span>
                                <span className="text-slate-500 font-mono text-xs bg-white/[0.02] px-2 py-0.5 rounded border border-white/[0.05]">
                                    &plusmn;0.01mm
                                </span>
                            </div>
                            <h3 className="text-white text-2xl font-bold uppercase tracking-wide font-display">
                                Precision Grinding
                            </h3>
                            <p className="text-slate-400 text-sm leading-relaxed font-light">
                                Our facility is custom-equipped for specialized universal precision grinding on a wide range of increibly hard substrate profiles. We reliably process components to extremely tight geometric parameters.
                            </p>

                            {/* Material Capabilities List */}
                            <div className="pt-2 space-y-1.5 font-mono text-[11px] text-slate-400">
                                <div className="flex items-center gap-2"><span className="text-zato-gold">&bull;</span> Sillicon Carbide </div>
                                <div className="flex items-center gap-2"><span className="text-zato-gold">&bull;</span> Tungsten Carbide </div>
                                <div className="flex items-center gap-2"><span className="text-zato-gold">&bull;</span> Alumina Oxide Ceramics </div>
                            </div>
                        </div>

                        <div className="pt-6 border-t border-white/[0.4] font-mono text-[10px] text-slate-500 tracking-wider">
                            CORE METRIC: HIGH HARDNESS MATERIALS
                        </div>
                    </div>

                    {/* Service Card 2 */}
                    <div className="p-8 bg-white/[0.04] border border-white/[0.03] rounded-xl space-y-6 hover:border-zato-gold/40 hover:bg-white/[0.02] transition-all duration-300 group transform hover:-translate-y-1 shadow-2xl flex flex-col justify-between">
                        <div className="space-y-4">
                            <div className="flex justify-between items-center border-b border-white/[0.4] pb-3">
                                <span className="text-zato-gold font-mono text-[10px] tracking-widest uppercase font-bold">
                                    Division 2
                                </span>
                                <span className="text-slate-500 font-mono text-xs bg-white/[0.02] px-2 py-0.5 rounded border border-white/[0.05]">
                                    IN_HOUSE
                                </span>
                            </div>
                            <h3 className="text-white text-2xl font-bold uppercase tracking-wide font-display">
                                Hard-Chrome Plating
                            </h3>
                            <p className="text-slate-400 text-sm leading-relaxed font-light">
                                Our Hard-Chroming plant was engineered entirely in-house to produce dense, wear-resistant electroplated deposits. This protective layer provides elite anti-friction properties designed to survive abrasive engineering settings.
                            </p>

                            <div className="pt-2 space-y-1.5 font-mono text-[11px] text-slate-400">
                                <div className="flex items-center gap-2"><span className="text-zato-gold">&bull;</span> Anti-Friction Coating </div>
                                <div className="flex items-center gap-2"><span className="text-zato-gold">&bull;</span> Corrosion Protection </div>
                                <div className="flex items-center gap-2"><span className="text-zato-gold">&bull;</span> Tailored Layer Thickness </div>
                            </div>
                        </div>

                        <div className="pt-6 border-t border-white/[0.4] font-mono text-[10px] text-slate-500 tracking-wider">
                            INFRASTRUCTURE: IN-HOUSE ELECTROPLATING
                        </div>
                    </div>

                    {/* Service Card 3 */}
                    <div className="p-8 bg-white/[0.04] border border-white/[0.03] rounded-xl space-y-6 hover:border-zato-gold/40 hover:bg-white/[0.02] transition-all duration-300 group transform hover:-translate-y-1 shadow-2xl flex-flex-col justify--between">
                        <div className="space-y-4">
                            <div className="flex justify-between items-center border-b border-white/[0.4] pb-3">
                                <span className="text-zato-gold font-mono text-[10px] tracking-widest uppercase font-bold">
                                    Division 3
                                </span>
                                <span className="text-slate-500 font-mono text-xs bg-white/[0.02] px-2 py-0.5 rounded border border-white/[0.05]">
                                    MINING SPECS
                                </span>
                            </div>
                            <h3 className="text-white text-2xl font-bold uppercase tracking-wide font-display">
                                Rockdrill Reconditioning
                            </h3>
                            <p className="text-slate-400 text-sm leading-relaxed font-light">
                                We specialize directly in the overhaul, engineering assesment, component repair, and comprehensive reconditioning of heavy rock drill cylinders to full industrial operational status.
                            </p>

                            <div className="pt-2 space-y-1.5 font-mono text-[11px] text-slate-400">
                                <div className="flex items-center gap-2"><span className="text-zato-gold">&bull;</span> Cylinder Assembly Repair </div>
                                <div className="flex items-center gap-2"><span className="text-zato-gold">&bull;</span> Precision Barrel Re-honing </div>
                                <div className="flex items-center gap-2"><span className="text-zato-gold">&bull;</span> Direct legacy Technology Share </div>
                            </div>
                        </div>

                        <div className="pt-6 border-t border-white/[0.4] font-mono text-[10px] text-slate-500 tracking-wider">
                            TARGET INDUSTRY: GEOLOGICAL & HEAVY MINING
                        </div>
                    </div>

                </div>

            </div>
        </div>
    );
}