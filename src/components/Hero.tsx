import { MessageSquare, Phone, Star, Shield, Clock } from 'lucide-react';
import { motion } from 'motion/react';
import { HOSPITAL_INFO } from '../data/hospitalData';

interface HeroProps {
  onBookClick: () => void;
}

export default function Hero({ onBookClick }: HeroProps) {
  return (
    <section className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden bg-gradient-to-b from-blue-50/40 via-white to-slate-50/50">
      {/* Soft ambient background glow */}
      <div className="absolute top-12 left-1/2 -translate-x-1/2 w-[800px] h-[360px] bg-gradient-to-tr from-emerald-100/40 via-sky-100/30 to-transparent blur-3xl -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          {/* Left Column: Copy & CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 flex flex-col justify-center space-y-6"
          >
            {/* Clean unboxed metadata kicker */}
            <div className="flex items-center gap-2 text-xs font-semibold tracking-wide text-emerald-800">
              <span className="inline-block w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>Open 24 Hours in Hyderabad</span>
              <span aria-hidden="true" className="text-slate-300">·</span>
              <span className="font-telugu text-slate-600 font-medium">సర్జెన్స్ ట్రీ హాస్పిటల్స్</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 leading-[1.15] text-balance">
              Advanced Surgical Care You Can Trust
            </h1>

            {/* Subtitle - exactly 1-2 lines as requested */}
            <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed max-w-xl">
              24/7 expert care with experienced surgeons and faster recovery.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href={`https://wa.me/${HOSPITAL_INFO.whatsappNumber}?text=${encodeURIComponent(
                  'Hello Surgeons Tree Hospitals, I would like to book an appointment.'
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-5 py-3 text-sm font-semibold text-white bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 rounded-xl shadow-sm hover:shadow-md transition-all duration-150 whitespace-nowrap focus:outline-hidden focus-visible:ring-2 focus-visible:ring-emerald-500"
              >
                <MessageSquare className="w-4 h-4 fill-white/20" />
                <span>Book on WhatsApp</span>
              </a>

              <a
                href={`tel:${HOSPITAL_INFO.phone}`}
                className="inline-flex items-center justify-center gap-2 px-5 py-3 text-sm font-semibold text-slate-800 bg-white hover:bg-slate-50 active:bg-slate-100 rounded-xl border border-slate-200/80 shadow-xs hover:shadow-sm transition-all duration-150 whitespace-nowrap focus:outline-hidden focus-visible:ring-2 focus-visible:ring-slate-400"
              >
                <Phone className="w-4 h-4 text-emerald-600" />
                <span>Call Now</span>
              </a>
            </div>

            {/* Trust Proof Adjacent to Headline */}
            <div className="pt-3 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-slate-600">
              <div className="flex items-center gap-1.5">
                <div className="flex text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-current" />
                  ))}
                </div>
                <span className="font-bold text-slate-900">{HOSPITAL_INFO.rating}★</span>
                <span className="text-slate-500">({HOSPITAL_INFO.reviewsCount} Google Reviews)</span>
              </div>
              <span aria-hidden="true" className="text-slate-300 hidden sm:inline">·</span>
              <div className="flex items-center gap-1 text-slate-600">
                <Shield className="w-3.5 h-3.5 text-emerald-600" />
                <span>Cashless Insurance Supported</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Hero Visual inspired by reference design */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 relative"
          >
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Outer soft decorative aura */}
              <div className="absolute -inset-1.5 bg-gradient-to-tr from-emerald-500/10 via-sky-500/10 to-transparent rounded-3xl blur-md" />

              {/* Main image container */}
              <div className="relative overflow-hidden rounded-3xl bg-slate-100 shadow-xl border border-slate-200/70 aspect-[4/3] sm:aspect-[5/4] lg:aspect-[4/3]">
                <img
                  src={HOSPITAL_INFO.heroImage}
                  alt="Senior Surgical Specialists at Surgeons Tree Hospitals"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center"
                />

                {/* Subtle scrim for contrast */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent pointer-events-none" />

                {/* Floating Glass Pill 1: 24/7 Surgical Care */}
                <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-md px-3 py-1.5 rounded-xl shadow-md border border-white/60 flex items-center gap-2 text-xs font-semibold text-slate-800">
                  <div className="w-2 h-2 rounded-full bg-emerald-500" />
                  <span>24/7 Surgical Theatre</span>
                </div>

                {/* Floating Glass Pill 2: Faster Recovery */}
                <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md p-3 rounded-2xl shadow-lg border border-white/80 flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-lg bg-emerald-50 flex items-center justify-center text-emerald-700">
                      <Clock className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="font-bold text-slate-900">Faster Recovery</p>
                      <p className="text-[11px] text-slate-500">Minimally invasive keyhole procedures</p>
                    </div>
                  </div>
                  <button
                    onClick={onBookClick}
                    className="text-xs font-semibold text-emerald-700 hover:text-emerald-800 underline underline-offset-2 shrink-0 ml-2"
                  >
                    Book Now
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
