import React, { useMemo } from "react";
import { motion } from "motion/react";
import {
  ArrowRight,
  Building2,
  Computer,
  HardHat,
  Scale,
  Sparkles,
  Stethoscope,
  ShoppingBag,
  CheckCircle2,
} from "lucide-react";
import { ImageWithFallback } from "@/app/components/figma/ImageWithFallback";

type Industry = {
  name: string;
  icon: any;
  gradient: string;
  desc: string;
  highlights: string[];
  imageSrc: string;
  imageAlt: string;
  whatYouGet: string[];
  outcomes: { label: string; value: string }[];
};

const industries: Industry[] = [
  {
    name: "Healthcare",
    icon: Stethoscope,
    gradient: "from-blue-500 to-cyan-500",
    desc: "Manage complex shift patterns and ensure compliance for clinical staff.",
    highlights: ["Shift scheduling", "Credential tracking", "Compliance reporting"],
    imageSrc:
      "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?auto=format&fit=crop&w=1600&q=70",
    imageAlt: "Healthcare team in a clinical environment",
    whatYouGet: [
      "Role-based rostering for wards and departments",
      "Credential expiry alerts with audit-ready logs",
      "Policy controls for breaks, hours, and coverage",
    ],
    outcomes: [
      { label: "Coverage", value: "Optimised rota gaps" },
      { label: "Compliance", value: "Audit-ready records" },
      { label: "Ops", value: "Faster scheduling" },
    ],
  },
  {
    name: "Technology",
    icon: Computer,
    gradient: "from-purple-500 to-pink-500",
    desc: "Attract top engineering talent and retain them with clear career paths.",
    highlights: ["Hiring velocity", "Skills intelligence", "Career paths"],
    imageSrc:
      "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1600&q=70",
    imageAlt: "Team collaboration in a modern tech office",
    whatYouGet: [
      "Skills mapping across teams and roles",
      "Structured progression frameworks and leveling",
      "Performance cadence with continuous feedback",
    ],
    outcomes: [
      { label: "Hiring", value: "Shorter time-to-fill" },
      { label: "Skills", value: "Clear capability view" },
      { label: "Retention", value: "Stronger career paths" },
    ],
  },
  {
    name: "Finance",
    icon: Building2,
    gradient: "from-emerald-500 to-teal-500",
    desc: "Secure, compliant HR for highly regulated financial institutions.",
    highlights: ["Audit trails", "Role-based access", "Policy automation"],
    imageSrc:
      "https://images.unsplash.com/photo-1550565118-3a14e8d0386f?auto=format&fit=crop&w=1600&q=70",
    imageAlt: "Modern finance office building interior",
    whatYouGet: [
      "Granular permissions and approvals by policy",
      "Automated records with timestamped changes",
      "Compliance workflows aligned to internal controls",
    ],
    outcomes: [
      { label: "Security", value: "Controlled access" },
      { label: "Audit", value: "Full traceability" },
      { label: "Policy", value: "Less manual admin" },
    ],
  },
  {
    name: "Retail",
    icon: ShoppingBag,
    gradient: "from-orange-500 to-red-500",
    desc: "Scale seasonal workforce and streamline onboarding for thousands.",
    highlights: ["High-volume hiring", "Fast onboarding", "Manager self-serve"],
    imageSrc:
      "https://images.unsplash.com/photo-1556740738-b6a63e27c4df?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    imageAlt: "Retail store team preparing inventory",
    whatYouGet: [
      "High-volume recruitment pipelines",
      "Template onboarding for stores and regions",
      "Manager self-serve for rotas and approvals",
    ],
    outcomes: [
      { label: "Onboarding", value: "Faster store readiness" },
      { label: "Hiring", value: "Seasonal scaling" },
      { label: "Managers", value: "Less back-and-forth" },
    ],
  },
  {
    name: "Manufacturing",
    icon: HardHat,
    gradient: "from-sky-500 to-blue-600",
    desc: "Safety tracking, union compliance, and plant-level analytics.",
    highlights: ["Safety & incidents", "Union compliance", "Plant analytics"],
    imageSrc:
      "https://images.unsplash.com/photo-1768796372362-05c256e61d8c?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    imageAlt: "Manufacturing floor with safety equipment",
    whatYouGet: [
      "Incident reporting and safety training records",
      "Shift and overtime rules aligned to agreements",
      "Plant dashboards for capacity and attendance",
    ],
    outcomes: [
      { label: "Safety", value: "Cleaner reporting" },
      { label: "Compliance", value: "Union-aligned rules" },
      { label: "Plants", value: "Sharper visibility" },
    ],
  },
  {
    name: "Professional Services",
    icon: Scale,
    gradient: "from-indigo-500 to-cyan-500",
    desc: "Project-based time tracking and billable utilization reporting.",
    highlights: ["Utilization", "Time tracking", "Performance reviews"],
    imageSrc:
      "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1600&q=70",
    imageAlt: "Professional services meeting in a boardroom",
    whatYouGet: [
      "Utilization views by team, role, and client",
      "Timesheets with approval routing",
      "Performance reviews tied to delivery outcomes",
    ],
    outcomes: [
      { label: "Utilisation", value: "More billable time" },
      { label: "Delivery", value: "Cleaner resourcing" },
      { label: "Reviews", value: "Better outcomes" },
    ],
  },
];

function cn(...xs: Array<string | false | null | undefined>) {
  return xs.filter(Boolean).join(" ");
}

