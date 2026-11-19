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
  // CSS object-position: which part of the photo stays visible when it is
  // cropped to a wide frame. "center 76%" = keep the lower part.
  // Only needed for photos that are not horizontal.
  imageFocus?: string;
};
