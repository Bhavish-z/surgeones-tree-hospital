import { Phone, MessageSquare, MapPin } from 'lucide-react';
import { HOSPITAL_INFO } from '../data/hospitalData';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-24 md:pb-16 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-slate-800">
          {/* Col 1: Brand */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-emerald-500 flex items-center justify-center text-slate-950 font-bold">
                <svg
                  viewBox="0 0 24 24"
                  className="w-5 h-5 fill-none stroke-current stroke-2 stroke-linecap-round stroke-linejoin-round"
                >
                  <path d="M12 22v-9" />
                  <path d="M9 13c-2.5 0-4-1.5-4-4a4 4 0 0 1 8 0c0 2.5-1.5 4-4 4Z" />
                  <path d="M15 13c2.5 0 4-1.5 4-4a4 4 0 0 0-8 0" />
                  <path d="M12 7V3m-2 2h4" />
                </svg>
              </div>
              <div>
                <span className="text-base font-bold text-white tracking-tight">
                  Surgeons Tree Hospitals
                </span>
                <span className="block text-xs text-slate-400 font-telugu">
                  {HOSPITAL_INFO.teluguName}
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-400 max-w-sm leading-relaxed">
              24/7 advanced surgical and laparoscopic care in Balanagar, Hyderabad.
              Experienced surgeons, modern operation suites, and faster patient recovery.
            </p>

            <div className="pt-1 flex items-center gap-4 text-xs text-slate-400">
              <span className="text-emerald-400 font-semibold">4.6★ Rated</span>
              <span aria-hidden="true">·</span>
              <span>194 Reviews</span>
              <span aria-hidden="true">·</span>
              <span>Open 24 Hours</span>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="md:col-span-3 space-y-3">
            <p className="text-xs font-semibold text-white uppercase tracking-wider">
              Quick Navigation
            </p>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <a href="#about" className="hover:text-white transition-colors">
                  About Hospitals
                </a>
              </li>
              <li>
                <a href="#specialities" className="hover:text-white transition-colors">
                  Surgical Specialities
                </a>
              </li>
              <li>
                <a href="#why-us" className="hover:text-white transition-colors">
                  Why Choose Us
                </a>
              </li>
              <li>
                <a href="#reviews" className="hover:text-white transition-colors">
                  Patient Reviews
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-white transition-colors">
                  FAQ & Patient Guide
                </a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-white transition-colors">
                  Hospital Facilities
                </a>
              </li>
              <li>
                <a href="#book-appointment" className="hover:text-white transition-colors">
                  Book on WhatsApp
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Contact & Address */}
          <div className="md:col-span-4 space-y-3">
            <p className="text-xs font-semibold text-white uppercase tracking-wider">
              Emergency & Reception
            </p>
            <div className="space-y-2.5 text-xs text-slate-300">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span className="leading-relaxed">
                  {HOSPITAL_INFO.address}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                <a href={`tel:${HOSPITAL_INFO.phone}`} className="hover:text-white transition-colors">
                  {HOSPITAL_INFO.phone}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <MessageSquare className="w-4 h-4 text-emerald-400 shrink-0" />
                <a
                  href={`https://wa.me/${HOSPITAL_INFO.whatsappNumber}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  WhatsApp: +{HOSPITAL_INFO.whatsappNumber}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-3">
          <p>
            &copy; {currentYear} Surgeons Tree Hospitals (సర్జెన్స్ ట్రీ హాస్పిటల్స్). All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-slate-300 transition-colors">Privacy</a>
            <span>·</span>
            <a href="#" className="hover:text-slate-300 transition-colors">Terms of Care</a>
            <span>·</span>
            <a href={HOSPITAL_INFO.googleMapsUrl} target="_blank" rel="noopener noreferrer" className="hover:text-slate-300 transition-colors">
              Balanagar, Hyderabad
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
