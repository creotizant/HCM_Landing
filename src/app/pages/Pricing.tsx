import React, { useMemo, useState } from "react";
import { motion } from "motion/react";
import { Check, Sparkles, ArrowRight, HelpCircle, ShieldCheck, Clock, LifeBuoy } from "lucide-react";

type Billing = "monthly" | "annual";

function cn(...xs: Array<string | false | null | undefined>) {
  return xs.filter(Boolean).join(" ");
}

export const pricingPlans = [
  {
    key: "essential",
    name: "Essential",
    tagline: "For growing UK businesses",
    priceMonthly: 6,
    priceAnnualMonthly: 6 * 0.85,
    cta: "Start free trial",
    ctaStyle: "outline",
    highlights: ["Core HR & Profiles", "Leave & Absence Management", "Basic Payroll Export", "Employee Self-Service App", "Standard Reporting"],
    included: ["Email support", "Standard SLA", "UK-ready defaults"],
  },
  {
    key: "professional",
    name: "Professional",
    tagline: "For established organizations",
    priceMonthly: 12,
    priceAnnualMonthly: 12 * 0.85,
    cta: "Get started",
    ctaStyle: "primary",
    popular: true,
    highlights: [
      "Everything in Essential",
      "Full UK Payroll (HMRC RTI)",
      "Performance Management",
      "Advanced Analytics",
      "Onboarding Workflows",
      "Expenses Management",
    ],
    included: ["Priority support", "Implementation guidance", "Advanced reporting"],
  },
  {
    key: "enterprise",
    name: "Enterprise",
    tagline: "For complex, global needs",
    priceCustom: true,
    cta: "Contact sales",
    ctaStyle: "neutral",
    highlights: [
      "Everything in Professional",
      "AI Workforce Planning",
      "Global Compliance Engine",
      "Dedicated Success Manager",
      "Custom Integrations (API)",
      "SSO & Advanced Security",
    ],
    included: ["Dedicated success", "Security review support", "Custom rollout plan"],
  },
] as const;

const faqs = [
  {
    q: "Do you charge implementation fees?",
    a: "No fixed implementation fee. If you need a guided rollout, we’ll scope it transparently based on complexity and timelines.",
  },
  {
    q: "Can we start with one module and expand later?",
    a: "Yes. Most teams start with Core HR + onboarding, then add payroll, performance, and planning once adoption is strong.",
  },
  {
    q: "Is this UK-ready?",
    a: "Yes. Plans are designed with UK workflows in mind, and Professional includes full UK payroll (HMRC RTI).",
  },
  {
    q: "What happens if our headcount changes?",
    a: "Your bill adjusts based on your active employee count. Annual contracts can be true-up on an agreed cadence.",
  },
];

function Pill({ children }: { children: React.ReactNode }) {
  return (
    <div className="rounded-2xl border border-slate-200/50 bg-white/80 backdrop-blur-sm px-4 py-3 shadow-sm">
      {children}
    </div>
  );
}

