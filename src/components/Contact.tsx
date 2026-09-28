import { Phone, MessageSquare, MapPin, Clock, Navigation } from 'lucide-react';
import { HOSPITAL_INFO } from '../data/hospitalData';

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-[#FAFCFF] border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header - 1-2 lines */}
        <div className="max-w-2xl mb-12">
          <p className="text-xs font-semibold text-emerald-700 uppercase tracking-wider mb-2">
            Visit & Contact
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
            Contact Hospital
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-600">
            We are accessible round the clock for planned surgeries and emergency admissions.
          </p>
        </div>

        {/* Contact Grid: Essential Details */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Phone */}
          <div className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-2xs hover:shadow-xs transition-shadow">
            <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center mb-4">
              <Phone className="w-5 h-5" />
            </div>
            <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
              Phone Support
            </p>
            <p className="text-base font-bold text-slate-900 mt-1">
              {HOSPITAL_INFO.phone}
            </p>
            <a
              href={`tel:${HOSPITAL_INFO.phone}`}
              className="mt-4 inline-flex items-center text-xs font-semibold text-emerald-700 hover:text-emerald-800"
            >
              Call Now &rarr;
            </a>
          </div>

          {/* WhatsApp */}
          <div className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-2xs hover:shadow-xs transition-shadow">
            <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center mb-4">
              <MessageSquare className="w-5 h-5" />
            </div>
            <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
              WhatsApp Desk
            </p>
            <p className="text-base font-bold text-slate-900 mt-1">
              {HOSPITAL_INFO.phone}
            </p>
            <a
              href={`https://wa.me/${HOSPITAL_INFO.whatsappNumber}?text=${encodeURIComponent(
                'Hello Surgeons Tree Hospitals, I would like to inquire about hospital services.'
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center text-xs font-semibold text-emerald-700 hover:text-emerald-800"
            >
              WhatsApp &rarr;
            </a>
          </div>

          {/* Hours */}
          <div className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-2xs hover:shadow-xs transition-shadow">
            <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center mb-4">
              <Clock className="w-5 h-5" />
            </div>
            <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
              Hospital Hours
            </p>
            <p className="text-base font-bold text-slate-900 mt-1">
              {HOSPITAL_INFO.hours}
            </p>
            <p className="mt-4 text-xs text-slate-500">
              Casualty & OT always operational
            </p>
          </div>

          {/* Location & Directions */}
          <div className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-2xs hover:shadow-xs transition-shadow flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center mb-4">
                <MapPin className="w-5 h-5" />
              </div>
              <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                Address
              </p>
              <p className="text-xs text-slate-700 mt-1.5 leading-relaxed line-clamp-2">
                {HOSPITAL_INFO.address}
              </p>
            </div>
            <div className="mt-4">
              <a
                href={HOSPITAL_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-1.5 w-full py-2 px-3 text-xs font-semibold text-white bg-slate-900 hover:bg-slate-800 rounded-lg transition-colors"
              >
                <Navigation className="w-3.5 h-3.5" />
                <span>Get Directions</span>
              </a>
            </div>
          </div>
        </div>

        {/* Location Banner */}
        <div className="mt-8 bg-white border border-slate-200/80 rounded-2xl p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-emerald-100/60 flex items-center justify-center text-emerald-800 shrink-0">
              <MapPin className="w-4 h-4" />
            </div>
            <div>
              <p className="text-sm font-bold text-slate-900">
                Surgeons Tree Hospitals (సర్జెన్స్ ట్రీ హాస్పిటల్స్)
              </p>
              <p className="text-xs text-slate-600">
                4-83, Bhadurpally, Towards Balanagar Road, Balanagar, Hyderabad, Telangana 500043
              </p>
            </div>
          </div>
          <a
            href={HOSPITAL_INFO.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-emerald-700 bg-emerald-50 hover:bg-emerald-100 rounded-lg transition-colors shrink-0"
          >
            <span>Open in Google Maps</span>
            &rarr;
          </a>
        </div>
      </div>
    </section>
  );
}
