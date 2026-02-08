import React, { useMemo } from "react";
import { motion } from "motion/react";
import { Check, X, Sparkles, ArrowRight } from "lucide-react";

type Row = {
   feat: string;
   us: string;
   them: string;
   themTone?: "ok" | "no";
};

const rows: Row[] = [
   { feat: "Deployment time", us: "8–12 weeks", them: "12–24 months", themTone: "no" },
   { feat: "User experience", us: "Modern, intuitive UI", them: "Heavier UX, longer training", themTone: "no" },
   { feat: "AI capabilities", us: "Native & predictive", them: "Add-ons / limited by module", themTone: "no" },
   { feat: "Updates", us: "Continuous delivery", them: "Major releases, longer cycles", themTone: "no" },
   { feat: "Mobile support", us: "Designed mobile-first", them: "Partial coverage by feature", themTone: "no" },
   { feat: "Pricing model", us: "Transparent per user", them: "Complex, modular licensing", themTone: "no" },
   { feat: "Support model", us: "Success-led partnership", them: "Ticket queues + partners", themTone: "no" },
];

function cn(...xs: Array<string | false | null | undefined>) {
   return xs.filter(Boolean).join(" ");
}

function Badge({
   tone,
   children,
}: {
   tone: "good" | "bad" | "neutral";
   children: React.ReactNode;
}) {
   const styles =
      tone === "good"
         ? "border-emerald-200/70 bg-emerald-50/70 text-emerald-800"
         : tone === "bad"
            ? "border-rose-200/70 bg-rose-50/70 text-rose-800"
            : "border-slate-200/70 bg-white/70 text-slate-700";

   return (
      <span className={cn("inline-flex items-center rounded-full border px-3 py-1 text-xs font-semibold", styles)}>
         {children}
      </span>
   );
}

function StatPill({ label, value }: { label: string; value: string }) {
   return (
      <div className="rounded-2xl border border-slate-200/50 bg-white/80 backdrop-blur-sm px-4 py-3 shadow-sm">
         <div className="text-xs font-medium text-slate-500">{label}</div>
         <div className="mt-0.5 text-sm font-semibold text-slate-900">{value}</div>
      </div>
   );
}

