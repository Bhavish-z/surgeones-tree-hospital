import { useState, useEffect } from 'react';
import {
  MessageSquare,
  Calendar,
  User,
  Phone,
  Stethoscope,
  Clock,
  CheckCircle2,
  ShieldCheck,
} from 'lucide-react';
import { HOSPITAL_INFO, SPECIALITIES, buildWhatsAppBookingUrl } from '../data/hospitalData';

interface WhatsAppBookingProps {
  selectedDept?: string;
}

export default function WhatsAppBooking({ selectedDept }: WhatsAppBookingProps) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [department, setDepartment] = useState('General Surgery');
  const [preferredDate, setPreferredDate] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  // Sync if parent updates selected department
  useEffect(() => {
    if (selectedDept) {
      setDepartment(selectedDept);
    }
  }, [selectedDept]);

  // Set default minimum date to today
  const todayStr = new Date().toISOString().split('T')[0];

  const validate = () => {
    const newErrors: { [key: string]: string } = {};
    if (!name.trim()) newErrors.name = 'Please enter your full name';
    if (!phone.trim()) {
      newErrors.phone = 'Please enter your phone number';
    } else if (!/^[0-9+\s-]{8,15}$/.test(phone.trim())) {
      newErrors.phone = 'Please enter a valid phone number';
    }
    if (!preferredDate) newErrors.date = 'Please select a preferred date';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    const whatsappUrl = buildWhatsAppBookingUrl({
      name,
      phone,
      department,
      preferredDate,
    });

    setIsSubmitted(true);

    // Open WhatsApp in a new tab or app
    setTimeout(() => {
      window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
    }, 400);
  };

  return (
    <section id="book-appointment" className="py-20 md:py-28 bg-white border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          {/* Section Header: 1-2 lines */}
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 text-xs font-semibold mb-3 border border-emerald-100">
              <MessageSquare className="w-3.5 h-3.5 text-emerald-600" />
              <span>Instant Appointment Booking</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-slate-900">
              Book on WhatsApp
            </h2>
            <p className="mt-2 text-sm sm:text-base text-slate-600 max-w-lg mx-auto">
              Fill in your details below to schedule an appointment directly with our hospital team.
            </p>
          </div>

          {/* Booking Card */}
          <div className="bg-[#FAFCFF] border border-slate-200/90 rounded-3xl p-6 sm:p-10 shadow-sm relative overflow-hidden">
            {/* Subtle top brand bar */}
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-emerald-500 via-teal-500 to-sky-500" />

            {isSubmitted ? (
              <div className="py-8 text-center space-y-4">
                <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-slate-900">
                  Opening WhatsApp...
                </h3>
                <p className="text-sm text-slate-600 max-w-md mx-auto">
                  Your appointment booking message has been prepared. If WhatsApp didn't open automatically, click the button below:
                </p>
                <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
                  <a
                    href={buildWhatsAppBookingUrl({ name, phone, department, preferredDate })}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-white bg-emerald-600 hover:bg-emerald-700 rounded-xl shadow-xs"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>Open WhatsApp Now</span>
                  </a>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="text-xs text-slate-600 hover:text-slate-900 underline underline-offset-4 py-2"
                  >
                    Edit Details
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Name field */}
                  <div>
                    <label
                      htmlFor="patient-name"
                      className="block text-xs font-semibold text-slate-800 mb-1.5"
                    >
                      Patient Name *
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                        <User className="w-4 h-4" />
                      </div>
                      <input
                        id="patient-name"
                        type="text"
                        value={name}
                        onChange={(e) => {
                          setName(e.target.value);
                          if (errors.name) setErrors((prev) => ({ ...prev, name: '' }));
                        }}
                        placeholder="e.g. Ramesh Kumar"
                        className={`w-full pl-10 pr-3.5 py-2.5 bg-white border text-sm rounded-xl text-slate-900 placeholder:text-slate-400 focus:outline-hidden focus:ring-2 transition-all ${
                          errors.name
                            ? 'border-rose-400 focus:ring-rose-200'
                            : 'border-slate-200 focus:border-emerald-500 focus:ring-emerald-100'
                        }`}
                      />
                    </div>
                    {errors.name && (
                      <p className="mt-1 text-xs text-rose-500">{errors.name}</p>
                    )}
                  </div>

                  {/* Phone field */}
                  <div>
                    <label
                      htmlFor="patient-phone"
                      className="block text-xs font-semibold text-slate-800 mb-1.5"
                    >
                      Phone Number *
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                        <Phone className="w-4 h-4" />
                      </div>
                      <input
                        id="patient-phone"
                        type="tel"
                        value={phone}
                        onChange={(e) => {
                          setPhone(e.target.value);
                          if (errors.phone) setErrors((prev) => ({ ...prev, phone: '' }));
                        }}
                        placeholder="+91 98765 43210"
                        className={`w-full pl-10 pr-3.5 py-2.5 bg-white border text-sm rounded-xl text-slate-900 placeholder:text-slate-400 focus:outline-hidden focus:ring-2 transition-all ${
                          errors.phone
                            ? 'border-rose-400 focus:ring-rose-200'
                            : 'border-slate-200 focus:border-emerald-500 focus:ring-emerald-100'
                        }`}
                      />
                    </div>
                    {errors.phone && (
                      <p className="mt-1 text-xs text-rose-500">{errors.phone}</p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Department field */}
                  <div>
                    <label
                      htmlFor="department"
                      className="block text-xs font-semibold text-slate-800 mb-1.5"
                    >
                      Department / Speciality *
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                        <Stethoscope className="w-4 h-4" />
                      </div>
                      <select
                        id="department"
                        value={department}
                        onChange={(e) => setDepartment(e.target.value)}
                        className="w-full pl-10 pr-8 py-2.5 bg-white border border-slate-200 text-sm rounded-xl text-slate-900 focus:outline-hidden focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100 transition-all appearance-none cursor-pointer"
                      >
                        {SPECIALITIES.map((spec) => (
                          <option key={spec.id} value={spec.name}>
                            {spec.name}
                          </option>
                        ))}
                        <option value="General Consultation">General Consultation</option>
                        <option value="Second Surgical Opinion">Second Surgical Opinion</option>
                        <option value="Emergency Care">Emergency Care</option>
                      </select>
                      <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none text-slate-400">
                        <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                          <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                        </svg>
                      </div>
                    </div>
                  </div>

                  {/* Preferred Date field */}
                  <div>
                    <label
                      htmlFor="preferred-date"
                      className="block text-xs font-semibold text-slate-800 mb-1.5"
                    >
                      Preferred Date *
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                        <Calendar className="w-4 h-4" />
                      </div>
                      <input
                        id="preferred-date"
                        type="date"
                        min={todayStr}
                        value={preferredDate}
                        onChange={(e) => {
                          setPreferredDate(e.target.value);
                          if (errors.date) setErrors((prev) => ({ ...prev, date: '' }));
                        }}
                        className={`w-full pl-10 pr-3.5 py-2.5 bg-white border text-sm rounded-xl text-slate-900 focus:outline-hidden focus:ring-2 transition-all ${
                          errors.date
                            ? 'border-rose-400 focus:ring-rose-200'
                            : 'border-slate-200 focus:border-emerald-500 focus:ring-emerald-100'
                        }`}
                      />
                    </div>
                    {errors.date && (
                      <p className="mt-1 text-xs text-rose-500">{errors.date}</p>
                    )}
                  </div>
                </div>

                {/* Pre-fill format preview note */}
                <div className="bg-slate-50 rounded-xl p-3 border border-slate-200/70 text-xs text-slate-600 flex items-start gap-2.5">
                  <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <p>
                    Your request connects directly to Surgeons Tree Hospitals WhatsApp at{' '}
                    <span className="font-semibold text-slate-800">+{HOSPITAL_INFO.phoneRaw}</span>.
                    You will receive immediate doctor availability.
                  </p>
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  className="w-full py-3.5 px-6 text-sm font-semibold text-white bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 rounded-xl shadow-sm hover:shadow-md transition-all flex items-center justify-center gap-2 group cursor-pointer focus:outline-hidden focus-visible:ring-2 focus-visible:ring-emerald-500"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Book on WhatsApp</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
