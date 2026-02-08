import {
  ArrowRight,
  CheckCircle2,
  Users,
  ShieldCheck,
  Zap,
  BarChart3,
  Calendar,
  Award,
  Sparkles,
  ChevronRight,
  Play,
  Database,
  Lock,
  LifeBuoy,
  Cpu,
  Layers,
  SlidersHorizontal,
  Globe,
} from "lucide-react";
import React, { useMemo, useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "motion/react";
import heroImage from "@/app/assets/industries/1.png";
import logo from "@/app/assets/CreotizantMG-Gradient.png";
import { pricingPlans } from "@/app/pages/Pricing";

interface LandingPageProps {
  onGetStarted: () => void;
  onNavigate: (page: string) => void;
}

/**
 * Creotizant HCM Suite — Premium Modern Landing Page
 * - Modern animations, hover effects, and micro-interactions
 * - Premium color schemes with gradients and glassmorphism
 * - Scroll-triggered animations
 * - Loading states and transitions
 */
export function LandingPage({ onGetStarted, onNavigate }: LandingPageProps) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 800);
    return () => clearTimeout(timer);
  }, []);

  const data = useMemo(
    () => ({
      topBadge: "Creotizant HCM Suite",
      headline: "HR, recruiting, and workforce intelligence in one platform.",
      subhead:
        "Run hiring, people ops, compliance, payroll, and performance from a single source of truth. Add CreotizAI to move faster with better decisions.",
      primaryCta: "Start Free Trial",
      secondaryCta: "Watch Product Tour",
      kpisTopic: "At a glance",
      kpis: [
        { value: "16+", label: "Core modules", icon: Layers, color: "from-blue-500 to-cyan-500" },
        { value: "99.9%", label: "Uptime SLA", icon: ShieldCheck, color: "from-emerald-500 to-teal-500" },
        { value: "< 2 min", label: "Average setup", icon: Zap, color: "from-purple-500 to-pink-500" },
        { value: "24/7", label: "Support", icon: LifeBuoy, color: "from-orange-500 to-red-500" },
      ],
      logoCloud: ["Acme Corp", "GlobalTech", "Innovate Inc", "FutureSoft", "Nexus Group", "Horizon Ltd"],

      modules: [
        {
          group: "Plan & Structure",
          items: [
            {
              icon: Layers,
              title: "Workforce Planning",
              description: "Headcount plans, org modeling, skills forecasts, scenario runs.",
              tag: "Scenario planning",
              gradient: "from-blue-500 to-indigo-600",
              productId: "ai-workforce-planner",
            },
            {
              icon: Cpu,
              title: "Skills Intelligence",
              description: "Skills graph, gaps by team, role readiness, learning suggestions.",
              tag: "Skills graph",
              gradient: "from-purple-500 to-pink-600",
              productId: "skill-forge",
            },
            {
              icon: BarChart3,
              title: "People Analytics",
              description: "Dashboards, trends, cohorts, retention signals, custom reports.",
              tag: "Insights",
              gradient: "from-cyan-500 to-teal-600",
              productId: "people-intelligence-cloud",
            },
          ],
        },
        {
          group: "Hire & Onboard",
          items: [
            {
              icon: Users,
              title: "Recruitment Suite",
              description: "Jobs, applicants, screening, interviews, offer workflows, onboarding.",
              tag: "ATS + workflows",
              gradient: "from-emerald-500 to-green-600",
              productId: "recruit-flow",
            },
            {
              icon: SlidersHorizontal,
              title: "Hiring Automation",
              description: "Routing rules, approvals, scorecards, templates, and alerts.",
              tag: "Automation",
              gradient: "from-orange-500 to-amber-600",
              productId: "hirely-ai",
            },
            {
              icon: Calendar,
              title: "Interview Scheduling",
              description: "Availability, panels, reminders, feedback capture, decision logs.",
              tag: "InterviewIQ",
              gradient: "from-violet-500 to-purple-600",
              productId: "interview-iq",
            },
          ],
        },
        {
          group: "Run HR Operations",
          items: [
            {
              icon: Award,
              title: "Performance Management",
              description: "Goals, reviews, feedback, calibration, and growth plans.",
              tag: "Continuous",
              gradient: "from-rose-500 to-pink-600",
              productId: "perform-edge",
            },
            {
              icon: Zap,
              title: "Workflows & Cases",
              description: "Requests, HR cases, approvals, and SLAs with full audit trails.",
              tag: "Case mgmt",
              gradient: "from-yellow-500 to-orange-600",
              productId: "products",
            },
            {
              icon: Database,
              title: "Document Management",
              description: "Secure employee files, templates, e-sign, retention rules.",
              tag: "Secure docs",
              gradient: "from-indigo-500 to-blue-600",
              productId: "people-hub",
            },
          ],
        },
        {
          group: "Security & Compliance",
          items: [
            {
              icon: ShieldCheck,
              title: "Compliance Center",
              description: "Policies, right-to-work, certifications, reminders, reporting.",
              tag: "Compliance",
              gradient: "from-teal-500 to-cyan-600",
              productId: "compliance-guard",
            },
            {
              icon: Lock,
              title: "Enterprise Security",
              description: "RBAC, audit logs, encryption at rest/in transit, SSO-ready.",
              tag: "Security",
              gradient: "from-gray-700 to-gray-900",
              productId: "platform",
            },
            {
              icon: Globe,
              title: "Integrations",
              description: "Connect HRIS, email/calendar, payroll, Slack, and internal tools.",
              tag: "API-first",
              gradient: "from-sky-500 to-blue-600",
              productId: "platform",
            },
          ],
        },
      ],

      outcomes: [
        {
          icon: Zap,
          title: "Faster HR execution",
          description: "Automate repetitive admin work and keep teams aligned with fewer tools.",
          metric: "Save 40+ hrs/month",
          gradient: "from-yellow-400 to-orange-500",
        },
        {
          icon: BarChart3,
          title: "Clear, credible reporting",
          description: "Real-time dashboards with traceable data and governance built in.",
          metric: "One source of truth",
          gradient: "from-blue-400 to-cyan-500",
        },
        {
          icon: ShieldCheck,
          title: "Audit-ready operations",
          description: "Permissions, logs, and retention policies designed for compliance.",
          metric: "Enterprise-grade",
          gradient: "from-emerald-400 to-teal-500",
        },
      ],

      benefits: [
        "Unified platform for hiring, people ops, performance, and analytics",
        "CreotizAI insights to surface risks, gaps, and next-best actions",
        "Role-based access control with full auditability",
        "Configurable workflows, approvals, and automated reminders",
        "Mobile-ready UX with clear IA and fast navigation",
        "Integrations and API-first architecture for scale",
      ],

      security: [
        {
          icon: ShieldCheck,
          title: "RBAC + least-privilege access",
          note: "Control who can see and do what, by role and scope.",
          gradient: "from-blue-500 to-indigo-600",
        },
        {
          icon: Lock,
          title: "Encryption at rest and in transit",
          note: "Protect sensitive employee data across the full lifecycle.",
          gradient: "from-purple-500 to-pink-600",
        },
        {
          icon: Database,
          title: "Audit logs and version history",
          note: "Trace changes, actions, and document history.",
          gradient: "from-cyan-500 to-teal-600",
        },
        {
          icon: LifeBuoy,
          title: "Backups + disaster recovery",
          note: "Resilience designed into the operating model.",
          gradient: "from-emerald-500 to-green-600",
        },
      ],

      pricing: [
        ...pricingPlans.map((p) => {
          const hasMonthlyPrice = "priceMonthly" in p;
          const isFeatured = "popular" in p && p.popular;
          return {
            name: p.name,
            price: hasMonthlyPrice ? `£${Math.round(p.priceMonthly)}` : "Custom",
            period: hasMonthlyPrice ? "/employee/mo" : "",
            blurb: p.tagline,
            highlights: [...p.highlights],
            cta: p.cta,
            featured: Boolean(isFeatured),
          };
        }),
      ],

      faqs: [
        {
          q: "Is this an HRIS or an HCM suite?",
          a: "It's an HCM suite: HR operations plus recruiting, performance, analytics, workflows, and governance. You can adopt it module-by-module.",
        },
        {
          q: "Can we integrate with our existing tools?",
          a: "Yes. The platform is designed to integrate with payroll, email/calendar, Slack, and internal systems. You can also use an API-first approach for custom connections.",
        },
        {
          q: "How does CreotizAI work?",
          a: "CreotizAI surfaces recommendations and insights based on your configured workflows and reporting signals (for example, workload risk, skills gaps, and overdue approvals).",
        },
        {
          q: "Do you support role-based access control?",
          a: "Yes. Permissions are role-based and can be scoped by department, entity, and data category. Actions can be audited through logs.",
        },
      ],
    }),
    []
  );

  const particles = useMemo(
    () =>
      [...Array(20)].map(() => ({
        width: Math.random() * 300 + 100,
        height: Math.random() * 300 + 100,
        left: Math.random() * 100,
        top: Math.random() * 100,
        animationDelay: Math.random() * 5,
        animationDuration: Math.random() * 10 + 10,
      })),
    []
  );

  return (
    <div className="min-h-screen bg-white text-slate-900 overflow-x-hidden">
      <AnimatePresence>
        {isLoading && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed inset-0 z-[100] bg-slate-950 flex items-center justify-center"
          >
            <div className="relative">
              <div className="w-24 h-24 border-4 border-slate-800 border-t-indigo-500 rounded-full animate-spin" />
              <div
                className="absolute inset-0 w-24 h-24 border-4 border-transparent border-t-purple-500 rounded-full animate-spin"
                style={{ animationDuration: "1.5s", animationDirection: "reverse" }}
              />
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="absolute inset-0 flex items-center justify-center"
              >
                <div className="h-16 w-16 flex items-center justify-center">
                  <img src={logo} alt="Loading..." className="w-full h-full object-contain" />
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-50 via-white to-white" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150 mix-blend-multiply" />
        {particles.map((p, i) => (
          <motion.div
            key={i}
            initial={{ y: 0, x: 0 }}
            animate={{
              y: [0, -30, 0],
              x: [0, 20, 0],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: p.animationDuration,
              repeat: Infinity,
              ease: "easeInOut",
              delay: p.animationDelay,
            }}
            className="absolute rounded-full bg-gradient-to-br from-indigo-300/20 to-purple-300/20 blur-3xl"
            style={{
              width: p.width,
              height: p.height,
              left: `${p.left}%`,
              top: `${p.top}%`,
            }}
          />
        ))}
      </div>

      <section id="top" className="relative pt-20 sm:pt-24 md:pt-32 lg:pt-40 pb-8 sm:pb-12 lg:pb-16 overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
            {/* Text Content */}
            <div className="space-y-5 sm:space-y-6 lg:space-y-8 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 rounded-full border border-indigo-100 bg-white/60 backdrop-blur-md px-3 sm:px-4 py-1.5 text-xs sm:text-sm text-slate-600 shadow-sm hover:shadow-md hover:scale-105 transition-all cursor-default">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
                </span>
                <span className="font-medium bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                  {data.topBadge}
                </span>
                <span className="text-slate-300">|</span>
                <span className="text-slate-500 text-xs font-medium tracking-wide uppercase">AI-Powered HCM</span>
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight leading-[1.1]">
                <span className="block text-slate-900">The Future of</span>
                <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent animate-gradient-x">
                  Workforce Intelligence
                </span>
              </h1>

              <p className="text-base sm:text-lg lg:text-xl text-slate-600 leading-relaxed max-w-xl mx-auto lg:mx-0">
                {data.subhead}
              </p>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2 justify-center lg:justify-start">
                <button
                  onClick={onGetStarted}
                  className="group relative inline-flex items-center justify-center gap-2 rounded-xl sm:rounded-2xl bg-slate-900 px-6 sm:px-8 py-3.5 sm:py-4 text-sm font-semibold text-white shadow-xl shadow-slate-900/10 hover:shadow-2xl hover:shadow-slate-900/20 transition-all duration-300 w-full sm:w-auto"
                >
                  <span className="relative z-10">{data.primaryCta}</span>
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform relative z-10" />
                  <div className="absolute inset-0 rounded-xl sm:rounded-2xl bg-gradient-to-r from-indigo-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-0 blur-xl scale-90" />
                </button>

                <button
                  type="button"
                  className="group inline-flex items-center justify-center gap-2 rounded-xl sm:rounded-2xl border border-slate-200 bg-white/50 backdrop-blur-sm px-6 sm:px-8 py-3.5 sm:py-4 text-sm font-semibold text-slate-700 hover:bg-white hover:border-slate-300 hover:shadow-lg transition-all duration-300 w-full sm:w-auto"
                >
                  <div className="h-6 w-6 rounded-full bg-indigo-50 flex items-center justify-center group-hover:bg-indigo-100 transition-colors">
                    <Play className="h-3 w-3 text-indigo-600 fill-indigo-600" />
                  </div>
                  {data.secondaryCta}
                </button>
              </div>

              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-x-4 sm:gap-x-6 lg:gap-x-8 gap-y-2 sm:gap-y-3 pt-4 text-xs sm:text-sm text-slate-500">
                {["No credit card required", "14-day free trial", "Cancel anytime"].map((item, i) => (
                  <div
                    key={item}
                    className="inline-flex items-center gap-1.5 sm:gap-2"
                  >
                    <CheckCircle2 className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-emerald-500 flex-shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <div className="pt-6 sm:pt-8 border-t border-slate-100">
                <div className="text-xs font-semibold tracking-wider text-slate-400 uppercase mb-3 sm:mb-4">Trusted by industry leaders</div>
                <div className="w-full">
                  <div className="flex flex-wrap justify-center lg:justify-start gap-4 sm:gap-6 lg:gap-8">
                    {data.logoCloud.map((x, idx) => (
                      <span
                        key={`${x}-${idx}`}
                        className="text-sm sm:text-base lg:text-lg font-bold text-slate-300 hover:text-slate-400 transition-colors cursor-default"
                      >
                        {x}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Hero Image */}
            <div className="relative w-full max-w-[520px] sm:max-w-[600px] md:max-w-[680px] lg:max-w-none block mt-6 sm:mt-8 lg:mt-0 mx-auto lg:mx-0">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100%] sm:w-[110%] lg:w-[120%] h-[100%] sm:h-[110%] lg:h-[120%] bg-gradient-to-tr from-indigo-500/20 via-purple-500/20 to-pink-500/20 blur-[60px] sm:blur-[80px] lg:blur-[100px] rounded-full opacity-60 animate-pulse-slow" />

              <motion.div
                animate={{ y: [-5, 5, -5] }}
                transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
                className="relative z-10 w-full"
              >
                <img
                  src={heroImage}
                  alt="Hero"
                  className="w-full h-auto object-contain drop-shadow-2xl"
                />

                {/* Floating Elements */}
                <motion.div
                  animate={{ y: [10, -10, 10] }}
                  transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
                  className="hidden sm:block absolute left-0 md:-left-4 lg:-left-8 xl:-left-12 top-1/4 sm:top-1/3 bg-white/90 backdrop-blur-md p-2.5 sm:p-3 lg:p-4 rounded-xl lg:rounded-2xl shadow-xl border border-white/50 max-w-[160px] sm:max-w-[180px] lg:max-w-xs"
                >
                  <div className="flex items-center gap-2 sm:gap-3 mb-1.5 sm:mb-2">
                    <div className="h-6 w-6 sm:h-7 sm:w-7 lg:h-8 lg:w-8 rounded-lg bg-green-100 flex items-center justify-center flex-shrink-0">
                      <Users className="h-3 w-3 sm:h-3.5 sm:w-3.5 lg:h-4 lg:w-4 text-green-600" />
                    </div>
                    <div className="min-w-0">
                      <div className="text-[10px] sm:text-xs text-slate-500">New Hires</div>
                      <div className="text-xs sm:text-sm font-bold text-slate-900">+12 this week</div>
                    </div>
                  </div>
                  <div className="h-1 sm:h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
                    <div className="h-full bg-green-500 w-3/4 rounded-full" />
                  </div>
                </motion.div>

                <motion.div
                  animate={{ y: [-15, 15, -15] }}
                  transition={{ repeat: Infinity, duration: 7, ease: "easeInOut", delay: 0.5 }}
                  className="hidden sm:block absolute right-0 md:-right-2 lg:-right-4 bottom-1/4 sm:bottom-1/3 lg:bottom-1/4 bg-white/90 backdrop-blur-md p-2.5 sm:p-3 lg:p-4 rounded-xl lg:rounded-2xl shadow-xl border border-white/50"
                >
                  <div className="flex items-center gap-2 sm:gap-3">
                    <div className="h-8 w-8 sm:h-9 sm:w-9 lg:h-10 lg:w-10 rounded-full bg-purple-100 flex items-center justify-center flex-shrink-0">
                      <Sparkles className="h-4 w-4 sm:h-4.5 sm:w-4.5 lg:h-5 lg:w-5 text-purple-600" />
                    </div>
                    <div className="min-w-0">
                      <div className="text-xs sm:text-sm font-bold text-slate-900">AI Insights</div>
                      <div className="text-[10px] sm:text-xs text-slate-500">Optimization complete</div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <section
        className="py-12 lg:py-20 bg-slate-950 relative overflow-hidden text-white"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-indigo-900/40 via-slate-950 to-slate-950" />

        <div className="mx-auto max-w-7xl px-5 lg:px-8 relative z-10 mb-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm px-4 py-2 text-sm text-white/90 shadow-sm mb-6"
          >
            <Award className="h-4 w-4 text-indigo-400" />
            <span>World-class performance</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl lg:text-5xl font-bold tracking-tight mb-6"
          >
            Trusted by <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">industry leaders</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-slate-300 max-w-2xl mx-auto"
          >
            Our platform is engineered for speed, reliability, and scale. Deploy in minutes, not months.
          </motion.p>
        </div>

        <div className="mx-auto max-w-7xl px-5 lg:px-8 relative z-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-8">
            {data.kpis.map((k, idx) => (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                key={k.label}
                whileHover={{ y: -5, boxShadow: "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)" }}
                className="group relative rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-6 lg:p-8 transition-all duration-300 hover:bg-white/10"
              >
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-indigo-500 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />

                <div
                  className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${k.color} mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}
                >
                  <k.icon className="h-6 w-6 text-white" />
                </div>
                <div className="text-3xl lg:text-4xl font-bold tracking-tight text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-indigo-400 group-hover:to-purple-400 transition-all duration-300">
                  {k.value}
                </div>
                <div className="text-sm font-medium text-slate-400 mt-2">{k.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="modules"
        className="py-12 lg:py-20 relative overflow-hidden"
      >
        <div className="mx-auto max-w-7xl px-5 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-12 lg:mb-16">
            <div className="max-w-3xl">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-2 rounded-full border border-indigo-100 bg-indigo-50/50 px-4 py-1.5 text-sm font-semibold text-indigo-700 mb-6"
              >
                <Zap className="h-4 w-4" />
                Modular suite, one data model
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-3xl sm:text-4xl lg:text-6xl font-bold tracking-tight text-slate-900"
              >
                Everything HR needs, <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">
                  designed to work together.
                </span>
              </motion.h2>
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="mt-6 text-xl text-slate-600 max-w-2xl leading-relaxed"
              >
                Adopt a single module or run the full suite. Every module shares the same governance, reporting, and user experience.
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="rounded-2xl border border-slate-200 bg-gradient-to-br from-slate-50 to-white p-6 lg:p-8 max-w-sm w-full shadow-lg"
            >
              <div className="text-sm font-bold text-slate-900 mb-4 tracking-wide uppercase">What stays consistent</div>
              <div className="grid gap-3">
                {["RBAC + audit logs", "Workflow engine", "Real-time dashboards", "Integrations & API"].map((item, idx) => (
                  <motion.div
                    initial={{ opacity: 0, x: 10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 + idx * 0.1 }}
                    key={idx}
                    className="flex items-center gap-3 text-sm text-slate-600 font-medium"
                  >
                    <div className="h-5 w-5 rounded-full bg-emerald-100 flex items-center justify-center">
                      <CheckCircle2 className="h-3 w-3 text-emerald-600" />
                    </div>
                    {item}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          <div className="space-y-16">
            {data.modules.map((group, groupIdx) => (
              <div key={group.group} className="space-y-8">
                <div className="flex items-center justify-between border-b border-slate-200 pb-4">
                  <h3 className="text-2xl font-bold text-slate-900">{group.group}</h3>
                  <span className="text-xs font-semibold text-slate-400 bg-slate-50 px-3 py-1 rounded-full uppercase tracking-wider">Module Group {groupIdx + 1}</span>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {group.items.map((m, idx) => (
                    <motion.div
                      key={m.title}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-50px" }}
                      transition={{ delay: idx * 0.1 }}
                      whileHover={{ y: -8, scale: 1.01 }}
                      className="group relative rounded-3xl border border-slate-100 bg-white p-8 shadow-sm transition-all duration-300 hover:shadow-2xl hover:shadow-indigo-500/10 hover:border-indigo-100"
                    >
                      <div className={`absolute inset-0 bg-gradient-to-br ${m.gradient} opacity-0 group-hover:opacity-[0.03] transition-opacity duration-300 rounded-3xl`} />

                      <div className="relative flex items-start justify-between gap-4 mb-6">
                        <div
                          className={`h-14 w-14 rounded-2xl bg-gradient-to-br ${m.gradient} text-white flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}
                        >
                          <m.icon className="h-7 w-7" />
                        </div>
                        <span className="rounded-full border border-slate-100 bg-slate-50 px-3 py-1 text-xs font-semibold text-slate-600 tracking-wide">{m.tag}</span>
                      </div>

                      <div className="relative">
                        <div className="text-xl font-bold text-slate-900 mb-3 group-hover:text-indigo-600 transition-colors">{m.title}</div>
                        <p className="text-base text-slate-600 leading-relaxed mb-6">{m.description}</p>
                      </div>

                      <motion.button
                        whileHover={{ x: 5 }}
                        onClick={(e) => {
                          e.stopPropagation();
                          onNavigate(m.productId);
                        }}
                        className="inline-flex items-center gap-2 text-sm font-bold text-slate-900 group-hover:text-indigo-600 transition-colors"
                      >
                        Explore module
                        <ChevronRight className="h-4 w-4 text-slate-400 group-hover:text-indigo-600 transition-colors" />
                      </motion.button>
                    </motion.div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="outcomes"
        className="py-12 lg:py-20 bg-slate-950 relative overflow-hidden text-white"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-blue-900/40 via-slate-950 to-slate-950" />
        <div className="mx-auto max-w-7xl px-5 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm px-4 py-2 text-sm text-white/90 shadow-sm mb-6">
                <Sparkles className="h-4 w-4 text-indigo-400" />
                <span>Outcomes that compound</span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-6">
                Cleaner operations, <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">
                  better decisions.
                </span>
              </h2>
              <p className="text-lg text-slate-300 leading-relaxed max-w-xl">
                The suite is built around a shared data model. That means every update to headcount, skills, hiring, or compliance is reflected across dashboards
                and workflows instantly.
              </p>

              <div className="mt-10 grid gap-4">
                {data.benefits.map((b, idx) => (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    key={b}
                    className="flex items-start gap-4 p-4 rounded-xl hover:bg-white/5 transition-colors border border-transparent hover:border-white/5"
                  >
                    <div className="mt-1 h-5 w-5 rounded-full bg-emerald-500/20 flex items-center justify-center shrink-0">
                      <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400" />
                    </div>
                    <div className="text-base text-slate-300 leading-relaxed">{b}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <div className="grid gap-6">
              {data.outcomes.map((o, idx) => (
                <motion.div
                  key={o.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.15 }}
                  whileHover={{ scale: 1.02 }}
                  className="group relative rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 hover:bg-white/10 transition-all duration-300"
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${o.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-3xl`} />
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <div
                      className={`h-12 w-12 rounded-xl bg-gradient-to-br ${o.gradient} flex items-center justify-center shadow-lg`}
                    >
                      <o.icon className="h-6 w-6 text-white" />
                    </div>
                    <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-white/80">{o.metric}</span>
                  </div>
                  <div className="relative">
                    <div className="text-xl font-bold text-white mb-2">{o.title}</div>
                    <p className="text-sm text-slate-400 leading-relaxed">{o.description}</p>
                  </div>
                </motion.div>
              ))}

              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 }}
                className="rounded-3xl border border-white/10 bg-gradient-to-br from-indigo-900/20 to-purple-900/20 backdrop-blur-xl p-8 mt-4"
              >
                <div className="text-sm font-semibold text-indigo-300 mb-4 uppercase tracking-wider">In Practice</div>
                <div className="grid sm:grid-cols-2 gap-4">
                  {[
                    { title: "Update headcount plan", desc: "Dashboards, approvals, and forecasts update instantly." },
                    { title: "Close a role", desc: "Pipeline metrics, capacity, and onboarding tasks adjust." },
                  ].map((point, idx) => (
                    <div key={idx} className="space-y-1">
                      <div className="text-white font-medium">{point.title}</div>
                      <div className="text-sm text-slate-400">{point.desc}</div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="security"
        className="py-12 lg:py-20 bg-white relative overflow-hidden"
      >
        <div className="mx-auto max-w-7xl px-5 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center gap-2 rounded-full border border-emerald-100 bg-emerald-50 px-4 py-2 text-sm text-emerald-700 shadow-sm mb-6">
                <ShieldCheck className="h-4 w-4" />
                <span>Security and governance by design</span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 mb-6">
                Built for serious <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600">
                  HR data protection.
                </span>
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed max-w-xl mb-8">
                Protect employee information with strong access controls, encryption, auditability, and resilient backup policies. Operate confidently across
                departments and entities.
              </p>

              <div className="bg-slate-50 border border-slate-200 rounded-3xl p-8">
                <div className="text-slate-900 font-bold mb-4 flex items-center gap-2">
                  <Lock className="h-5 w-5 text-slate-400" />
                  Security Check
                </div>
                <div className="space-y-3">
                  {["Role-based permissions", "Audit logs & traceability", "Retention policies", "Encryption in transit/at rest"].map((item, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <CheckCircle2 className="h-5 w-5 text-emerald-500" />
                      <span className="text-slate-700 font-medium">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            <div className="grid sm:grid-cols-2 gap-6">
              {data.security.map((s, idx) => (
                <motion.div
                  key={s.title}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="group rounded-3xl border border-slate-100 bg-white p-8 shadow-sm hover:shadow-xl hover:shadow-slate-200/50 hover:border-slate-200 transition-all duration-300"
                >
                  <div
                    className={`h-12 w-12 rounded-xl bg-gradient-to-br ${s.gradient} text-white flex items-center justify-center shadow-md mb-6 icon-rotate`}
                  >
                    <s.icon className="h-6 w-6" />
                  </div>
                  <div className="text-lg font-bold text-slate-900 mb-2">{s.title}</div>
                  <p className="text-sm text-slate-500 leading-relaxed">{s.note}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section
        id="pricing"
        className="py-12 lg:py-20 bg-slate-50 relative overflow-hidden"
      >
        <div className="mx-auto max-w-7xl px-5 lg:px-8 relative z-10">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-white px-4 py-1.5 text-sm font-semibold text-indigo-700 shadow-sm mb-6"
            >
              <BarChart3 className="h-4 w-4" />
              Simple plans that scale
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 mb-6"
            >
              Start small, <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">
                scale infinitely.
              </span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-lg text-slate-600"
            >
              Transparent pricing for every stage of your company's growth.
            </motion.p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {data.pricing.map((p, idx) => (
              <motion.div
                key={p.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ y: -8 }}
                className={`relative rounded-3xl p-8 transition-all duration-300 ${p.featured
                  ? "bg-slate-900 text-white shadow-2xl shadow-indigo-500/20 ring-1 ring-white/10"
                  : "bg-white text-slate-900 border border-slate-200 shadow-lg"
                  }`}
              >
                {p.featured && (
                  <div className="absolute top-0 right-0 p-4">
                    <span className="inline-flex items-center gap-1 rounded-full bg-indigo-500/20 border border-indigo-500/30 px-3 py-1 text-xs font-semibold text-indigo-300">
                      <Sparkles className="h-3 w-3" /> Popular
                    </span>
                  </div>
                )}

                <h3 className="text-xl font-bold mb-2">{p.name}</h3>
                <p className={`text-sm mb-6 ${p.featured ? "text-slate-400" : "text-slate-500"}`}>{p.blurb}</p>

                <div className="flex items-baseline gap-1 mb-6">
                  <span className="text-4xl font-bold tracking-tight">{p.price}</span>
                  {p.period && <span className={`text-sm ${p.featured ? "text-slate-500" : "text-slate-400"}`}>{p.period}</span>}
                </div>

                <div className="space-y-4 mb-8">
                  {p.highlights.map((h) => (
                    <div key={h} className="flex items-start gap-3 text-sm">
                      <CheckCircle2 className={`h-5 w-5 shrink-0 ${p.featured ? "text-indigo-400" : "text-indigo-600"}`} />
                      <span className={p.featured ? "text-slate-300" : "text-slate-600"}>{h}</span>
                    </div>
                  ))}
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={p.name === "Enterprise" ? undefined : onGetStarted}
                  className={`w-full py-3 rounded-xl font-bold text-sm transition-colors ${p.featured
                    ? "bg-indigo-600 text-white hover:bg-indigo-500"
                    : "bg-slate-50 text-slate-900 hover:bg-slate-100 border border-slate-200"
                    }`}
                >
                  {p.cta}
                </motion.button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="faq"
        className="py-12 lg:py-20 bg-white"
      >
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-24">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-1.5 text-sm font-semibold text-slate-700 shadow-sm mb-6">
                <LifeBuoy className="h-4 w-4 text-slate-500" />
                <span>Support</span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 mb-6">
                Frequently asked <br /> questions
              </h2>
              <p className="text-lg text-slate-600">
                Can't find the answer you're looking for? Reach out to our support team.
              </p>
            </div>

            <div className="space-y-4">
              {data.faqs.map((f, idx) => (
                <FaqItem key={idx} q={f.q} a={f.a} delay={idx * 0.1} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Legacy styles removed, using Tailwind + Motion */}
    </div >
  );
}

/* ------------------------- UI Components ------------------------- */

function FaqItem({ q, a, delay = 0 }: { q: string; a: string; delay?: number }) {
  const [open, setOpen] = useState(false);
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay }}
      className="border-b border-slate-100"
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full py-6 flex items-start justify-between text-left group"
      >
        <span className={`text-lg font-medium transition-colors ${open ? "text-indigo-600" : "text-slate-900 group-hover:text-indigo-600"}`}>
          {q}
        </span>
        <span className={`ml-6 flex-shrink-0 transition-transform duration-300 ${open ? "rotate-90" : ""}`}>
          <ChevronRight className={`h-5 w-5 ${open ? "text-indigo-600" : "text-slate-400"}`} />
        </span>
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <p className="pb-6 text-slate-600 leading-relaxed max-w-xl">
              {a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export function Homepage({ onNavigate }: { onNavigate: (page: string) => void }) {
  return <LandingPage onGetStarted={() => onNavigate("demo")} onNavigate={onNavigate} />;
}
