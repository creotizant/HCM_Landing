import React, { useMemo, useState } from "react";
import { motion } from "motion/react";
import {
   FileText,
   Play,
   Download,
   ArrowRight,
   Search,
   Sparkles,
   Tag,
   Clock,
} from "lucide-react";

type ResourceType = "All" | "Whitepaper" | "Case Study" | "Webinar" | "Guide" | "Report";

type Resource = {
   id: string;
   type: Exclude<ResourceType, "All">;
   title: string;
   description: string;
   icon: React.ReactNode;
   readTime: string;
   level: "Starter" | "Advanced";
   topic: string;
   cta: string;
   route: any; // page key for onNavigate
   featured?: boolean;
};

const resources: Resource[] = [
   {
      id: "ai-hr-2026",
      type: "Whitepaper",
      title: "The State of AI in HR 2026",
      description:
         "A practical view of where AI is delivering measurable HR outcomes, what’s hype, and how teams are deploying safely.",
      icon: <FileText className="w-5 h-5" />,
      readTime: "12 min",
      level: "Advanced",
      topic: "AI & Governance",
      cta: "Read whitepaper",
      route: "demo",
      featured: true,
   },
   {
      id: "turnover-case",
      type: "Case Study",
      title: "How Acme Corp cut turnover by 30%",
      description:
         "A real rollout story: onboarding improvements, manager enablement, and retention levers that stuck.",
      icon: <FileText className="w-5 h-5" />,
      readTime: "8 min",
      level: "Starter",
      topic: "Retention",
      cta: "Read case study",
      route: "solutions",
   },
   {
      id: "uk-laws-webinar",
      type: "Webinar",
      title: "Navigating UK labour laws post-Brexit",
      description:
         "What HR teams should monitor: right-to-work, contracts, compliance, and practical guardrails for policy changes.",
      icon: <Play className="w-5 h-5" />,
      readTime: "45 min",
      level: "Starter",
      topic: "UK Compliance",
      cta: "Watch webinar",
      route: "demo",
   },
   {
      id: "workforce-planning-guide",
      type: "Guide",
      title: "The practical guide to workforce planning",
      description:
         "A step-by-step framework for headcount planning, scenario modelling, and linking plans to hiring execution.",
      icon: <Download className="w-5 h-5" />,
      readTime: "15 min",
      level: "Starter",
      topic: "Workforce Planning",
      cta: "Download guide",
      route: "solutions",
   },
   {
      id: "payroll-index",
      type: "Report",
      title: "Global payroll complexity index",
      description:
         "The hidden cost drivers of multi-country payroll and the operating model choices that reduce risk.",
      icon: <FileText className="w-5 h-5" />,
      readTime: "10 min",
      level: "Advanced",
      topic: "Payroll",
      cta: "Read report",
      route: "solutions",
   },
   {
      id: "skills-first-webinar",
      type: "Webinar",
      title: "Building a skills-first organisation",
      description:
         "How to move from job titles to skills intelligence, internal mobility, and capability-based planning.",
      icon: <Play className="w-5 h-5" />,
      readTime: "50 min",
      level: "Advanced",
      topic: "Skills",
      cta: "Watch webinar",
      route: "demo",
   },
];

function cn(...xs: Array<string | false | null | undefined>) {
   return xs.filter(Boolean).join(" ");
}

function TypePill({ active, children, onClick }: { active: boolean; children: React.ReactNode; onClick: () => void }) {
   return (
      <button
         onClick={onClick}
         className={cn(
            "rounded-full px-4 py-2 text-sm font-semibold border transition-colors",
            active
               ? "bg-indigo-600 text-white border-indigo-600"
               : "bg-white/80 text-slate-700 border-slate-200 hover:bg-white"
         )}
         type="button"
      >
         {children}
      </button>
   );
}

