import Image from "next/image";
import { Container } from "@/components/layout/Container";
import { SearchForm } from "@/components/SearchForm";
import { CallStoreLink } from "@/components/CallStoreLink";
import { getActivePromotions } from "@/lib/promotions";

export default async function Home() {
  // Stage 6+: replace with PromotionCarousel when there are more banners.
  const [promotion] = await getActivePromotions();

  return (
    <Container>
      <h1 className="mt-6 mb-2 text-h1 font-bold text-neutral-900">
        Phone accessories in Narva
      </h1>
      <p className="mb-6 text-body text-neutral-700">
        Cases, screen protectors, chargers and repairs in two stores.
      </p>

      {promotion && (
        <div className="relative mb-6 aspect-2/1 max-w-3xl overflow-hidden rounded-2xl">
          <Image
            src={promotion.image}
            alt={promotion.imageAlt}
            fill
            sizes="(min-width: 768px) 768px, 100vw"
            preload
            className="object-cover"
          />
        </div>
      )}

      <div className="mb-10 max-w-3xl">
        <SearchForm />
      </div>

      <section aria-labelledby="glass-heading" className="mb-10">
        <h2
          id="glass-heading"
          className="mb-2 text-h1 font-bold text-neutral-900"
        >
          Free glass installation
        </h2>
        <p className="mb-6 text-body text-neutral-700">
          We install screen protectors in the store.
        </p>
        <CallStoreLink />
      </section>
    </Container>
  );
}
