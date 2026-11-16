export type OpeningHours = {
  days: string; // "Mon–Sat"
  time: string; // "10:00–20:00"
};

export type Store = {
  id: string;
  name: string;
  location: string; // "Narva, 1st floor"
  hours: OpeningHours[];
  phone: string;
  mapUrl: string;
  image?: string; // optional: photos are added later
};
