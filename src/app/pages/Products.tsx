import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Brain, Briefcase, Users, TrendingUp, CreditCard, Heart, BarChart3 } from 'lucide-react';
import { MockDashboard } from '@/app/components/MockDashboard';

const productGroups = [
  {
    title: "Workforce Planning",
    icon: <Brain className="w-6 h-6 text-indigo-600" />,
    description: "Anticipate future needs and close skills gaps.",
    products: [
      { name: "Shortage Assistant", desc: "Predicts role shortages before they impact business.", id: "shortage-assistant" },
      { name: "AI Workforce Planner", desc: "Scenario modeling for organizational changes.", id: "ai-workforce-planner" }
    ],
    dashboard: 'executive'
  },
  {
    title: "Talent Acquisition",
    icon: <Briefcase className="w-6 h-6 text-indigo-600" />,
    description: "Attract and hire the best talent faster.",
    products: [
      { name: "HirelyAI", desc: "Automated candidate sourcing and ranking.", id: "hirely-ai" },
      { name: "RecruitFlow", desc: "End-to-end applicant tracking system.", id: "recruit-flow" },
      { name: "InterviewIQ", desc: "AI-assisted interview scoring and bias reduction.", id: "interview-iq" }
    ],
    dashboard: 'hiring'
  },
  {
    title: "Performance & Development",
    icon: <TrendingUp className="w-6 h-6 text-indigo-600" />,
    description: "Drive high performance and continuous growth.",
    products: [
      { name: "PerformEdge", desc: "Continuous feedback and goal alignment.", id: "perform-edge" },
      { name: "SkillForge", desc: "L&D platform with personalized paths.", id: "skill-forge" },
      { name: "CareerPath AI", desc: "Internal mobility and succession planning.", id: "career-path-ai" }
    ],
    dashboard: 'performance'
  },
  {
    title: "Payroll & Compliance",
    icon: <CreditCard className="w-6 h-6 text-indigo-600" />,
    description: "Error-free payroll tailored for the UK.",
    products: [
      { name: "PayCore UK", desc: "Automated payroll processing with HMRC integration.", id: "pay-core-uk" },
      { name: "TimeTrack Pro", desc: "Unified time and attendance tracking.", id: "time-track-pro" },
      { name: "ComplianceGuard", desc: "Real-time regulatory risk monitoring.", id: "compliance-guard" }
    ],
    dashboard: 'executive' // Reusing executive for now as a generic data view
  },
  {
    title: "Employee Experience",
    icon: <Heart className="w-6 h-6 text-indigo-600" />,
    description: "Foster a culture of belonging and engagement.",
    products: [
      { name: "PulseCheck", desc: "Real-time sentiment analysis and surveys.", id: "products" },
      { name: "Wellbeing AI", desc: "Personalized employee wellness programs.", id: "products" }
    ],
    dashboard: 'hiring' // Reusing hiring for simplicity
  },
  {
    title: "Onboarding & People", // Added missing category handling from prompt
    icon: <Users className="w-6 h-6 text-indigo-600" />,
    description: "Create seamless employee experiences.",
    products: [
      { name: "OnboardPro", desc: "Digital onboarding and provisioning.", id: "onboard-pro" },
      { name: "PeopleHub", desc: "Core HR and employee self-service.", id: "people-hub" }
    ],
    dashboard: 'hiring'
  },
  {
    title: "Analytics & Intelligence",
    icon: <BarChart3 className="w-6 h-6 text-indigo-600" />,
    description: "Deep insights into your people data.",
    products: [
      { name: "People Intelligence Cloud", desc: "Cross-module analytics and reporting.", id: "people-intelligence-cloud" }
    ],
    dashboard: 'executive'
  }
];

export function Products({ onNavigate }: { onNavigate: (page: any) => void }) {
  return (
    <div className="bg-slate-50 min-h-screen pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">A complete suite for the modern workforce</h1>
          <p className="text-xl text-slate-600">
            Integrated modules that work better together. Choose what you need now, add more as you grow.
          </p>
        </div>

        <div className="space-y-24">
          {productGroups.map((group, index) => (
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              key={group.title} 
              className={`flex flex-col lg:flex-row gap-12 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
            >
              <div className="flex-1">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="p-3 bg-white rounded-xl shadow-sm border border-slate-100">
                    {group.icon}
                  </div>
                  <h2 className="text-2xl font-bold text-slate-900">{group.title}</h2>
                </div>
                <p className="text-lg text-slate-600 mb-8">{group.description}</p>
                
                <div className="grid gap-4">
                  {group.products.map((product) => (
                    <div key={product.name} className="bg-white p-6 rounded-xl border border-slate-200 hover:border-indigo-300 transition-colors shadow-sm group cursor-pointer" onClick={() => onNavigate(product.id)}>
                      <div className="flex justify-between items-center mb-2">
                        <h3 className="font-semibold text-slate-900 group-hover:text-indigo-600 transition-colors">{product.name}</h3>
                        <ArrowRight className="w-4 h-4 text-slate-300 group-hover:text-indigo-600 transition-colors" />
                      </div>
                      <p className="text-sm text-slate-500">{product.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="flex-1 w-full">
                <div className="bg-white p-2 rounded-2xl shadow-xl border border-slate-200">
                   <div className="bg-slate-50 rounded-xl overflow-hidden border border-slate-100">
                      <MockDashboard variant={group.dashboard as any} compact className="scale-100 shadow-none border-0" />
                   </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-24 bg-indigo-600 rounded-3xl p-12 text-center text-white">
           <h2 className="text-3xl font-bold mb-6">Not sure where to start?</h2>
           <p className="text-indigo-100 mb-8 max-w-2xl mx-auto">Our solution experts can help you build the perfect stack for your organization's specific needs and compliance requirements.</p>
           <button onClick={() => onNavigate('demo')} className="px-8 py-3 bg-white text-indigo-600 rounded-lg font-semibold hover:bg-indigo-50 transition-colors">
             Get a Custom Recommendation
           </button>
        </div>
      </div>
    </div>
  );
}
