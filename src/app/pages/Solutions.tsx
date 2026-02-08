import React, { useMemo } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import {
  ArrowRight,
  Award,
  CheckCircle2,
  Clock,
  Sparkles,
  Target,
  TrendingUp,
  Users,
  Briefcase,
  Zap,
  BarChart3,
  ShieldCheck,
} from 'lucide-react';
import { MockDashboard } from '@/app/components/MockDashboard';

const solutions = [
  {
    id: 'strategy',
    title: "Workforce Strategy",
    icon: Target,
    gradient: 'from-blue-500 to-cyan-500',
    problem: "Aligning headcount with rapidly changing business goals.",
    outcome: "Reduce planning cycles by 60% and attrition by 15%.",
    metrics: [
      { label: "Planning Time", value: "-60%" },
      { label: "Forecast Accuracy", value: "94%" }
    ],
    dashboard: 'executive'
  },
  {
    id: 'hiring',
    title: "Hiring Excellence",
    icon: Users,
    gradient: 'from-emerald-500 to-teal-500',
    problem: "Slow time-to-hire and poor candidate experience.",
    outcome: "Cut time-to-hire in half while improving quality of hire.",
    metrics: [
      { label: "Time to Hire", value: "24 Days" },
      { label: "Offer Acceptance", value: "92%" }
    ],
    dashboard: 'hiring'
  },
  {
    id: 'performance',
    title: "High Performance Culture",
    icon: Award,
    gradient: 'from-purple-500 to-pink-500',
    problem: "Disconnected reviews and lack of continuous feedback.",
    outcome: "Real-time alignment of individual goals to company KPIs.",
    metrics: [
      { label: "Goal Completion", value: "+32%" },
      { label: "Employee Engagement", value: "8.4/10" }
    ],
    dashboard: 'performance'
  }
];