export function Why({ onNavigate }: { onNavigate: (page: any) => void }) {
   const particles = useMemo(
      () =>
         [...Array(10)].map(() => ({
            width: Math.random() * 260 + 140,
            height: Math.random() * 260 + 140,
            left: Math.random() * 100,
            top: Math.random() * 100,
            animationDelay: Math.random() * 5,
            animationDuration: Math.random() * 10 + 14,
         })),
      []
   );

   return (
      <div className="min-h-screen bg-white text-slate-900 pt-24 pb-20 overflow-x-hidden">
         {/* Ambient background */}
         <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
            <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-indigo-50/25 to-purple-50/25" />
            {particles.map((p, i) => (
               <div
                  key={i}
                  className="absolute rounded-full bg-gradient-to-r from-indigo-400/18 to-purple-400/18 blur-xl animate-float"
                  style={{
                     width: `${p.width}px`,
                     height: `${p.height}px`,
                     left: `${p.left}%`,
                     top: `${p.top}%`,
                     animationDelay: `${p.animationDelay}s`,
                     animationDuration: `${p.animationDuration}s`,
                  }}
               />
            ))}
         </div>

         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Hero */}
            <section className="relative overflow-hidden rounded-3xl border border-slate-200/50 bg-white/70 backdrop-blur-xl shadow-sm px-6 sm:px-10 py-14 mb-10">
               <div className="absolute inset-0 bg-gradient-to-br from-indigo-50/35 via-white to-purple-50/25" />
               <div className="relative z-10 text-center max-w-3xl mx-auto">
                  <div className="inline-flex items-center gap-2 rounded-full border border-slate-200/50 bg-white/80 backdrop-blur-sm px-4 py-2 text-sm text-slate-700 shadow-sm">
                     <Sparkles className="h-4 w-4 text-indigo-600" />
                     <span className="font-medium">Why Creotizant</span>
                     <span className="text-slate-400">•</span>
                     <span className="text-slate-600">A modern HCM alternative</span>
                  </div>

                  <h1 className="mt-6 text-4xl sm:text-5xl font-bold tracking-tight">
                     <span className="bg-gradient-to-r from-slate-900 via-indigo-900 to-slate-900 bg-clip-text text-transparent">
                        Compare us with legacy HCM suites
                     </span>
                  </h1>
                  <p className="mt-5 text-lg sm:text-xl text-slate-600 leading-relaxed">
                     A side-by-side look at deployment speed, usability, AI readiness, and ongoing operations.
                  </p>

                  <div className="mt-8 grid sm:grid-cols-3 gap-3 max-w-4xl mx-auto">
                     <StatPill label="Typical rollout" value="8–12 weeks" />
                     <StatPill label="Release cadence" value="Continuous" />
                     <StatPill label="Model" value="Transparent per user" />
                  </div>
               </div>
            </section>

            {/* Desktop comparison table (premium) */}
            <div className="hidden lg:block">
               <div className="overflow-hidden rounded-3xl border border-slate-200/50 bg-white/80 backdrop-blur-xl shadow-sm">
                  <div className="grid grid-cols-12 border-b border-slate-200/50">
                     <div className="col-span-4 p-6">
                        <div className="text-sm font-semibold text-slate-900">Capability</div>
                        <div className="text-xs text-slate-500 mt-1">What teams typically evaluate</div>
                     </div>
                     <div className="col-span-4 p-6 bg-indigo-50/40 border-x border-slate-200/50">
                        <div className="text-sm font-bold text-indigo-700">Creotizant HCM</div>
                        <div className="text-xs text-slate-600 mt-1">Modern workflows, fast adoption</div>
                     </div>
                     <div className="col-span-4 p-6">
                        <div className="text-sm font-semibold text-slate-600">Legacy ERPs</div>
                        <div className="text-xs text-slate-500 mt-1">SAP, Workday and similar suites</div>
                     </div>
                  </div>

                  <div className="divide-y divide-slate-200/50">
                     {rows.map((row, i) => (
                        <div key={row.feat} className={cn("grid grid-cols-12", i % 2 === 0 && "bg-slate-50/40")}>
                           <div className="col-span-4 p-6">
                              <div className="text-sm font-semibold text-slate-900">{row.feat}</div>
                           </div>

                           <div className="col-span-4 p-6 bg-indigo-50/25 border-x border-slate-200/50">
                              <div className="flex items-start gap-3">
                                 <span className="mt-0.5 inline-flex h-7 w-7 items-center justify-center rounded-full bg-emerald-50 border border-emerald-200/70">
                                    <Check className="h-4 w-4 text-emerald-600" />
                                 </span>
                                 <div>
                                    <div className="text-sm font-bold text-slate-900">{row.us}</div>
                                    <div className="text-xs text-slate-600 mt-1">Designed for adoption and day-to-day operations.</div>
                                 </div>
                              </div>
                           </div>

                           <div className="col-span-4 p-6">
                              <div className="flex items-start gap-3">
                                 <span className="mt-0.5 inline-flex h-7 w-7 items-center justify-center rounded-full bg-rose-50 border border-rose-200/70">
                                    <X className="h-4 w-4 text-rose-500" />
                                 </span>
                                 <div>
                                    <div className="text-sm font-semibold text-slate-700">{row.them}</div>
                                    <div className="text-xs text-slate-500 mt-1">Often requires more configuration and change management.</div>
                                 </div>
                              </div>
                           </div>
                        </div>
                     ))}
                  </div>

                  <div className="p-6 flex items-center justify-between gap-4">
                     <div className="flex flex-wrap gap-2">
                        <Badge tone="good">Faster time-to-value</Badge>
                        <Badge tone="neutral">Lower training overhead</Badge>
                        <Badge tone="neutral">Cleaner operations</Badge>
                     </div>

                     <button
                        onClick={() => onNavigate("demo")}
                        className="inline-flex items-center gap-2 rounded-2xl bg-indigo-600 px-5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-700 transition-colors"
                     >
                        Schedule a migration assessment <ArrowRight className="h-4 w-4" />
                     </button>
                  </div>
               </div>
            </div>

            {/* Mobile / tablet comparison cards */}
            <div className="lg:hidden space-y-5">
               {rows.map((row, idx) => (
                  <motion.div
                     key={row.feat}
                     initial={{ opacity: 0, y: 14 }}
                     whileInView={{ opacity: 1, y: 0 }}
                     viewport={{ once: true, margin: "-120px" }}
                     transition={{ duration: 0.45, delay: idx * 0.03 }}
                     className="rounded-3xl border border-slate-200/50 bg-white/80 backdrop-blur-xl shadow-sm overflow-hidden"
                  >
                     <div className="p-6 border-b border-slate-200/50">
                        <div className="text-xs font-medium text-slate-500">Capability</div>
                        <div className="mt-1 text-lg font-bold text-slate-900">{row.feat}</div>
                     </div>

                     <div className="p-6 bg-indigo-50/25 border-b border-slate-200/50">
                        <div className="flex items-center justify-between gap-3">
                           <div className="text-sm font-bold text-indigo-700">Creotizant</div>
                           <Badge tone="good">Recommended</Badge>
                        </div>
                        <div className="mt-3 flex items-start gap-3 text-slate-800">
                           <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-emerald-50 border border-emerald-200/70">
                              <Check className="h-4 w-4 text-emerald-600" />
                           </span>
                           <div className="text-sm font-semibold">{row.us}</div>
                        </div>
                     </div>

                     <div className="p-6">
                        <div className="flex items-center justify-between gap-3">
                           <div className="text-sm font-semibold text-slate-600">Legacy suites</div>
                           <Badge tone="bad">Trade-offs</Badge>
                        </div>
                        <div className="mt-3 flex items-start gap-3 text-slate-700">
                           <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-rose-50 border border-rose-200/70">
                              <X className="h-4 w-4 text-rose-500" />
                           </span>
                           <div className="text-sm">{row.them}</div>
                        </div>
                     </div>
                  </motion.div>
               ))}
            </div>

            {/* CTA */}
            <section className="mt-14">
               <div className="rounded-3xl border border-slate-200/50 bg-white/80 backdrop-blur-xl shadow-sm p-8 text-center">
                  <p className="text-lg text-slate-600 mb-6">
                     Ready to switch without disruption?
                  </p>
                  <div className="flex flex-wrap justify-center gap-3">
                     <button
                        onClick={() => onNavigate("demo")}
                        className="px-8 py-4 bg-indigo-600 text-white rounded-2xl font-bold hover:bg-indigo-700 transition-colors inline-flex items-center gap-2"
                     >
                        Schedule a migration assessment <ArrowRight className="h-5 w-5" />
                     </button>
                     <button
                        onClick={() => onNavigate("solutions")}
                        className="px-8 py-4 rounded-2xl font-bold border border-slate-200 bg-white/80 text-slate-900 hover:bg-white transition-colors"
                     >
                        Explore solutions
                     </button>
                  </div>

                  <div className="mt-6 text-xs text-slate-500">
                     We’ll review your current setup, identify quick wins, and map a phased rollout plan.
                  </div>
               </div>
            </section>
         </div>

         {/* Mobile sticky CTA */}
         <div className="lg:hidden fixed inset-x-0 bottom-0 p-3 bg-white/80 backdrop-blur-xl border-t border-slate-200/60">
            <button
               onClick={() => onNavigate("demo")}
               className="w-full rounded-2xl bg-indigo-600 text-white py-3.5 font-bold hover:bg-indigo-700 transition-colors inline-flex items-center justify-center gap-2"
            >
               Schedule assessment <ArrowRight className="h-4 w-4" />
            </button>
         </div>
      </div>
   );
}
