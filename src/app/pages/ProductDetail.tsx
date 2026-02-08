import React from 'react';
import { motion } from 'motion/react';
import { ProductVisual } from '@/app/components/ProductVisual';
import { productsData } from '@/app/data/products';
import { CheckCircle2, ArrowRight } from 'lucide-react';

interface ProductDetailProps {
  productId: string;
  onNavigate: (page: any) => void;
}

export function ProductDetail({ productId, onNavigate }: ProductDetailProps) {
  const product = productsData[productId];

  if (!product) {
    return <div className="pt-32 text-center">Product not found</div>;
  }

  return (
    <div className="bg-white min-h-screen pt-24 pb-20">
      {/* Hero */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="text-center max-w-4xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block px-3 py-1 rounded-full bg-indigo-50 text-indigo-700 text-sm font-medium mb-6"
          >
            {product.category}
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl lg:text-6xl font-bold text-slate-900 mb-6 tracking-tight"
          >
            {product.hero.title}
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-slate-600 mb-10"
          >
            {product.hero.subtitle}
          </motion.p>
          <motion.div 
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ delay: 0.3 }}
             className="flex justify-center space-x-4"
          >
             <button onClick={() => onNavigate('demo')} className="px-8 py-3 bg-indigo-600 text-white rounded-lg font-bold hover:bg-indigo-700 transition-colors shadow-lg shadow-indigo-200">
                Book a Demo
             </button>
             <button onClick={() => onNavigate('pricing')} className="px-8 py-3 bg-white text-slate-700 border border-slate-200 rounded-lg font-bold hover:bg-slate-50 transition-colors">
                View Pricing
             </button>
          </motion.div>
        </div>
      </section>

      {/* Main Visual */}
      <section className="max-w-6xl mx-auto px-4 mb-24">
        <motion.div
           initial={{ opacity: 0, scale: 0.95 }}
           animate={{ opacity: 1, scale: 1 }}
           transition={{ delay: 0.4, duration: 0.5 }}
           className="relative"
        >
            <div className="absolute -inset-4 bg-gradient-to-r from-indigo-500/20 to-violet-500/20 blur-xl -z-10 rounded-3xl"></div>
            <ProductVisual variant={product.visualVariant} className="shadow-2xl" />
        </motion.div>
      </section>

      {/* Capabilities */}
      <section className="bg-slate-50 py-20 border-y border-slate-100">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-16 items-center">
               <div>
                  <h2 className="text-3xl font-bold text-slate-900 mb-6">Key Capabilities</h2>
                  <div className="space-y-4">
                     {product.keyCapabilities.map((cap, i) => (
                        <motion.div 
                           initial={{ opacity: 0, x: -20 }}
                           whileInView={{ opacity: 1, x: 0 }}
                           viewport={{ once: true }}
                           transition={{ delay: i * 0.1 }}
                           key={i} 
                           className="flex items-start"
                        >
                           <div className="mt-1 mr-4 bg-indigo-100 p-1 rounded-full">
                              <CheckCircle2 className="w-5 h-5 text-indigo-600" />
                           </div>
                           <span className="text-lg text-slate-700">{cap}</span>
                        </motion.div>
                     ))}
                  </div>
               </div>
               <div>
                  <div className="grid grid-cols-2 gap-6">
                     {product.outcomes.map((outcome, i) => (
                        <div key={i} className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
                           <div className="text-4xl font-bold text-indigo-600 mb-2">{outcome.value}</div>
                           <div className="text-sm font-medium text-slate-500">{outcome.label}</div>
                        </div>
                     ))}
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* Workflow */}
      <section className="py-24">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
               <h2 className="text-3xl font-bold text-slate-900">How it works</h2>
            </div>
            
            <div className="relative">
               {/* Connecting Line */}
               <div className="hidden md:block absolute top-8 left-0 right-0 h-0.5 bg-slate-200 z-0"></div>
               
               <div className="grid md:grid-cols-4 gap-8 relative z-10">
                  {product.workflow.map((step, i) => (
                     <motion.div 
                        key={i}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.2 }}
                        className="bg-white pt-8"
                     >
                        <div className="w-16 h-16 bg-white border-4 border-indigo-50 rounded-full flex items-center justify-center text-xl font-bold text-indigo-600 mb-6 mx-auto relative z-10 shadow-sm">
                           {step.step}
                        </div>
                        <div className="text-center px-4">
                           <h3 className="text-lg font-bold text-slate-900 mb-2">{step.title}</h3>
                           <p className="text-slate-600 text-sm">{step.desc}</p>
                        </div>
                     </motion.div>
                  ))}
               </div>
            </div>
         </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-indigo-600 py-20">
         <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-white mb-6">Ready to see {product.name} in action?</h2>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
               <button onClick={() => onNavigate('demo')} className="px-8 py-4 bg-white text-indigo-600 rounded-xl font-bold hover:bg-indigo-50 transition-colors shadow-lg">
                  Request Personalized Demo
               </button>
            </div>
         </div>
      </section>
    </div>
  );
}
