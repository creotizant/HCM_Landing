import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'motion/react';
import { ChevronDown, Menu, X, Globe, ArrowRight } from 'lucide-react';
import { cn } from '@/app/lib/utils';
import { productsData } from '@/app/data/products';
import logo from '@/app/assets/CreotizantMG-Gradient.png';

type Page = 'home' | 'products' | 'solutions' | 'industries' | 'platform' | 'why' | 'resources' | 'pricing' | 'demo' | 'contact' | string;

interface NavbarProps {
  currentPage: Page;
  onNavigate: (page: Page) => void;
}

const productsMenu = [
  {
    category: "Workforce Planning",
    items: [
      { name: "Shortage Assistant", id: "shortage-assistant" },
      { name: "AI Workforce Planner", id: "ai-workforce-planner" }
    ]
  },
  {
    category: "Talent Acquisition",
    items: [
      { name: "HirelyAI", id: "hirely-ai" },
      { name: "RecruitFlow", id: "recruit-flow" },
      { name: "InterviewIQ", id: "interview-iq" }
    ]
  },
  {
    category: "Onboarding & People",
    items: [
      { name: "OnboardPro", id: "onboard-pro" },
      { name: "PeopleHub", id: "people-hub" }
    ]
  },
  {
    category: "Performance",
    items: [
      { name: "PerformEdge", id: "perform-edge" },
      { name: "SkillForge", id: "skill-forge" },
      { name: "CareerPath AI", id: "career-path-ai" }
    ]
  },
  {
    category: "Payroll & Compliance",
    items: [
      { name: "PayCore UK", id: "pay-core-uk" },
      { name: "TimeTrack Pro", id: "time-track-pro" },
      { name: "ComplianceGuard", id: "compliance-guard" }
    ]
  },
  {
    category: "Employee Experience",
    items: [
      { name: "PulseCheck", id: "products" },
      { name: "Wellbeing AI", id: "products" }
    ]
  },
  {
    category: "Analytics",
    items: [
      { name: "People Intelligence Cloud", id: "people-intelligence-cloud" }
    ]
  }
];

