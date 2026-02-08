import React, { useMemo } from "react";
import { motion } from "motion/react";
import {
   Shield,
   Lock,
   Cpu,
   Globe,
   Database,
   Share2,
   ArrowRight,
   CheckCircle2,
} from "lucide-react";

const features = [
   {
      icon: Cpu,
      title: "Native AI Engine",
      desc: "Predictive intelligence embedded across planning, hiring, and performance workflows.",
   },
   {
      icon: Shield,
      title: "Bank-Grade Security",
      desc: "Security-first design with strong controls, auditing, and enterprise governance built in.",
   },
   {
      icon: Database,
      title: "Unified Data Model",
      desc: "One employee graph across modules. No duplication, no sync drift, clean reporting.",
   },
   {
      icon: Globe,
      title: "Global Scale",
      desc: "Multi-country support designed for distributed teams, entities, and workforce complexity.",
   },
   {
      icon: Share2,
      title: "Open API & Webhooks",
      desc: "Integrate with your stack, automate workflows, and move data reliably in real time.",
   },
   {
      icon: Lock,
      title: "Role-Based Access",
      desc: "Granular permissions down to fields, actions, departments, and sensitive records.",
   },
];

const compliance = [
   "GDPR-ready workflows",
   "Audit logs & change history",
   "Data encryption at rest & in transit",
   "SSO / SAML support",
   "Field-level permissions",
   "Secure integration patterns",
];

function cn(...xs: Array<string | false | null | undefined>) {
   return xs.filter(Boolean).join(" ");
}

