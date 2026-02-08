import React from 'react';
import { Linkedin, Facebook, Instagram } from 'lucide-react';
import logo from '@/app/assets/CreotizantMG-Gradient.png';

type Page = 'home' | 'products' | 'solutions' | 'industries' | 'platform' | 'why' | 'resources' | 'pricing' | 'demo' | 'contact' | string;

interface FooterProps {
  onNavigate: (page: Page) => void;
}

const footerSections = [
  {
    title: 'Platform',
    links: [
      { label: 'Products', page: 'products' },
      { label: 'Platform', page: 'platform' },
      { label: 'Solutions', page: 'solutions' },
      { label: 'Industries', page: 'industries' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'Why Creotizant', page: 'why' },
      { label: 'Pricing', page: 'pricing' },
      { label: 'Contact Us', page: 'contact' },
      { label: 'Request Demo', page: 'demo' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { label: 'Resources', page: 'resources' },
      { label: 'Homepage', page: 'home' },
    ],
  },
];

export function Footer({ onNavigate }: FooterProps) {
  return (
    <footer className="bg-slate-900 text-slate-300 py-16 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-12">
          <div className="col-span-2 lg:col-span-1">
            <div className="flex items-center mb-4">
              <img src={logo} alt="Creotizant HCM" className="h-10 w-auto mr-2" />
              <span className="font-bold text-xl text-white tracking-tight">Creotizant<span className="text-indigo-400">HCM</span></span>
            </div>
            <p className="text-sm text-slate-400 mb-4">
              Premium Creative Digital Agency based in the UK, working globally to turn bold ideas into high-performing digital brands.
            </p>
            <div className="mb-6 text-xs text-slate-500">
              <p>Creotizant Ltd is registered in England and Wales.</p>
              <p>Company Number: <span className="text-slate-400">1685414</span></p>
            </div>
            <div className="flex space-x-4">
              <a href="https://www.linkedin.com/company/creotizant/" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-white transition-colors"><Linkedin className="w-5 h-5" /></a>
              <a href="https://www.facebook.com/share/1MBhgxh7L3/?mibextid=wwXIfr" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-white transition-colors"><Facebook className="w-5 h-5" /></a>
              <a href="https://www.instagram.com/creotizant?igsh=dmNxeXFhdGp4cWcx" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-white transition-colors"><Instagram className="w-5 h-5" /></a>
            </div>
          </div>

          {footerSections.map((section) => (
            <div key={section.title}>
              <h4 className="font-semibold text-white mb-4">{section.title}</h4>
              <ul className="space-y-2 text-sm">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <button
                      type="button"
                      onClick={() => onNavigate(link.page)}
                      className="hover:text-indigo-400 transition-colors text-left"
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h4 className="font-semibold text-white mb-4">Contact</h4>
            <ul className="space-y-4 text-sm">
              <li>
                <a href="https://www.google.com/maps?q=124+City+Road,+London,+EC1V+2NX" target="_blank" rel="noreferrer" className="hover:text-indigo-400 transition-colors block leading-relaxed">
                  124 City Road, London,<br />EC1V 2NX
                </a>
              </li>
              <li>
                <a href="tel:+447831573818" className="hover:text-indigo-400 transition-colors block">
                  +44 7831 573 818
                </a>
              </li>
              <li>
                <a href="mailto:Sachintha@creotizant.com" className="hover:text-indigo-400 transition-colors block break-all">
                  Sachintha@creotizant.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center text-xs text-slate-500">
          <p>&copy; 2026 Creotizant HCM Cloud. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            {/* Links removed as per request */}
          </div>
        </div>
      </div>
    </footer>
  );
}
