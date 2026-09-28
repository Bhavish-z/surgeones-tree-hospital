export interface Speciality {
  id: string;
  name: string;
  tagline: string;
  iconName: string;
}

export interface Review {
  id: string;
  author: string;
  location: string;
  treatment: string;
  rating: number;
  text: string;
  date: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: string;
  image: string;
  description: string;
}

export interface BookingFormData {
  name: string;
  phone: string;
  department: string;
  date: string;
  timeSlot: string;
}