export function Industries({ onNavigate }: { onNavigate: (page: any) => void }) {
  const particles = useMemo(
    () =>
      [...Array(12)].map(() => ({
        width: Math.random() * 260 + 120,
        height: Math.random() * 260 + 120,
        left: Math.random() * 100,
        top: Math.random() * 100,
        animationDelay: Math.random() * 5,
        animationDuration: Math.random() * 10 + 12,
      })),
    []
  );

  return (
    <div className="min-h-screen bg-white text-slate-900 pt-24 pb-20 overflow-x-hidden">
      {/* Ambient background */}
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50/30 to-purple-50/30" />
        {particles.map((p, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-gradient-to-r from-blue-400/20 to-purple-400/20 blur-xl animate-float"
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
        <section className="relative overflow-hidden rounded-3xl border border-slate-200/50 bg-white/70 backdrop-blur-xl shadow-sm px-6 sm:px-10 py-14 mb-20">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50/40 via-purple-50/30 to-pink-50/40" />
          <div className="relative z-10 text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 rounded-full border border-slate-200/50 bg-white/80 backdrop-blur-sm px-4 py-2 text-sm text-slate-700 shadow-sm">
              <Sparkles className="h-4 w-4 text-purple-600" />
              <span className="font-medium">Industries</span>
              <span className="text-slate-400">•</span>
              <span className="text-slate-600">Tailored workflows, familiar UX</span>
            </div>

            <h1 className="mt-6 text-4xl sm:text-5xl font-bold tracking-tight">
              <span className="bg-gradient-to-r from-slate-900 via-blue-900 to-purple-900 bg-clip-text text-transparent">
                Tailored for your industry
              </span>
            </h1>
            <p className="mt-5 text-lg sm:text-xl text-slate-600 leading-relaxed">
              Creotizant adapts to the unique regulatory and operational needs of your sector.
            </p>
          </div>
        </section>

        <div className="space-y-16">
          {industries.map((ind, idx) => {
            const IndustryIcon = ind.icon;
            const isReversed = idx % 2 === 1;

            return (
              <motion.section
                key={ind.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-120px" }}
                transition={{ duration: 0.6 }}
              >
                {/* Unified Card Container */}
                <div className="relative group">
                  {/* Glow effect */}
                  <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 blur-3xl opacity-60 group-hover:opacity-100 transition-opacity duration-700" />

                  {/* Main Card */}
                  <div className="relative rounded-3xl border border-slate-200/50 bg-white/90 backdrop-blur-sm shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden">
                    <div className={cn(
                      "flex flex-col lg:flex-row",
                      isReversed && "lg:flex-row-reverse"
                    )}>

                      {/* Image Side */}
                      <div className="flex-1 relative">
                        <div className="relative h-[280px] sm:h-[400px] lg:h-full lg:min-h-[500px]">
                          <ImageWithFallback
                            src={ind.imageSrc}
                            alt={ind.imageAlt}
                            className="w-full h-full object-cover"
                          />
                          {/* Gradient overlay */}
                          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-slate-900/10 to-transparent" />

                          {/* Industry badge on image */}
                          <div className="absolute top-6 left-6">
                            <div className={cn(
                              "h-14 w-14 rounded-2xl bg-gradient-to-br flex items-center justify-center shadow-lg",
                              ind.gradient
                            )}>
                              <IndustryIcon className="h-7 w-7 text-white" />
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Content Side */}
                      <div className="flex-1 p-8 lg:p-10 flex flex-col justify-center">
                        {/* Header */}
                        <div>
                          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-3">
                            {ind.name}
                          </h2>
                          <p className="text-lg text-slate-600 leading-relaxed">{ind.desc}</p>
                        </div>

                        {/* Highlights */}
                        <div className="mt-6 flex flex-wrap gap-2">
                          {ind.highlights.map((x) => (
                            <div
                              key={x}
                              className="inline-flex items-center gap-2 rounded-full border border-slate-200/80 bg-slate-50/80 px-4 py-2 text-sm text-slate-700"
                            >
                              <span className="h-2 w-2 rounded-full bg-emerald-500" />
                              {x}
                            </div>
                          ))}
                        </div>

                        {/* What you get */}
                        <div className="mt-8">
                          <h3 className="text-sm font-semibold text-slate-900 uppercase tracking-wider mb-4">
                            What You Get
                          </h3>
                          <ul className="space-y-3">
                            {ind.whatYouGet.map((item) => (
                              <li key={item} className="flex gap-3 text-slate-700">
                                <CheckCircle2 className="h-5 w-5 text-emerald-600 mt-0.5 shrink-0" />
                                <span className="text-base">{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Outcomes */}
                        <div className="mt-8">
                          <h3 className="text-sm font-semibold text-slate-900 uppercase tracking-wider mb-4">
                            Key Outcomes
                          </h3>
                          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                            {ind.outcomes.map((o) => (
                              <div
                                key={o.label}
                                className="rounded-xl border border-slate-200/80 bg-slate-50/50 px-4 py-3"
                              >
                                <div className="text-xs font-medium text-slate-500 uppercase tracking-wide">{o.label}</div>
                                <div className="text-sm font-semibold text-slate-900 mt-1">
                                  {o.value}
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* CTAs */}
                        <div className="mt-8 flex flex-wrap items-center gap-4 pt-6 border-t border-slate-200">
                          <button
                            onClick={() => onNavigate("solutions")}
                            className="group inline-flex items-center gap-2 px-5 py-2.5 bg-slate-900 text-white text-sm font-semibold rounded-lg hover:bg-slate-800 transition-all hover:shadow-lg hover:-translate-y-0.5"
                          >
                            Explore {ind.name} Solutions
                            <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                          </button>
                          <button
                            onClick={() => onNavigate("demo")}
                            className="text-sm font-semibold text-indigo-600 hover:text-indigo-800 transition-colors px-4 py-2"
                          >
                            Request a Demo
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.section>
            );
          })}
        </div>
      </div>
    </div>
  );
}
