import { Star, CheckCircle } from 'lucide-react';
import { PATIENT_REVIEWS, HOSPITAL_INFO } from '../data/hospitalData';

export default function PatientReviews() {
  return (
    <section id="reviews" className="py-20 bg-white border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header with 4.6★ • 194 Reviews display */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-xl">
            <p className="text-xs font-semibold text-emerald-700 uppercase tracking-wider mb-2">
              Patient Experiences
            </p>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
              Patient Reviews
            </h2>
            <p className="mt-2 text-sm text-slate-600">
              Read real treatment outcomes from patients treated at Surgeons Tree Hospitals.
            </p>
          </div>

          {/* Prominent rating display */}
          <div className="flex items-center gap-3 bg-slate-50 border border-slate-200/80 px-4 py-3 rounded-2xl shrink-0">
            <div className="flex text-amber-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-current" />
              ))}
            </div>
            <div className="flex items-center gap-1.5 text-sm font-semibold text-slate-900 tabular-nums">
              <span>{HOSPITAL_INFO.rating}★</span>
              <span aria-hidden="true" className="text-slate-300">·</span>
              <span className="text-slate-600 font-normal">{HOSPITAL_INFO.reviewsCount} Google Reviews</span>
            </div>
          </div>
        </div>

        {/* Minimal Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {PATIENT_REVIEWS.map((review) => (
            <div
              key={review.id}
              className="bg-[#FAFCFF] rounded-2xl p-6 border border-slate-200/70 shadow-2xs hover:shadow-sm transition-shadow flex flex-col justify-between"
            >
              <div>
                <div className="flex text-amber-400 mb-3">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-current" />
                  ))}
                </div>

                {/* Minimal, 1-2 line review text as requested */}
                <p className="text-sm font-medium text-slate-800 italic leading-snug">
                  "{review.text}"
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs font-bold text-slate-900">
                      {review.author}
                    </p>
                    <p className="text-[11px] text-slate-500">
                      {review.treatment}
                    </p>
                  </div>
                  <div className="flex items-center gap-1 text-[11px] text-emerald-700 font-medium">
                    <CheckCircle className="w-3 h-3" />
                    <span>Verified</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
