import { MessageSquare, Phone } from 'lucide-react';
import { HOSPITAL_INFO } from '../data/hospitalData';

export default function FloatingActions() {
  const whatsappUrl = `https://wa.me/${HOSPITAL_INFO.whatsappNumber}?text=${encodeURIComponent(
    'Hello Surgeons Tree Hospitals, I would like to book an appointment.'
  )}`;

  return (
    <>
      {/* Floating WhatsApp button on desktop (bottom right) */}
      <aside aria-label="Quick contact" className="hidden md:block fixed bottom-6 right-6 z-40 group">
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2.5 bg-emerald-600 hover:bg-emerald-700 text-white pl-4 pr-5 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0 focus:outline-hidden focus-visible:ring-2 focus-visible:ring-emerald-400"
          aria-label="Chat on WhatsApp"
        >
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-300 opacity-75" />
            <span className="relative inline-flex rounded-full h-3 w-3 bg-white" />
          </span>
          <MessageSquare className="w-5 h-5 fill-white/20" />
          <span className="text-xs font-bold tracking-wide">WhatsApp Us</span>
        </a>
      </aside>

      {/* Sticky Mobile Bottom Bar (Call + WhatsApp) */}
      {/* Kept ultra compact (under 56px) to strictly respect the 15% mobile viewport cap */}
      <aside
        aria-label="Mobile quick actions"
        className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-slate-200/90 py-2.5 px-4 shadow-lg"
      >
        <div className="grid grid-cols-2 gap-3 max-w-sm mx-auto">
          {/* Call button */}
          <a
            href={`tel:${HOSPITAL_INFO.phone}`}
            className="flex items-center justify-center gap-1.5 py-2.5 px-3 bg-slate-900 text-white rounded-xl text-xs font-semibold shadow-xs active:bg-slate-800 transition-colors"
          >
            <Phone className="w-3.5 h-3.5" />
            <span>Call Now</span>
          </a>

          {/* WhatsApp button */}
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-1.5 py-2.5 px-3 bg-emerald-600 text-white rounded-xl text-xs font-semibold shadow-xs active:bg-emerald-700 transition-colors"
          >
            <MessageSquare className="w-3.5 h-3.5 fill-white/20" />
            <span>WhatsApp</span>
          </a>
        </div>
      </aside>
    </>
  );
}
