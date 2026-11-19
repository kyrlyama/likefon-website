import type { HeroSlide } from "@/types/hero";
import { getActivePromotions } from "@/lib/promotions";
import { getStores } from "@/lib/stores";

// Builds the home page carousel from data we already have: active
// promotions first (they sell), then the stores (they help people come).
// When a promotion expires, its slide disappears by itself.
export async function getHeroSlides(): Promise<HeroSlide[]> {
  const [promotions, stores] = await Promise.all([
    getActivePromotions(),
    getStores(),
  ]);

  const promotionSlides: HeroSlide[] = promotions.map((promotion) => ({
    id: `promotion-${promotion.id}`,
    image: promotion.image,
    alt: promotion.imageAlt,
    href: "/promotions",
    linkLabel: "See the offer",
  }));

  const storeSlides: HeroSlide[] = stores
    .filter((store) => store.image) // skip stores without a photo
    .map((store) => ({
      id: `store-${store.id}`,
      image: store.image!, // safe: filtered above
      alt: `Likefon store in ${store.name}`,
      href: store.mapUrl,
      external: true,
      linkLabel: "Directions",
      caption: { title: store.name, subtitle: store.location },
      focus: store.imageFocus,
    }));

  return [...promotionSlides, ...storeSlides];
}
