import type { Promotion } from "@/types/promotion";

export const promotions: Promotion[] = [
  {
    id: "screen-protector-50",
    title: "-50% on screen protectors",
    description:
      "Buy a case and get a screen protector at half price. For iPhone, Samsung and Xiaomi.",
    image: "/images/promotions/screen-protector-50.webp",
    imageAlt: "-50% on screen protectors when you buy a case",
    validUntil: "2026-12-31", // TODO: confirm the real end date with the client
  },
];
