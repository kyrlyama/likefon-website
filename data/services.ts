import type { Service } from "@/types/service";

export const services: Service[] = [
  {
    id: "glass-installation",
    name: "Screen protector installation",
    priceMin: 0,
    duration: "5–10 min",
  },
  {
    id: "speaker-cleaning",
    name: "Cleaning the speaker",
    priceMin: 10,
    priceMax: 15,
    duration: "5–15 min",
  },
  {
    id: "headphones-cleaning",
    name: "Cleaning the headphones",
    priceMin: 10,
    priceMax: 15,
    duration: "5–15 min",
  },
  {
    id: "account-setup",
    name: "Creating an account",
    priceMin: 10,
    priceMax: 15,
    duration: "10–20 min",
  },
  { id: "screen-repair", name: "Phone screen repair" },
  { id: "battery-replacement", name: "Phone battery replacement" },
];
