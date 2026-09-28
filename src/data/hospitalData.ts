import heroImg from '../assets/images/hero_surgical_care_1790564657340.jpg';
import exteriorImg from '../assets/images/hospital_exterior_1790564674138.jpg';
import otImg from '../assets/images/operation_theatre_1790564690571.jpg';
import receptionImg from '../assets/images/reception_lounge_1790564701629.jpg';
import roomImg from '../assets/images/patient_recovery_room_1790564712756.jpg';

export const HOSPITAL_INFO = {
  name: "Surgeons Tree Hospitals",
  teluguName: "సర్జెన్స్ ట్రీ హాస్పిటల్స్",
  rating: 4.6,
  reviewsCount: 194,
  phone: "+91 96762 03702",
  phoneRaw: "919676203702",
  whatsappNumber: "919676203702",
  address: "4-83, Bhadurpally, Towards Balanagar Road, Balanagar, Hyderabad, Telangana 500043",
  website: "surgeonstreehospitals.com",
  hours: "Open 24 Hours",
  googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Surgeons+Tree+Hospitals+Balanagar+Hyderabad+500043",
  heroImage: heroImg,
};

export const SPECIALITIES = [
  {
    id: "general-surgery",
    name: "General Surgery",
    tagline: "Minimally invasive laparoscopic procedures with rapid recovery.",
    icon: "Activity",
  },
  {
    id: "orthopedics",
    name: "Orthopedics",
    tagline: "Advanced joint replacement, arthroscopy, and trauma fracture surgery.",
    icon: "Bone",
  },
  {
    id: "gynecology",
    name: "Gynecology",
    tagline: "Comprehensive women's health, laparoscopic hysterectomy, and cyst care.",
    icon: "HeartPulse",
  },
  {
    id: "urology",
    name: "Urology",
    tagline: "Laser prostate management, bladder treatments, and urinary tract care.",
    icon: "ShieldAlert",
  },
  {
    id: "hernia-treatment",
    name: "Hernia Treatment",
    tagline: "3D tension-free mesh repair with minimal pain and rapid discharge.",
    icon: "Crosshair",
  },
  {
    id: "gallbladder-surgery",
    name: "Gallbladder Surgery",
    tagline: "Gentle keyhole laparoscopic cholecystectomy for gallstone relief.",
    icon: "Sparkles",
  },
  {
    id: "appendix-surgery",
    name: "Appendix Surgery",
    tagline: "24/7 emergency laparoscopic appendectomy with minimal scarring.",
    icon: "ShieldCheck",
  },
  {
    id: "kidney-stone-care",
    name: "Kidney Stone Care",
    tagline: "Advanced laser lithotripsy (RIRS/PCNL) for painless stone removal.",
    icon: "Droplets",
  },
];

export const WHY_CHOOSE_US = [
  {
    title: "Experienced Surgeons",
    description: "Highly skilled surgical specialists with decades of proven operative expertise.",
  },
  {
    title: "Advanced Technology",
    description: "State-of-the-art modular operation theatres and high-definition laparoscopy.",
  },
  {
    title: "Faster Recovery",
    description: "Minimally invasive techniques designed for shorter hospital stays and gentle healing.",
  },
  {
    title: "24/7 Care",
    description: "Round-the-clock emergency, trauma, diagnostic labs, and dedicated medical staff.",
  },
  {
    title: "Patient-Focused Treatment",
    description: "Compassionate bedside attention prioritizing comfort, safety, and clear communication.",
  },
  {
    title: "Affordable Healthcare",
    description: "Transparent surgical packages with cashless health insurance processing.",
  },
];