export function Platform({ onNavigate }: { onNavigate: (page: any) => void }) {
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
            <section className="relative overflow-hidden rounded-3xl border border-slate-200/50 bg-white/70 backdrop-blur-xl shadow-sm px-6 sm:px-10 py-14 mb-14">
               <div className="absolute inset-0 bg-gradient-to-br from-indigo-50/35 via-white to-purple-50/25" />
               <div className="relative z-10 text-center max-w-3xl mx-auto">
                  <div className="inline-flex items-center gap-2 rounded-full border border-slate-200/50 bg-white/80 backdrop-blur-sm px-4 py-2 text-sm text-slate-700 shadow-sm">
                     <Shield className="h-4 w-4 text-indigo-600" />
                     <span className="font-medium">Platform</span>
                     <span className="text-slate-400">•</span>
                     <span className="text-slate-600">Secure, scalable architecture</span>
                  </div>

                  <h1 className="mt-6 text-4xl sm:text-5xl font-bold tracking-tight">
                     <span className="bg-gradient-to-r from-slate-900 via-indigo-900 to-slate-900 bg-clip-text text-transparent">
                        The enterprise-grade HR cloud
                     </span>
                  </h1>
                  <p className="mt-5 text-lg sm:text-xl text-slate-600 leading-relaxed">
                     Built on a modern, secure, and scalable architecture designed for the AI era.
                  </p>

                  <div className="mt-8 flex flex-wrap justify-center gap-3">
                     <button
                        onClick={() => onNavigate("demo")}
                        className="inline-flex items-center gap-2 rounded-2xl bg-indigo-600 px-5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-700 transition-colors"
                     >
                        Request a demo <ArrowRight className="h-4 w-4" />
                     </button>
                     <button
                        onClick={() => onNavigate("solutions")}
                        className="inline-flex items-center gap-2 rounded-2xl border border-slate-200 bg-white/80 px-5 py-3 text-sm font-semibold text-slate-900 hover:bg-white transition-colors"
                     >
                        Explore solutions
                     </button>
                  </div>
               </div>
            </section>

            {/* Feature grid */}
            <section className="mb-14">
               <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {features.map((feat, idx) => {
                     const Icon = feat.icon;
                     return (
                        <motion.div
                           key={feat.title}
                           initial={{ opacity: 0, y: 18 }}
                           whileInView={{ opacity: 1, y: 0 }}
                           viewport={{ once: true, margin: "-120px" }}
                           transition={{ duration: 0.45, delay: idx * 0.03 }}
                           className="group relative overflow-hidden rounded-3xl border border-slate-200/50 bg-white/80 backdrop-blur-sm p-7 shadow-sm hover:shadow-xl transition-all"
                        >
                           <div className="absolute -inset-10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-gradient-to-r from-indigo-500/10 via-purple-500/10 to-pink-500/10 blur-3xl" />

                           <div className="relative">
                              <div className="h-12 w-12 rounded-2xl bg-indigo-50 text-indigo-700 flex items-center justify-center border border-indigo-100">
                                 <Icon className="h-6 w-6" />
                              </div>
                              <h3 className="mt-5 text-xl font-bold text-slate-900">{feat.title}</h3>
                              <p className="mt-2 text-slate-600 leading-relaxed">{feat.desc}</p>

                              <div className="mt-5 flex items-center gap-2 text-sm font-semibold text-indigo-700 opacity-0 group-hover:opacity-100 transition-opacity">
                                 Learn more <ArrowRight className="h-4 w-4" />
                              </div>
                           </div>
                        </motion.div>
                     );
                  })}
               </div>
            </section>

            {/* Security & compliance strip */}
            <section className="mb-14">
               <div className="rounded-3xl border border-slate-200/50 bg-white/75 backdrop-blur-xl shadow-sm p-8">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
                     <div>
                        <div className="inline-flex items-center gap-2 rounded-full border border-slate-200/50 bg-white/80 px-3 py-1.5 text-xs font-medium text-slate-700">
                           <Lock className="h-4 w-4 text-indigo-600" />
                           Security & Compliance
                        </div>
                        <h2 className="mt-3 text-2xl font-bold text-slate-900">
                           Controls you can trust, with evidence you can show
                        </h2>
                        <p className="mt-2 text-slate-600">
                           Designed for regulated environments and distributed teams. Governance is built in,
                           not added later.
                        </p>
                     </div>

                     <div className="grid sm:grid-cols-2 gap-3 lg:max-w-xl w-full">
                        {compliance.map((item) => (
                           <div
                              key={item}
                              className="rounded-2xl border border-slate-200/50 bg-white/80 px-4 py-3 text-sm text-slate-700"
                           >
                              <div className="flex items-start gap-2">
                                 <CheckCircle2 className="h-4 w-4 text-emerald-600 mt-0.5 shrink-0" />
                                 <span>{item}</span>
                              </div>
                           </div>
                        ))}
                     </div>
                  </div>
               </div>
            </section>

            {/* Integrations + API */}
            <section className="grid lg:grid-cols-2 gap-6">
               {/* Integrations */}
               <div className="relative overflow-hidden rounded-3xl border border-slate-200/50 bg-white/75 backdrop-blur-xl shadow-sm p-8">
                  <div className="absolute inset-0 bg-gradient-to-br from-indigo-50/25 via-transparent to-purple-50/20" />
                  <div className="relative">
                     <h2 className="text-2xl font-bold text-slate-900">Connects with everything</h2>
                     <p className="mt-2 text-slate-600 leading-relaxed">
                        Creotizant fits into your existing tech stack. Sync people data, automate approvals,
                        and trigger workflows through integrations and webhooks.
                     </p>

                     <div className="mt-6 flex flex-wrap gap-3">
                        {[
                           "Workday",
                           "SAP",
                           "Salesforce",
                           "Slack",
                           "Microsoft Teams",
                           "Jira",
                           "Zoom",
                           "Google Workspace",
                        ].map((tool) => (
                           <span
                              key={tool}
                              className="px-4 py-2 rounded-full text-sm font-medium border border-slate-200/60 bg-white/80 text-slate-700 hover:bg-white transition-colors cursor-default"
                           >
                              {tool}
                           </span>
                        ))}
                     </div>

                     <div className="mt-7 rounded-2xl border border-slate-200/50 bg-white/80 p-5">
                        <div className="text-xs font-medium text-slate-500 mb-2">
                           Typical integration patterns
                        </div>
                        <div className="grid sm:grid-cols-2 gap-3 text-sm text-slate-700">
                           {[
                              "SSO / SAML provisioning",
                              "HRIS sync (users, org, roles)",
                              "Payroll exports & validation",
                              "Ticketing automation",
                              "Slack/Teams approvals",
                              "Data warehouse feeds",
                           ].map((p) => (
                              <div key={p} className="rounded-xl border border-slate-200/50 bg-white/70 px-4 py-3">
                                 {p}
                              </div>
                           ))}
                        </div>
                     </div>
                  </div>
               </div>

               {/* API sample */}
               <div className="relative overflow-hidden rounded-3xl border border-slate-200/50 bg-slate-900 shadow-sm p-8 text-white">
                  <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/15 via-transparent to-purple-500/15" />
                  <div className="relative">
                     <div className="inline-flex items-center gap-2 rounded-full bg-white/10 border border-white/10 px-3 py-1.5 text-xs font-medium text-slate-200">
                        <Share2 className="h-4 w-4 text-indigo-300" />
                        API & Webhooks
                     </div>
                     <h2 className="mt-4 text-2xl font-bold">Automate with confidence</h2>
                     <p className="mt-2 text-slate-300">
                        Clean endpoints, predictable responses, and audit-friendly event trails.
                     </p>

                     <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-5">
                        <div className="text-sm font-mono text-indigo-300 mb-3">// API Example</div>
                        <pre className="text-xs text-slate-300 font-mono overflow-x-auto leading-relaxed">
                           {`POST /api/v1/workforce/predict
{
  "department": "Engineering",
  "horizon": "12m",
  "variables": ["attrition", "hiring_velocity"]
}

// Response
{
  "risk_level": "HIGH",
  "predicted_shortage": 12,
  "recommended_action": "Increase pipeline by 20%"
}`}
                        </pre>
                     </div>

                     <div className="mt-6 flex flex-wrap gap-3">
                        {["OAuth2", "Webhook events", "Idempotency", "Rate limits", "Audit logs"].map((x) => (
                           <span
                              key={x}
                              className="px-3 py-1.5 rounded-full text-xs font-semibold bg-white/10 border border-white/10 text-slate-200"
                           >
                              {x}
                           </span>
                        ))}
                     </div>

                     <button
                        onClick={() => onNavigate("demo")}
                        className="mt-7 inline-flex items-center gap-2 rounded-2xl bg-white/10 hover:bg-white/15 border border-white/10 px-5 py-3 text-sm font-semibold transition-colors"
                     >
                        Request a demo <ArrowRight className="h-4 w-4" />
                     </button>
                  </div>
               </div>
            </section>
         </div>
      </div>
   );
}
