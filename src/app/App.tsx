import React, { useState, useEffect, Suspense, lazy } from 'react';
import { Navbar } from '@/app/components/Navbar';
import { Footer } from '@/app/components/Footer';
import { initEmailJS } from '@/app/lib/emailjs';
import { productsData } from '@/app/data/products';

import { Homepage } from '@/app/pages/Homepage';

// Lazy load other pages for better performance
const Products = lazy(() => import('@/app/pages/Products').then(m => ({ default: m.Products })));
const Solutions = lazy(() => import('@/app/pages/Solutions').then(m => ({ default: m.Solutions })));
const Industries = lazy(() => import('@/app/pages/Industries').then(m => ({ default: m.Industries })));
const Platform = lazy(() => import('@/app/pages/Platform').then(m => ({ default: m.Platform })));
const Why = lazy(() => import('@/app/pages/Why').then(m => ({ default: m.Why })));
const Resources = lazy(() => import('@/app/pages/Resources').then(m => ({ default: m.Resources })));
const Pricing = lazy(() => import('@/app/pages/Pricing').then(m => ({ default: m.Pricing })));
const RequestDemo = lazy(() => import('@/app/pages/RequestDemo').then(m => ({ default: m.RequestDemo })));
const ProductDetail = lazy(() => import('@/app/pages/ProductDetail').then(m => ({ default: m.ProductDetail })));
const ContactUs = lazy(() => import('@/app/pages/ContactUs').then(m => ({ default: m.ContactUs })));

// Disable visible loading states to prevent flickering as requested
const PageLoader = () => null;


// Helper type to include product IDs
type Page = 'home' | 'products' | 'solutions' | 'industries' | 'platform' | 'why' | 'resources' | 'pricing' | 'demo' | 'contact' | string;

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');

  useEffect(() => {
    initEmailJS();
  }, []);

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
        <Suspense fallback={<PageLoader />}>
          {renderPage()}
        </Suspense>
      </main>
      <Footer onNavigate={setCurrentPage} />
    </div>
  );
}
