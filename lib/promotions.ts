import { cacheLife } from "next/cache";
import type { Promotion } from "@/types/promotion";
import { promotions } from "@/data/promotions";

// Today's date in Estonia as "YYYY-MM-DD" (en-CA formats dates this way).
function todayInTallinn(): string {
  return new Intl.DateTimeFormat("en-CA", {
    timeZone: "Europe/Tallinn",
  }).format(new Date());
}

export async function getActivePromotions(): Promise<Promotion[]> {
  // Cached result, refreshed every hour. Without this, "today" would be
  // the day of the build, and expired offers would stay on the site.
  "use cache";
  cacheLife("hours");

  const today = todayInTallinn();
  // ISO dates compare correctly as strings: "2026-12-31" >= "2026-11-09"
  return promotions.filter((promotion) => promotion.validUntil >= today);
}
