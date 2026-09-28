import { useState, useEffect } from 'react';
import { Phone, Calendar, Menu, X } from 'lucide-react';
import { HOSPITAL_INFO } from '../data/hospitalData';

interface NavbarProps {
  onBookClick: () => void;
}

export default function Navbar({ onBookClick }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Specialities', href: '#specialities' },
    { label: 'Why Us', href: '#why-us' },
    { label: 'Reviews', href: '#reviews' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-200 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-xs border-b border-slate-100 py-3.5'
          : 'bg-white/80 backdrop-blur-xs border-b border-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Zone 1: Single text element wordmark */}
          <a
            href="#"
            className="flex items-center gap-2.5 group focus:outline-hidden focus-visible:ring-2 focus-visible:ring-emerald-500 rounded-lg"
          >
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-emerald-600 to-teal-700 flex items-center justify-center text-white shadow-xs group-hover:scale-105 transition-transform duration-200">
              <svg
                viewBox="0 0 24 24"
                className="w-5 h-5 fill-none stroke-current stroke-2 stroke-linecap-round stroke-linejoin-round"
              >
                {/* Stylized Surgeons Tree symbol */}
                <path d="M12 22v-9" />
                <path d="M9 13c-2.5 0-4-1.5-4-4a4 4 0 0 1 8 0c0 2.5-1.5 4-4 4Z" />
                <path d="M15 13c2.5 0 4-1.5 4-4a4 4 0 0 0-8 0" />
                <path d="M12 7V3m-2 2h4" />
              </svg>
            </div>
            <div className="flex flex-col">
              <span className="text-base sm:text-lg font-bold tracking-tight text-slate-900 group-hover:text-emerald-700 transition-colors">
                Surgeons Tree Hospitals
              </span>
              <span className="text-[11px] font-medium text-slate-500 font-telugu leading-tight">
                {HOSPITAL_INFO.teluguName}
              </span>
            </div>
          </a>

          {/* Zone 2: 4-6 clean text navigation links */}
          <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-slate-600">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="hover:text-emerald-700 transition-colors py-1 relative after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-emerald-600 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-150"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Zone 3: 1-2 primary actions */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={`tel:${HOSPITAL_INFO.phone}`}
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-700 hover:text-emerald-700 px-3 py-2 rounded-lg border border-slate-200 hover:border-slate-300 hover:bg-slate-50 transition-colors whitespace-nowrap"
            >
              <Phone className="w-3.5 h-3.5 text-emerald-600" />
              <span>{HOSPITAL_INFO.phone}</span>
            </a>

            <button
              onClick={onBookClick}
              className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-white bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 rounded-lg shadow-xs hover:shadow-sm transition-all whitespace-nowrap focus:outline-hidden focus-visible:ring-2 focus-visible:ring-emerald-500"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Book Appointment</span>
            </button>
          </div>

          {/* Mobile menu toggle button */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              onClick={onBookClick}
              className="px-2.5 py-1.5 text-xs font-semibold text-white bg-emerald-600 rounded-lg shadow-xs"
            >
              Book
            </button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-slate-600 hover:text-slate-900 rounded-lg hover:bg-slate-100 focus:outline-hidden"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile dropdown drawer */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white/98 backdrop-blur-md border-b border-slate-200 px-4 pt-3 pb-5 space-y-3 shadow-lg">
          <div className="flex flex-col space-y-2 pt-1 pb-3 border-b border-slate-100">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-sm font-medium text-slate-700 hover:text-emerald-700 py-1.5 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
          <div className="pt-2 flex flex-col gap-2.5">
            <a
              href={`tel:${HOSPITAL_INFO.phone}`}
              className="flex items-center justify-center gap-2 py-2.5 text-xs font-semibold text-slate-800 bg-slate-50 border border-slate-200 rounded-lg"
            >
              <Phone className="w-4 h-4 text-emerald-600" />
              <span>Call: {HOSPITAL_INFO.phone}</span>
            </a>
            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
                onBookClick();
              }}
              className="flex items-center justify-center gap-2 py-2.5 text-xs font-semibold text-white bg-emerald-600 rounded-lg shadow-xs"
            >
              <Calendar className="w-4 h-4" />
              <span>Book on WhatsApp</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
