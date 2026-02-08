import React, { useState, useEffect } from 'react';
import { Navbar } from '@/app/components/Navbar';
import { Footer } from '@/app/components/Footer';
import { Homepage } from '@/app/pages/Homepage';
import { Products } from '@/app/pages/Products';
import { Solutions } from '@/app/pages/Solutions';
import { Industries } from '@/app/pages/Industries';
import { Platform } from '@/app/pages/Platform';
import { Why } from '@/app/pages/Why';
import { Resources } from '@/app/pages/Resources';
import { Pricing } from '@/app/pages/Pricing';
import { RequestDemo } from '@/app/pages/RequestDemo';
import { ProductDetail } from '@/app/pages/ProductDetail';
import { ContactUs } from '@/app/pages/ContactUs';
import { productsData } from '@/app/data/products';

// Helper type to include product IDs
type Page = 'home' | 'products' | 'solutions' | 'industries' | 'platform' | 'why' | 'resources' | 'pricing' | 'demo' | 'contact' | string;

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');

  // Scroll to top on navigation
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  const renderPage = () => {
    // Check if current page matches a product ID
    if (productsData[currentPage]) {
      return <ProductDetail productId={currentPage} onNavigate={setCurrentPage} />;
    }

    switch (currentPage) {
      case 'home':
        return <Homepage onNavigate={setCurrentPage} />;
      case 'products':
        return <Products onNavigate={setCurrentPage} />;
      case 'solutions':
        return <Solutions onNavigate={setCurrentPage} />;
      case 'industries':
        return <Industries onNavigate={setCurrentPage} />;
      case 'platform':
        return <Platform onNavigate={setCurrentPage} />;
      case 'why':
        return <Why onNavigate={setCurrentPage} />;
      case 'resources':
        return <Resources onNavigate={setCurrentPage} />;
      case 'pricing':
        return <Pricing onNavigate={setCurrentPage} />;
      case 'demo':
        return <RequestDemo />;
      case 'contact':
        return <ContactUs />;
      default:
        // Fallback for unknown routes
        return <Homepage onNavigate={setCurrentPage} />;
    }
  };

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 selection:bg-indigo-100 selection:text-indigo-900">
      <Navbar currentPage={currentPage} onNavigate={setCurrentPage} />
      <main>
        {renderPage()}
      </main>
      <Footer />
    </div>
  );
}
