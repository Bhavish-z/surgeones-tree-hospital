import {
  Activity,
  HeartPulse,
  Crosshair,
  Sparkles,
  ShieldCheck,
  Droplets,
  ArrowUpRight,
  ShieldAlert,
  Dna,
} from 'lucide-react';
import { SPECIALITIES } from '../data/hospitalData';

interface SpecialitiesProps {
  onSelectDepartment: (deptName: string) => void;
}

export default function Specialities({ onSelectDepartment }: SpecialitiesProps) {
  // Map icons cleanly
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Activity':
        return Activity;
      case 'Bone':
        return Dna;
      case 'HeartPulse':
        return HeartPulse;
      case 'ShieldAlert':
        return ShieldAlert;
      case 'Crosshair':
        return Crosshair;
      case 'Sparkles':
        return Sparkles;
      case 'ShieldCheck':
        return ShieldCheck;
      case 'Droplets':
        return Droplets;
      default:
        return Activity;
    }
  };

  return (
    <section id="specialities" className="py-20 bg-white border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header: Max 1-3 lines */}
        <div className="max-w-2xl mb-12">
          <p className="text-xs font-semibold text-emerald-700 uppercase tracking-wider mb-2">
            Clinical Excellence
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
            Surgical Specialities
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-600">
            Precision operative care led by certified senior surgical specialists.
          </p>
        </div>

        {/* 8 Speciality Cards: Grid 1-col mobile, 2-col tablet, 4-col desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {SPECIALITIES.map((spec) => {
            const Icon = getIcon(spec.icon);
            return (
              <div
                key={spec.id}
                className="group relative bg-[#FAFCFF] hover:bg-white rounded-2xl p-6 border border-slate-200/70 hover:border-emerald-300 shadow-2xs hover:shadow-md transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  <div className="w-11 h-11 rounded-xl bg-white group-hover:bg-emerald-50 border border-slate-200/60 group-hover:border-emerald-200 flex items-center justify-center text-slate-700 group-hover:text-emerald-700 transition-colors mb-4">
                    <Icon className="w-5 h-5" />
                  </div>

                  <h3 className="text-base font-bold text-slate-900 group-hover:text-emerald-800 transition-colors">
                    {spec.name}
                  </h3>

                  {/* Strictly 1 short line as requested */}
                  <p className="mt-2 text-xs sm:text-sm text-slate-600 line-clamp-2 leading-relaxed">
                    {spec.tagline}
                  </p>
                </div>

                <div className="pt-5 mt-4 border-t border-slate-100 flex items-center justify-between">
                  <button
                    onClick={() => onSelectDepartment(spec.name)}
                    className="text-xs font-semibold text-emerald-700 hover:text-emerald-900 inline-flex items-center gap-1 group/btn"
                  >
                    <span>Book Now</span>
                    <ArrowUpRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                  </button>
                  <span className="text-[11px] text-slate-500">24/7 Care</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
