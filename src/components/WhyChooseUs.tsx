import {
  Award,
  Cpu,
  Zap,
  Clock,
  HeartHandshake,
  BadgePercent,
  CheckCircle2,
} from 'lucide-react';
import { WHY_CHOOSE_US } from '../data/hospitalData';

export default function WhyChooseUs() {
  const iconList = [
    Award,
    Cpu,
    Zap,
    Clock,
    HeartHandshake,
    BadgePercent,
  ];

  return (
    <section id="why-us" className="py-20 md:py-28 bg-[#FAFCFF] border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header - 1-2 lines */}
        <div className="max-w-2xl mb-14">
          <p className="text-xs font-semibold text-emerald-700 uppercase tracking-wider mb-2">
            Why Surgeons Tree
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
            Why Choose Us
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-600">
            Combining surgical expertise, precision equipment, and compassionate recovery care.
          </p>
        </div>

        {/* 2-column grid as requested */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {WHY_CHOOSE_US.map((item, index) => {
            const Icon = iconList[index] || CheckCircle2;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200/80 shadow-xs hover:shadow-md transition-shadow duration-200 flex items-start gap-4"
              >
                <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center shrink-0 border border-emerald-100">
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-slate-900">
                    {item.title}
                  </h3>
                  <p className="mt-1.5 text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {item.description}
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