export function Solutions({ onNavigate }: { onNavigate: (page: any) => void }) {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);

  const particles = useMemo(
    () =>
      [...Array(20)].map(() => ({
        width: Math.random() * 300 + 50,
        height: Math.random() * 300 + 50,
        left: Math.random() * 100,
        top: Math.random() * 100,
        animationDelay: Math.random() * 5,
        animationDuration: Math.random() * 10 + 10,
      })),
    []
  );

  return (
    <div className="min-h-screen bg-white text-slate-900 overflow-x-hidden">
      {/* Background Ambience */}
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-indigo-50 via-white to-white" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150 mix-blend-multiply" />
        {particles.map((p, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0 }}
            animate={{ opacity: [0.1, 0.3, 0.1], y: [0, -20, 0] }}
            transition={{
              duration: p.animationDuration,
              repeat: Infinity,
              ease: "easeInOut",
              delay: p.animationDelay,
            }}
            className="absolute rounded-full bg-gradient-to-br from-indigo-200/30 to-purple-200/30 blur-3xl"
            style={{
              width: p.width,
              height: p.height,
              left: `${p.left}%`,
              top: `${p.top}%`,
            }}
          />
        ))}
      </div>

      {/* Hero Section */}
      <section className="relative pt-32 lg:pt-48 pb-20 lg:pb-32 overflow-hidden">
        <div className="mx-auto max-w-7xl px-5 lg:px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 rounded-full border border-indigo-100 bg-white/60 backdrop-blur-md px-4 py-1.5 text-sm text-indigo-700 shadow-sm mb-8"
          >
            <Sparkles className="h-4 w-4" />
            <span className="font-semibold">Transforming Workforce Potential</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight text-slate-900 mb-6"
          >
            Solutions for <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600">
              Real Business Impact
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg sm:text-xl text-slate-600 max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            Go beyond simple HR administration. Solve complex workforce challenges with data-driven intelligence and automated workflows.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => onNavigate('demo')}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-2xl bg-slate-900 px-8 py-4 text-sm font-semibold text-white shadow-xl hover:bg-slate-800 transition-all"
            >
              Request a demo
              <ArrowRight className="h-4 w-4" />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => onNavigate('products')}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-2xl border border-slate-200 bg-white px-8 py-4 text-sm font-semibold text-slate-700 hover:bg-slate-50 transition-all shadow-sm"
            >
              Explore products
            </motion.button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 1 }}
            className="mt-12 flex flex-wrap justify-center gap-x-8 gap-y-4 text-sm font-medium text-slate-500"
          >
            {["Faster decisions", "Measurable outcomes", "Enterprise-ready"].map((item, i) => (
              <div key={item} className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-emerald-500" />
                {item}
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-20 bg-slate-50/50">
        <div className="mx-auto max-w-7xl px-5 lg:px-8 space-y-32">
          {solutions.map((solution, index) => {
            const SolutionIcon = solution.icon;
            const isEven = index % 2 === 0;

            return (
              <motion.div
                key={solution.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10% 0px" }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                className={`flex flex-col lg:flex-row items-center gap-12 lg:gap-20 ${!isEven ? 'lg:flex-row-reverse' : ''}`}
              >
                {/* Text Content */}
                <div className="flex-1 space-y-8">
                  <div className="inline-flex items-center gap-2">
                    <div className={`p-3 rounded-xl bg-gradient-to-br ${solution.gradient} text-white shadow-lg`}>
                      <SolutionIcon className="h-6 w-6" />
                    </div>
                    <span className="text-sm font-bold tracking-wider text-slate-500 uppercase">Use Case {index + 1}</span>
                  </div>

                  <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 leading-tight">
                    {solution.title}
                  </h2>

                  <div className="space-y-6">
                    <div className="group rounded-2xl border border-slate-200 bg-white p-6 transition-all hover:border-rose-200 hover:shadow-lg hover:shadow-rose-500/5">
                      <div className="flex items-start gap-4">
                        <div className="mt-1 rounded-lg bg-rose-50 p-2 text-rose-600 group-hover:bg-rose-100 transition-colors">
                          <Clock className="h-5 w-5" />
                        </div>
                        <div>
                          <div className="font-semibold text-slate-900 mb-1">The Challenge</div>
                          <p className="text-slate-600 leading-relaxed text-sm lg:text-base">{solution.problem}</p>
                        </div>
                      </div>
                    </div>

                    <div className="group rounded-2xl border border-slate-200 bg-white p-6 transition-all hover:border-emerald-200 hover:shadow-lg hover:shadow-emerald-500/5">
                      <div className="flex items-start gap-4">
                        <div className="mt-1 rounded-lg bg-emerald-50 p-2 text-emerald-600 group-hover:bg-emerald-100 transition-colors">
                          <TrendingUp className="h-5 w-5" />
                        </div>
                        <div>
                          <div className="font-semibold text-slate-900 mb-1">The Outcome</div>
                          <p className="text-slate-600 leading-relaxed text-sm lg:text-base">{solution.outcome}</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    {solution.metrics.map((m) => (
                      <div key={m.label} className="rounded-2xl bg-white border border-slate-200 p-4 text-center shadow-sm">
                        <div className={`text-2xl sm:text-3xl font-bold bg-gradient-to-br ${solution.gradient} bg-clip-text text-transparent`}>
                          {m.value}
                        </div>
                        <div className="text-xs sm:text-sm font-medium text-slate-500 mt-1">{m.label}</div>
                      </div>
                    ))}
                  </div>

                  <div className="pt-4">
                    <button
                      onClick={() => onNavigate('demo')}
                      className="group flex items-center gap-2 text-sm font-bold text-slate-900 hover:text-indigo-600 transition-colors"
                    >
                      Learn more about {solution.title}
                      <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>

                {/* Visual */}
                <div className="flex-1 w-full lg:w-auto">
                  <div className="relative isolate">
                    <div className={`absolute inset-0 -z-10 transform-gpu blur-3xl opacity-30 bg-gradient-to-tr ${solution.gradient}`} aria-hidden="true" />
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.3 }}
                      className="rounded-3xl border border-slate-200 bg-white/50 backdrop-blur-xl shadow-2xl p-2"
                    >
                      <div className="rounded-2xl overflow-hidden border border-slate-100 bg-slate-50">
                        <MockDashboard variant={solution.dashboard as any} />
                      </div>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-slate-900 relative overflow-hidden text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-indigo-900/50 via-slate-900 to-slate-900" />
        <div className="mx-auto max-w-4xl px-6 text-center relative z-10">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-6">
            Ready to transform your workforce strategy?
          </h2>
          <p className="text-lg text-slate-300 mb-10 max-w-2xl mx-auto">
            Join forward-thinking companies using our platform to build high-performance cultures and drive business growth.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => onNavigate('demo')}
              className="w-full sm:w-auto rounded-xl bg-white px-8 py-3.5 text-sm font-semibold text-slate-900 shadow-lg hover:bg-indigo-50 transition-all"
            >
              Start your free trial
            </button>
            <button
              onClick={() => onNavigate('contact')}
              className="w-full sm:w-auto rounded-xl border border-white/20 px-8 py-3.5 text-sm font-semibold text-white hover:bg-white/10 transition-all"
            >
              Contact Sales
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
