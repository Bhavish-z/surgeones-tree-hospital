import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TrustStrip from './components/TrustStrip';
import About from './components/About';
import Specialities from './components/Specialities';
import WhyChooseUs from './components/WhyChooseUs';
import PatientReviews from './components/PatientReviews';
import FAQ from './components/FAQ';
import Gallery from './components/Gallery';
import WhatsAppBooking from './components/WhatsAppBooking';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FloatingActions from './components/FloatingActions';

export default function App() {
  const [selectedDept, setSelectedDept] = useState<string>('General Surgery');

  const scrollToBooking = (deptName?: string) => {
    if (deptName) {
      setSelectedDept(deptName);
    }
    const element = document.getElementById('book-appointment');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToSpecialities = () => {
    const element = document.getElementById('specialities');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAFCFF] text-slate-900">
      {/* Sticky Transparent Navbar */}
      <Navbar onBookClick={() => scrollToBooking()} />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero onBookClick={() => scrollToBooking()} />

        {/* Trust Strip */}
        <TrustStrip />

        {/* About Section */}
        <About onExploreSpecialities={scrollToSpecialities} />

        {/* Specialities Section */}
        <Specialities onSelectDepartment={(dept) => scrollToBooking(dept)} />

        {/* Why Choose Us */}
        <WhyChooseUs />

        {/* Patient Reviews */}
        <PatientReviews />

        {/* Frequently Asked Questions */}
        <FAQ />

        {/* Hospital Gallery with Lightbox */}
        <Gallery />

        {/* WhatsApp Appointment Booking (Main CTA) */}
        <WhatsAppBooking selectedDept={selectedDept} />

        {/* Contact Section */}
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating WhatsApp & Sticky Mobile Action Bar */}
      <FloatingActions />
    </div>
  );
}