export const PATIENT_REVIEWS = [
  {
    id: "rev-1",
    author: "Venkat Rao K.",
    location: "Hyderabad",
    treatment: "General Surgery",
    rating: 5,
    text: "Excellent doctors with supportive staff.",
    date: "Verified Google Review",
  },
  {
    id: "rev-2",
    author: "Rajesh Kumar M.",
    location: "Balanagar, Hyderabad",
    treatment: "Hernia Treatment",
    rating: 5,
    text: "Good environment and successful hernia treatment.",
    date: "Verified Google Review",
  },
  {
    id: "rev-3",
    author: "Srilatha P.",
    location: "Kukatpally, Hyderabad",
    treatment: "Emergency Spine Care",
    rating: 5,
    text: "Emergency spine surgery with outstanding care.",
    date: "Verified Google Review",
  },
  {
    id: "rev-4",
    author: "Mohammad Naveed",
    location: "Hyderabad",
    treatment: "Laparoscopic Gallbladder",
    rating: 5,
    text: "Pain-free laparoscopic surgery and same-day recovery. Clean hospital with 24/7 doctor availability.",
    date: "Verified Google Review",
  },
];

export const GALLERY_ITEMS = [
  {
    id: "exterior",
    title: "Hospital Exterior",
    category: "Facility",
    image: exteriorImg,
    description: "Modern surgical healthcare facility on Balanagar Main Road, Hyderabad.",
  },
  {
    id: "ot",
    title: "Operation Theatre",
    category: "Surgical Suites",
    image: otImg,
    description: "Ultra-clean sterile modular operation theatre equipped with HD laparoscopic towers.",
  },
  {
    id: "reception",
    title: "Reception & Lounge",
    category: "Patient Care",
    image: receptionImg,
    description: "Warm, prompt reception desk with comfortable seating and transparent counseling.",
  },
  {
    id: "rooms",
    title: "Patient Rooms",
    category: "Inpatient Care",
    image: roomImg,
    description: "Calm, hygienic recovery rooms offering privacy, natural daylight, and nursing monitoring.",
  },
];

export const FAQ_ITEMS = [
  {
    id: "faq-1",
    category: "Surgical Preparation",
    question: "How should I prepare before my scheduled surgery?",
    answer: "Fast for 6–8 hours prior to admission, take only surgeon-approved morning medications with small sips of water, and carry your previous medical records.",
  },
  {
    id: "faq-2",
    category: "Surgical Preparation",
    question: "What documents should I bring on the day of admission?",
    answer: "Please bring a government photo ID (Aadhaar/PAN), health insurance card, pre-anesthetic checkup reports, and recent diagnostic scans.",
  },
  {
    id: "faq-3",
    category: "Recovery Time",
    question: "How quickly can I resume routine work after laparoscopic surgery?",
    answer: "Most minimally invasive laparoscopic patients walk within hours of surgery and return to desk work and light routines in 3 to 7 days.",
  },
  {
    id: "faq-4",
    category: "Recovery Time",
    question: "Are daycare and 24-hour discharge options available?",
    answer: "Yes, advanced keyhole procedures for hernia, gallbladder, appendix, and kidney stones frequently allow same-day or 24-hour discharge.",
  },
  {
    id: "faq-5",
    category: "Insurance & Billing",
    question: "Does the hospital support cashless insurance processing?",
    answer: "Yes. Our on-site TPA desk coordinates pre-authorizations with leading private insurers and corporate health cards.",
  },
  {
    id: "faq-6",
    category: "Insurance & Billing",
    question: "What is the procedure for reimbursement claims?",
    answer: "Our team provides complete claim dossiers—including detailed final bills, doctor prescriptions, OT notes, and discharge summaries upon release.",
  },
];

export function buildWhatsAppBookingUrl(params: {
  name: string;
  phone: string;
  department: string;
  preferredDate: string;
}): string {
  const text = `Hello Surgeons Tree Hospitals,

Name: ${params.name || 'Not provided'}
Phone: ${params.phone || 'Not provided'}
Department: ${params.department || 'General Consultation'}
Preferred Date: ${params.preferredDate || 'Earliest available'}

I would like to book an appointment.`;

  return `https://wa.me/${HOSPITAL_INFO.whatsappNumber}?text=${encodeURIComponent(text)}`;
}