export function Navbar({ currentPage, onNavigate }: NavbarProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);

  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    if (latest > 50 && latest > previous) {
      setIsScrolled(true);
    } else if (latest < 50) {
      setIsScrolled(false);
    }
  });

  const handleNav = (page: Page) => {
    onNavigate(page);
    setIsMobileMenuOpen(false);
    setActiveDropdown(null);
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "circOut" }}
        className={cn(
          "fixed top-0 inset-x-0 z-50 flex justify-center transition-all duration-500",
          isScrolled ? "py-2" : "py-4 lg:py-6"
        )}
      >
        <div
          className={cn(
            "w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-500",
            isScrolled
              ? "bg-white/80 backdrop-blur-xl shadow-lg shadow-black/5 rounded-full border border-white/50 py-2 mx-4 max-w-[calc(100%-2rem)] lg:max-w-7xl"
              : "bg-transparent py-0"
          )}
        >
          <div className={cn("flex justify-between items-center transition-all duration-300", isScrolled ? "h-12" : "h-16")}>
            {/* Logo */}
            <div
              className={cn(
                "flex-shrink-0 flex items-center cursor-pointer transition-all hover:opacity-80",
                isScrolled ? "scale-90" : "scale-100"
              )}
              onClick={() => handleNav('home')}
            >
              <motion.div layoutId="logo-img">
                <img src={logo} alt="Creotizant Logo" className="h-8 lg:h-9 w-auto mr-3" />
              </motion.div>
              <div className="flex flex-col">
                <span className="font-bold text-lg lg:text-xl text-slate-900 tracking-tight leading-none">
                  Creotizant<span className="text-indigo-600">HCM</span>
                </span>
                {!isScrolled && <span className="text-[10px] text-slate-500 font-medium tracking-wider uppercase leading-none mt-0.5">Enterprise Suite</span>}
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className={cn(
              "hidden lg:flex items-center gap-1 rounded-full px-2 transition-all duration-300",
              !isScrolled && "bg-white/50 backdrop-blur-md border border-white/40 shadow-sm p-1.5"
            )}>
              <div
                className="relative group"
                onMouseEnter={() => setActiveDropdown('products')}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button
                  className={cn(
                    "flex items-center text-sm font-medium transition-all px-4 py-2 rounded-full",
                    (currentPage === 'products' || Object.keys(productsData).includes(currentPage))
                      ? "bg-slate-100 text-indigo-700 font-semibold"
                      : "text-slate-600 hover:text-indigo-600 hover:bg-slate-50"
                  )}
                  onClick={() => handleNav('products')}
                >
                  Products <ChevronDown className="ml-1 w-3.5 h-3.5 opacity-60" />
                </button>

                {/* Mega Menu */}
                <AnimatePresence>
                  {activeDropdown === 'products' && (
                    <motion.div
                      initial={{ opacity: 0, y: 15, scale: 0.98 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 15, scale: 0.98 }}
                      transition={{ duration: 0.2, ease: "easeOut" }}
                      className="absolute left-1/2 -translate-x-1/2 top-full mt-4 w-[900px] bg-white rounded-2xl shadow-2xl border border-slate-100 overflow-hidden p-8 grid grid-cols-3 gap-x-8 gap-y-8 z-50 ring-1 ring-black/5"
                    >
                      {productsMenu.map((group) => (
                        <div key={group.category} className="space-y-3">
                          <h3 className="font-bold text-slate-900 text-sm tracking-tight border-b border-slate-100 pb-2">{group.category}</h3>
                          <ul className="space-y-1.5">
                            {group.items.map((item) => (
                              <li key={item.id}>
                                <button
                                  onClick={() => handleNav(item.id)}
                                  className="group flex items-center w-full text-left px-3 py-2 text-sm text-slate-600 hover:text-indigo-700 hover:bg-indigo-50/60 rounded-lg transition-all"
                                >
                                  <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                                  {item.name}
                                </button>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                      <div className="col-span-3 mt-2 pt-6 border-t border-slate-100 flex justify-between items-center bg-slate-50/80 -mx-8 -mb-8 px-8 py-5">
                        <div className="flex items-center gap-4">
                          <div className="h-10 w-10 rounded-full bg-indigo-100 flex items-center justify-center">
                            <Globe className="h-5 w-5 text-indigo-600" />
                          </div>
                          <div>
                            <h4 className="font-semibold text-slate-900 text-sm">Global Workforce Intelligence</h4>
                            <p className="text-xs text-slate-500">Unify your data across 50+ countries.</p>
                          </div>
                        </div>
                        <button onClick={() => handleNav('demo')} className="flex items-center gap-2 text-indigo-600 font-semibold text-sm hover:underline">
                          Explore the platform <ArrowRight className="h-4 w-4" />
                        </button>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {['solutions', 'industries', 'platform', 'why', 'pricing'].map((item) => (
                <button
                  key={item}
                  onClick={() => handleNav(item as Page)}
                  className={cn(
                    "text-sm font-medium transition-all px-4 py-2 rounded-full capitalize",
                    currentPage === item
                      ? "bg-slate-100 text-indigo-700 font-semibold shadow-sm"
                      : "text-slate-600 hover:text-indigo-600 hover:bg-slate-50"
                  )}
                >
                  {item}
                </button>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="hidden lg:flex items-center gap-3">
              <button
                onClick={() => handleNav('contact')}
                className={cn(
                  "text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors px-3 py-2",
                  isScrolled ? "hidden xl:block" : "block"
                )}
              >
                Contact Sales
              </button>
              <button
                onClick={() => handleNav('demo')}
                className="group relative px-5 py-2.5 bg-slate-900 text-white text-sm font-medium rounded-full hover:bg-slate-800 shadow-md hover:shadow-xl transition-all hover:-translate-y-0.5 overflow-hidden"
              >
                <span className="relative z-10">Get Started</span>
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-md" />
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="lg:hidden flex items-center">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-slate-600 hover:text-slate-900 p-2 rounded-full hover:bg-slate-100"
              >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-white/95 backdrop-blur-xl lg:hidden pt-24 px-6 overflow-y-auto"
          >
            <div className="flex flex-col space-y-6 pb-12">
              <div className="space-y-4">
                <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">Product Suite</div>
                <div className="grid grid-cols-1 gap-1 pl-2">
                  {productsMenu.slice(0, 3).flatMap(g => g.items).map(item => ( // Show first few for brevity on mobile
                    <button key={item.id} onClick={() => handleNav(item.id)} className="text-left py-2 text-lg font-medium text-slate-800 border-b border-slate-100 last:border-0">
                      {item.name}
                    </button>
                  ))}
                  <button onClick={() => handleNav('products')} className="text-left py-2 text-sm font-semibold text-indigo-600">
                    View all products...
                  </button>
                </div>
              </div>

              <div className="space-y-4">
                <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">Explore</div>
                {['solutions', 'industries', 'platform', 'why', 'pricing', 'contact'].map((item) => (
                  <button
                    key={item}
                    onClick={() => handleNav(item as Page)}
                    className="text-left text-2xl font-bold text-slate-900 capitalize"
                  >
                    {item === 'contact' ? 'Contact Us' : item}
                  </button>
                ))}
              </div>

              <div className="pt-8">
                <button
                  onClick={() => handleNav('demo')}
                  className="w-full py-4 bg-indigo-600 text-white rounded-xl text-lg font-bold shadow-xl shadow-indigo-200"
                >
                  Book a Demo
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