export function Pricing({ onNavigate }: { onNavigate: (page: any) => void }) {
  const [billing, setBilling] = useState<Billing>("monthly");

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
              <span className="font-medium">Pricing</span>
              <span className="text-slate-400">•</span>
              <span className="text-slate-600">Simple and transparent</span>
            </div>

            <h1 className="mt-6 text-4xl sm:text-5xl font-bold tracking-tight">
              <span className="bg-gradient-to-r from-slate-900 via-indigo-900 to-slate-900 bg-clip-text text-transparent">
                Simple, transparent pricing
              </span>
            </h1>
            <p className="mt-5 text-lg sm:text-xl text-slate-600 leading-relaxed">
              Choose the plan that fits your workforce size. No hidden implementation fees.
            </p>

            {/* Billing toggle */}
            <div className="mt-7 flex items-center justify-center">
              <div className="inline-flex items-center rounded-2xl border border-slate-200/60 bg-white/80 p-1 shadow-sm">
                <button
                  type="button"
                  onClick={() => setBilling("monthly")}
                  className={cn(
                    "rounded-xl px-4 py-2 text-sm font-semibold transition-colors",
                    billing === "monthly" ? "bg-white text-slate-900 shadow-sm" : "text-slate-600 hover:text-slate-900"
                  )}
                >
                  Monthly
                </button>
                <button
                  type="button"
                  onClick={() => setBilling("annual")}
                  className={cn(
                    "rounded-xl px-4 py-2 text-sm font-semibold transition-colors",
                    billing === "annual" ? "bg-white text-slate-900 shadow-sm" : "text-slate-600 hover:text-slate-900"
                  )}
                >
                  Annual
                </button>
              </div>

              <span className="ml-3 inline-flex items-center rounded-full border border-emerald-200/70 bg-emerald-50/70 px-3 py-1 text-xs font-semibold text-emerald-800">
                Save 15% annually
              </span>
            </div>
          </div>
        </section>

        {/* Trust strip */}
        <section className="mb-10">
          <div className="grid sm:grid-cols-3 gap-4">
            <Pill>
              <div className="flex items-start gap-3">
                <ShieldCheck className="h-5 w-5 text-indigo-600 mt-0.5" />
                <div>
                  <div className="text-sm font-semibold text-slate-900">Security by default</div>
                  <div className="text-sm text-slate-600 mt-1">Role-based access, audit trails, encryption.</div>
                </div>
              </div>
            </Pill>
            <Pill>
              <div className="flex items-start gap-3">
                <Clock className="h-5 w-5 text-indigo-600 mt-0.5" />
                <div>
                  <div className="text-sm font-semibold text-slate-900">Fast rollout</div>
                  <div className="text-sm text-slate-600 mt-1">Typical deployment in weeks, not quarters.</div>
                </div>
              </div>
            </Pill>
            <Pill>
              <div className="flex items-start gap-3">
                <LifeBuoy className="h-5 w-5 text-indigo-600 mt-0.5" />
                <div>
                  <div className="text-sm font-semibold text-slate-900">Support that sticks</div>
                  <div className="text-sm text-slate-600 mt-1">Success-led help, not just ticket queues.</div>
                </div>
              </div>
            </Pill>
          </div>
        </section>

        {/* Pricing cards */}
        <section className="grid lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {pricingPlans.map((p, idx) => {
            const isPopular = "popular" in p && p.popular;
            const price =
              "priceMonthly" in p
                ? billing === "annual"
                  ? p.priceAnnualMonthly
                  : p.priceMonthly
                : null;

            return (
              <motion.div
                key={p.key}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-120px" }}
                transition={{ duration: 0.5, delay: idx * 0.03 }}
                className={cn(
                  "relative overflow-hidden rounded-3xl border bg-white/80 backdrop-blur-xl shadow-sm p-8 flex flex-col",
                  isPopular ? "border-indigo-600 shadow-xl" : "border-slate-200/50"
                )}
              >
                <div
                  className={cn(
                    "absolute inset-0 pointer-events-none",
                    isPopular
                      ? "bg-gradient-to-br from-indigo-50/55 via-white to-purple-50/35"
                      : "bg-gradient-to-br from-white via-white to-slate-50/60"
                  )}
                />

                {isPopular && (
                  <div className="absolute top-6 right-6">
                    <span className="inline-flex items-center rounded-full bg-indigo-600 text-white px-3 py-1 text-xs font-bold uppercase tracking-wide">
                      Most popular
                    </span>
                  </div>
                )}

                <div className="relative">
                  <h3 className="text-xl font-semibold text-slate-900">{p.name}</h3>
                  <p className="text-sm text-slate-500 mt-1">{p.tagline}</p>

                  <div className="mt-6">
                    {"priceCustom" in p && p.priceCustom ? (
                      <div className="text-4xl font-bold text-slate-900">Custom</div>
                    ) : (
                      <div className="flex items-end gap-2">
                        <span className="text-4xl font-bold text-slate-900">£{Math.round(price as number)}</span>
                        <span className="text-slate-500 pb-1">/employee/mo</span>
                      </div>
                    )}

                    {!("priceCustom" in p && p.priceCustom) && billing === "annual" && (
                      <div className="mt-2 text-xs text-slate-500">
                        Billed annually. Equivalent monthly shown.
                      </div>
                    )}
                  </div>

                  <button
                    onClick={() => onNavigate("demo")}
                    className={cn(
                      "mt-6 w-full py-3 px-4 rounded-2xl font-semibold transition-colors",
                      p.ctaStyle === "primary" &&
                      "bg-indigo-600 text-white hover:bg-indigo-700",
                      p.ctaStyle === "outline" &&
                      "border border-indigo-600 text-indigo-600 hover:bg-indigo-50 bg-white/70",
                      p.ctaStyle === "neutral" &&
                      "border border-slate-300 text-slate-700 hover:bg-slate-50 bg-white/70"
                    )}
                    type="button"
                  >
                    {p.cta}
                  </button>

                  <div className="mt-7">
                    <div className="text-xs font-semibold text-slate-500 uppercase tracking-wide mb-3">
                      What’s included
                    </div>
                    <ul className="space-y-3">
                      {p.highlights.map((feature) => (
                        <li key={feature} className="flex items-start text-sm text-slate-700">
                          <Check className="w-5 h-5 text-emerald-500 mr-3 flex-shrink-0 mt-0.5" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-7 rounded-2xl border border-slate-200/50 bg-white/70 p-4">
                    <div className="text-xs font-medium text-slate-500 mb-2">Plan notes</div>
                    <div className="grid gap-2">
                      {p.included.map((x) => (
                        <div
                          key={x}
                          className="rounded-xl border border-slate-200/50 bg-white/80 px-4 py-2 text-sm text-slate-700"
                        >
                          {x}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </section>

        {/* FAQ */}
        <section className="mt-12 max-w-6xl mx-auto">
          <div className="rounded-3xl border border-slate-200/50 bg-white/80 backdrop-blur-xl shadow-sm p-8">
            <div className="flex items-center gap-3">
              <div className="h-11 w-11 rounded-2xl bg-indigo-50 border border-indigo-100 flex items-center justify-center">
                <HelpCircle className="h-6 w-6 text-indigo-700" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-slate-900">Pricing FAQs</h2>
                <p className="text-slate-600 mt-1">Quick answers to common questions.</p>
              </div>
            </div>

            <div className="mt-8 grid md:grid-cols-2 gap-6">
              {faqs.map((f) => (
                <div key={f.q} className="rounded-2xl border border-slate-200/50 bg-white/70 p-6">
                  <div className="text-sm font-semibold text-slate-900">{f.q}</div>
                  <div className="mt-2 text-sm text-slate-600 leading-relaxed">{f.a}</div>
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap items-center justify-between gap-4">
              <div className="text-sm text-slate-600">
                Need a tailored quote for multi-entity, payroll, or integrations?
              </div>
              <button
                onClick={() => onNavigate("demo")}
                className="inline-flex items-center gap-2 rounded-2xl bg-indigo-600 px-5 py-3 text-sm font-semibold text-white hover:bg-indigo-700 transition-colors"
                type="button"
              >
                Talk to sales <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
