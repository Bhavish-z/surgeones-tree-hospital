import { CheckCircle2, MapPin, ArrowRight } from 'lucide-react';
import { HOSPITAL_INFO } from '../data/hospitalData';

interface AboutProps {
  onExploreSpecialities: () => void;
}

export default function About({ onExploreSpecialities }: AboutProps) {
  const highlights = [
    "State-of-the-art sterile modular operation theatres",
    "Minimally invasive laparoscopic & laser procedures",
    "Comprehensive post-operative recovery monitoring",
  ];

  return (
    <section id="about" className="py-20 md:py-28 bg-[#FAFCFF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Visual Side */}
          <div className="lg:col-span-6 order-2 lg:order-1">
            <div className="relative rounded-3xl overflow-hidden shadow-lg border border-slate-200/80 bg-slate-100 aspect-[4/3]">
              <img
                src={HOSPITAL_INFO.heroImage}
                alt="Surgeons Tree Hospitals Hyderabad"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent" />
              <div className="absolute bottom-5 left-5 right-5 text-white">
                <div className="flex items-center gap-2 text-xs font-medium text-emerald-300 mb-1">
                  <MapPin className="w-3.5 h-3.5" />
                  <span>Balanagar, Hyderabad</span>
                </div>
                <p className="text-sm font-semibold text-white/95">
                  Center of Surgical Excellence & Advanced Laparoscopy
                </p>
              </div>
            </div>
          </div>

          {/* Text Side - 1 to 3 lines strictly as instructed */}
          <div className="lg:col-span-6 order-1 lg:order-2 space-y-6">
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-xs font-semibold text-emerald-700">
                <span>About Us</span>
                <span aria-hidden="true" className="text-slate-300">·</span>
                <span className="font-telugu text-slate-500 font-medium">సర్జెన్స్ ట్రీ హాస్పిటల్స్</span>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-slate-900">
                About Surgeons Tree Hospitals
              </h2>
            </div>

            {/* Exactly the requested text: 1-2 lines */}
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              Advanced surgical care with modern technology and patient-first treatment.
            </p>

            {/* Highlights */}
            <div className="pt-2 space-y-3">
              {highlights.map((item, idx) => (
                <div key={idx} className="flex items-start gap-3 text-sm text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <div className="pt-4">
              <button
                onClick={onExploreSpecialities}
                className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-700 hover:text-emerald-800 transition-colors group"
              >
                <span>Explore Surgical Specialities</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
