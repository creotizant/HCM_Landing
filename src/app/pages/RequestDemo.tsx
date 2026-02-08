import React, { useState } from 'react';
import { motion } from 'motion/react';
import { MockDashboard } from '@/app/components/MockDashboard';
import { CheckCircle2, ArrowRight } from 'lucide-react';

export function RequestDemo() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="min-h-screen pt-24 pb-20 bg-slate-50 flex items-center justify-center">
        <div className="max-w-md w-full bg-white p-8 rounded-2xl shadow-xl text-center">
          <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle2 className="w-8 h-8 text-emerald-600" />
          </div>
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Request Received!</h2>
          <p className="text-slate-600 mb-8">
            Thanks for your interest in Creotizant HCM. One of our solution consultants will be in touch within 24 hours to schedule your personalized demo.
          </p>
          <button onClick={() => window.location.reload()} className="text-indigo-600 font-medium hover:underline">
            Back to Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-24 pb-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl font-bold text-slate-900 mb-6">See Creotizant in action</h1>
            <p className="text-lg text-slate-600 mb-8">
              Discover how our AI-first platform can transform your workforce management. Get a tailored walkthrough of the modules that matter most to you.
            </p>

            <div className="space-y-6 mb-12">
              {[
                "Personalized tour of the platform",
                "Deep dive into AI capabilities",
                "Compliance & UK payroll Q&A",
                "Pricing and implementation timeline"
              ].map((item) => (
                <div key={item} className="flex items-center text-slate-700">
                  <CheckCircle2 className="w-5 h-5 text-indigo-600 mr-3" />
                  {item}
                </div>
              ))}
            </div>

            <div className="bg-white p-2 rounded-2xl shadow-xl border border-slate-200 hidden lg:block">
              <div className="bg-slate-50 rounded-xl overflow-hidden border border-slate-100 h-64 relative">
                <div className="absolute inset-0 bg-gradient-to-t from-white/80 to-transparent z-10 flex items-end justify-center pb-6">
                  <p className="text-sm font-medium text-slate-500">Live Interactive Preview Available in Demo</p>
                </div>
                <MockDashboard variant="executive" compact className="scale-75 origin-top-left w-[133%]" />
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white rounded-2xl shadow-xl border border-slate-200 p-8"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">First Name</label>
                  <input required type="text" className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-indigo-600 focus:border-transparent outline-none transition-all" placeholder="Jane" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Last Name</label>
                  <input required type="text" className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-indigo-600 focus:border-transparent outline-none transition-all" placeholder="Doe" />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Work Email</label>
                <input required type="email" className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-indigo-600 focus:border-transparent outline-none transition-all" placeholder="jane@company.com" />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Company Name</label>
                <input required type="text" className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-indigo-600 focus:border-transparent outline-none transition-all" placeholder="Acme Corp" />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Company Size</label>
                  <select className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-indigo-600 focus:border-transparent outline-none transition-all bg-white">
                    <option>50-250</option>
                    <option>251-1000</option>
                    <option>1001-5000</option>
                    <option>5000+</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Country</label>
                  <select className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-indigo-600 focus:border-transparent outline-none transition-all bg-white">
                    <option>United Kingdom</option>
                    <option>United States</option>
                    <option>Europe (Other)</option>
                    <option>Asia Pacific</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Primary Interest</label>
                <select className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-indigo-600 focus:border-transparent outline-none transition-all bg-white">
                  <option>Workforce Planning & Analytics</option>
                  <option>Talent Acquisition</option>
                  <option>Payroll & Compliance</option>
                  <option>Full Platform Suite</option>
                </select>
              </div>

              <button type="submit" className="w-full py-4 bg-indigo-600 text-white rounded-lg font-bold text-lg hover:bg-indigo-700 transition-colors shadow-lg shadow-indigo-200 flex items-center justify-center">
                Request Demo <ArrowRight className="ml-2 w-5 h-5" />
              </button>

              <p className="text-xs text-slate-500 text-center mt-4">
                By submitting this form, you agree to our Privacy Policy. We store your data securely in the UK.
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