export function Resources({ onNavigate }: { onNavigate: (page: any) => void }) {
   const [query, setQuery] = useState("");
   const [type, setType] = useState<ResourceType>("All");

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

   const filtered = useMemo(() => {
      const q = query.trim().toLowerCase();
      return resources
         .filter((r) => (type === "All" ? true : r.type === type))
         .filter((r) => {
            if (!q) return true;
            const hay = `${r.title} ${r.description} ${r.topic} ${r.type}`.toLowerCase();
            return hay.includes(q);
         });
   }, [query, type]);

   const featured = resources.find((r) => r.featured);

   return (
      <div className="min-h-screen bg-slate-50 text-slate-900 pt-24 pb-20 overflow-x-hidden">
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
            <section className="relative overflow-hidden rounded-3xl border border-slate-200/50 bg-white/70 backdrop-blur-xl shadow-sm px-6 sm:px-10 py-12 mb-10">
               <div className="absolute inset-0 bg-gradient-to-br from-indigo-50/30 via-white to-purple-50/20" />
               <div className="relative z-10 text-center max-w-3xl mx-auto">
                  <div className="inline-flex items-center gap-2 rounded-full border border-slate-200/50 bg-white/80 backdrop-blur-sm px-4 py-2 text-sm text-slate-700 shadow-sm">
                     <Sparkles className="h-4 w-4 text-indigo-600" />
                     <span className="font-medium">Resources</span>
                     <span className="text-slate-400">•</span>
                     <span className="text-slate-600">Guides, research, and tools</span>
                  </div>

                  <h1 className="mt-6 text-4xl sm:text-5xl font-bold tracking-tight">
                     <span className="bg-gradient-to-r from-slate-900 via-indigo-900 to-slate-900 bg-clip-text text-transparent">
                        Resources & insights
                     </span>
                  </h1>
                  <p className="mt-5 text-lg sm:text-xl text-slate-600 leading-relaxed">
                     Practical content for HR leaders: planning, compliance, hiring, and performance.
                  </p>

                  {/* Search */}
                  <div className="mt-7 flex items-center gap-3 rounded-2xl border border-slate-200/50 bg-white/80 px-4 py-3 shadow-sm max-w-xl mx-auto">
                     <Search className="h-5 w-5 text-slate-400" />
                     <input
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        placeholder="Search resources by topic, title, or type…"
                        className="w-full bg-transparent outline-none text-sm text-slate-900 placeholder:text-slate-400"
                     />
                  </div>

                  {/* Filters */}
                  <div className="mt-5 flex flex-wrap justify-center gap-2">
                     {(["All", "Whitepaper", "Case Study", "Webinar", "Guide", "Report"] as ResourceType[]).map((t) => (
                        <TypePill key={t} active={type === t} onClick={() => setType(t)}>
                           {t}
                        </TypePill>
                     ))}
                  </div>
               </div>
            </section>

            {/* Featured */}
            {featured && (
               <motion.section
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-120px" }}
                  transition={{ duration: 0.5 }}
                  className="mb-10"
               >
                  <div className="relative overflow-hidden rounded-3xl border border-slate-200/50 bg-white/80 backdrop-blur-xl shadow-sm">
                     <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 via-purple-500/10 to-pink-500/10" />
                     <div className="relative p-8 sm:p-10 grid lg:grid-cols-12 gap-8 items-center">
                        <div className="lg:col-span-7">
                           <div className="flex items-center gap-2">
                              <span className="inline-flex items-center gap-2 rounded-full border border-slate-200/50 bg-white/80 px-3 py-1.5 text-xs font-semibold text-indigo-700">
                                 <Tag className="h-4 w-4" />
                                 Featured {featured.type}
                              </span>
                              <span className="text-xs text-slate-500 inline-flex items-center gap-1">
                                 <Clock className="h-4 w-4" /> {featured.readTime}
                              </span>
                           </div>

                           <h2 className="mt-4 text-2xl sm:text-3xl font-bold text-slate-900">
                              {featured.title}
                           </h2>
                           <p className="mt-3 text-slate-600 leading-relaxed">
                              {featured.description}
                           </p>

                           <div className="mt-6 flex flex-wrap gap-2">
                              <span className="rounded-full border border-slate-200/60 bg-white/70 px-3 py-1.5 text-xs font-semibold text-slate-700">
                                 Topic: {featured.topic}
                              </span>
                              <span className="rounded-full border border-slate-200/60 bg-white/70 px-3 py-1.5 text-xs font-semibold text-slate-700">
                                 Level: {featured.level}
                              </span>
                           </div>

                           <button
                              onClick={() => onNavigate(featured.route)}
                              className="mt-7 inline-flex items-center gap-2 rounded-2xl bg-indigo-600 px-5 py-3 text-sm font-semibold text-white hover:bg-indigo-700 transition-colors"
                           >
                              {featured.cta} <ArrowRight className="h-4 w-4" />
                           </button>
                        </div>

                        <div className="lg:col-span-5">
                           <div className="rounded-3xl border border-slate-200/50 bg-white/70 p-6 shadow-sm">
                              <div className="text-xs font-medium text-slate-500 mb-3">Inside this resource</div>
                              <div className="space-y-3">
                                 {[
                                    "Where AI creates measurable HR value today",
                                    "Governance patterns for regulated teams",
                                    "Practical rollout plan for 90 days",
                                    "Metrics to track adoption and ROI",
                                 ].map((x) => (
                                    <div key={x} className="rounded-2xl border border-slate-200/50 bg-white/80 px-4 py-3 text-sm text-slate-700">
                                       {x}
                                    </div>
                                 ))}
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </motion.section>
            )}

            {/* Grid */}
            <section>
               <div className="flex items-end justify-between gap-4 mb-6">
                  <div>
                     <h3 className="text-xl font-bold text-slate-900">Latest</h3>
                     <p className="text-sm text-slate-600">Browse curated content by topic and format.</p>
                  </div>
                  <div className="text-sm text-slate-500">
                     Showing <span className="font-semibold text-slate-700">{filtered.length}</span> resources
                  </div>
               </div>

               <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filtered
                     .filter((r) => !r.featured)
                     .map((res, i) => (
                        <motion.button
                           key={res.id}
                           initial={{ opacity: 0, y: 16 }}
                           whileInView={{ opacity: 1, y: 0 }}
                           viewport={{ once: true, margin: "-120px" }}
                           transition={{ duration: 0.45, delay: i * 0.03 }}
                           onClick={() => onNavigate(res.route)}
                           className="text-left group relative overflow-hidden rounded-3xl border border-slate-200/50 bg-white/80 backdrop-blur-xl shadow-sm hover:shadow-xl transition-all p-6"
                           type="button"
                        >
                           <div className="absolute -inset-10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-gradient-to-r from-indigo-500/10 via-purple-500/10 to-pink-500/10 blur-3xl" />

                           <div className="relative">
                              <div className="flex items-center justify-between gap-3">
                                 <div className="inline-flex items-center gap-2 text-xs font-semibold text-indigo-700 uppercase tracking-wide">
                                    <span className="inline-flex h-9 w-9 items-center justify-center rounded-2xl bg-indigo-50 border border-indigo-100">
                                       {res.icon}
                                    </span>
                                    <span>{res.type}</span>
                                 </div>

                                 <span className="text-xs text-slate-500 inline-flex items-center gap-1">
                                    <Clock className="h-4 w-4" /> {res.readTime}
                                 </span>
                              </div>

                              <h4 className="mt-4 text-lg font-bold text-slate-900 group-hover:text-indigo-700 transition-colors">
                                 {res.title}
                              </h4>
                              <p className="mt-2 text-slate-600 text-sm leading-relaxed line-clamp-3">
                                 {res.description}
                              </p>

                              <div className="mt-5 flex flex-wrap gap-2">
                                 <span className="rounded-full border border-slate-200/60 bg-white/70 px-3 py-1 text-xs font-semibold text-slate-700">
                                    {res.topic}
                                 </span>
                                 <span className="rounded-full border border-slate-200/60 bg-white/70 px-3 py-1 text-xs font-semibold text-slate-700">
                                    {res.level}
                                 </span>
                              </div>

                              <div className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-indigo-700">
                                 {res.cta} <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                              </div>
                           </div>
                        </motion.button>
                     ))}
               </div>
            </section>

            {/* Bottom CTA */}
            <section className="mt-12">
               <div className="rounded-3xl border border-slate-200/50 bg-white/80 backdrop-blur-xl shadow-sm p-8 text-center">
                  <p className="text-lg text-slate-700 font-semibold">Want help applying this to your org?</p>
                  <p className="mt-2 text-slate-600">
                     We’ll map your goals to a rollout plan and show what “good” looks like in your workflows.
                  </p>
                  <div className="mt-6 flex flex-wrap justify-center gap-3">
                     <button
                        onClick={() => onNavigate("demo")}
                        className="inline-flex items-center gap-2 rounded-2xl bg-indigo-600 px-6 py-3 text-sm font-semibold text-white hover:bg-indigo-700 transition-colors"
                        type="button"
                     >
                        Request a demo <ArrowRight className="h-4 w-4" />
                     </button>
                     <button
                        onClick={() => onNavigate("solutions")}
                        className="inline-flex items-center gap-2 rounded-2xl border border-slate-200 bg-white/80 px-6 py-3 text-sm font-semibold text-slate-900 hover:bg-white transition-colors"
                        type="button"
                     >
                        Explore solutions
                     </button>
                  </div>
               </div>
            </section>
         </div>
      </div>
   );
}
