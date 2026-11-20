import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { FloatingWhatsApp } from './components/layout/FloatingWhatsApp';
import { StickyMobileCTA } from './components/layout/StickyMobileCTA';
import { FreeTrialModal } from './components/modals/FreeTrialModal';
import { ScrollToTop } from './components/common/ScrollToTop';

import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { TrainingPage } from './pages/TrainingPage';
import { FacilitiesPage } from './pages/FacilitiesPage';
import { GalleryPage } from './pages/GalleryPage';
import { WhyUpliftPage } from './pages/WhyUpliftPage';
import { FAQPage } from './pages/FAQPage';
import { ContactPage } from './pages/ContactPage';

export const App: React.FC = () => {
  const [isFreeTrialModalOpen, setIsFreeTrialModalOpen] = useState(false);
  const [selectedProgram, setSelectedProgram] = useState<string>('Strength & Hypertrophy Training');

  const handleOpenFreeTrial = (programName?: string) => {
    if (programName) {
      setSelectedProgram(programName);
    }
    setIsFreeTrialModalOpen(true);
  };

  const handleCloseFreeTrial = () => {
    setIsFreeTrialModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-[#08090A] text-slate-100 flex flex-col selection:bg-brand-lime selection:text-black font-sans antialiased">
      {/* Scroll to Top on every route change */}
      <ScrollToTop />

      {/* Persistent Global Header */}
      <Header onOpenFreeTrial={() => handleOpenFreeTrial()} />

      {/* Main Multi-Page Route Outlet */}
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<HomePage onOpenFreeTrial={handleOpenFreeTrial} />} />
          <Route path="/about" element={<AboutPage onOpenFreeTrial={() => handleOpenFreeTrial()} />} />
          <Route path="/training" element={<TrainingPage onOpenFreeTrial={handleOpenFreeTrial} />} />
          <Route path="/facilities" element={<FacilitiesPage onOpenFreeTrial={() => handleOpenFreeTrial()} />} />
          <Route path="/gallery" element={<GalleryPage onOpenFreeTrial={() => handleOpenFreeTrial()} />} />
          <Route path="/why-uplift" element={<WhyUpliftPage onOpenFreeTrial={() => handleOpenFreeTrial()} />} />
          <Route path="/faq" element={<FAQPage />} />
          <Route path="/contact" element={<ContactPage />} />
          {/* Catch-all fallback redirecting to Home */}
          <Route path="*" element={<HomePage onOpenFreeTrial={handleOpenFreeTrial} />} />
        </Routes>
      </main>

      {/* Global Comprehensive Footer */}
      <Footer />

      {/* Persistent Floating WhatsApp CTA */}
      <FloatingWhatsApp />

      {/* Mobile Sticky 1-Tap Booking Bottom Bar */}
      <StickyMobileCTA onOpenFreeTrial={() => handleOpenFreeTrial()} />

      {/* Global Free Studio Trial Modal */}
      <FreeTrialModal
        isOpen={isFreeTrialModalOpen}
        onClose={handleCloseFreeTrial}
        preselectedProgram={selectedProgram}
      />
    </div>
  );
};

export default App;
