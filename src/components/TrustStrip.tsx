import { Clock, Star, Users, Award } from 'lucide-react';
import { HOSPITAL_INFO } from '../data/hospitalData';

export default function TrustStrip() {
  const trustMetrics = [
    {
      icon: Clock,
      title: "24/7 Hospital",
      subtitle: "Always open for emergencies",
      value: "24/7",
    },
    {
      icon: Star,
      title: `${HOSPITAL_INFO.rating}★ Rating`,
      subtitle: "Consistently rated top-tier",
      value: `${HOSPITAL_INFO.rating}★`,
    },
    {
      icon: Users,
      title: `${HOSPITAL_INFO.reviewsCount} Reviews`,
      subtitle: "Verified patient satisfaction",
      value: `${HOSPITAL_INFO.reviewsCount}+`,
    },
    {
      icon: Award,
      title: "Experienced Surgeons",
      subtitle: "Dedicated specialist teams",
      value: "15+ Yrs",
    },
  ];

  return (
    <section className="border-y border-slate-200/80 bg-white py-6 shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {trustMetrics.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="flex items-center gap-3.5 group"
              >
                <div className="w-11 h-11 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center text-emerald-700 group-hover:bg-emerald-50 group-hover:text-emerald-800 transition-colors shrink-0">
                  <Icon className="w-5 h-5" />
                </div>
                <div className="min-w-0">
                  <p className="text-sm font-bold text-slate-900 truncate">
                    {item.title}
                  </p>
                  <p className="text-xs text-slate-500 truncate">
                    {item.subtitle}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
