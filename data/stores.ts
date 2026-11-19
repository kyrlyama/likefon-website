import type { Store } from "../types/store";
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
    mapUrl: "https://maps.app.goo.gl/bcefdHh6xo6Jg2Xc9",
    image: "/images/stores/fama.webp",
  },
  {
    id: "astri",
    name: "Astri Keskus",
    location: "Narva, 2nd floor",
    hours,
    phone: STORE_PHONE,
    mapUrl: "https://maps.app.goo.gl/KYBpuaqQyNQ6g8Qw6",
    image: "/images/stores/astri.webp",
    // The photo is vertical (800×1422): keep the kiosk, crop the ceiling.
    // TODO: ask the client for a horizontal photo, it will be sharper.
    imageFocus: "center 76%",
  },
];
