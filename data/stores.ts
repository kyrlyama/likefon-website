import type { Store } from "@/types/store";
import { STORE_PHONE } from "@/lib/contact";

// TODO: confirm hours and phone numbers with the client.
const hours = [
  { days: "Mon–Sat", time: "10:00–20:00" },
  { days: "Sunday", time: "10:00–18:00" },
];

export const stores: Store[] = [
  {
    id: "fama",
    name: "Fama Keskus",
    location: "Narva, 1st floor",
    hours,
    phone: STORE_PHONE,
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Fama+Keskus+Narva",
  },
  {
    id: "astri",
    name: "Astri Keskus",
    location: "Narva, 2nd floor",
    hours,
    phone: STORE_PHONE,
    mapUrl:
      "https://www.google.com/maps/search/?api=1&query=Astri+Keskus+Narva",
  },
];
