import Image from "next/image";
import { Container } from "@/components/layout/Container";
import { SearchForm } from "@/components/SearchForm";
import { CallStoreLink } from "@/components/CallStoreLink";

export default function Home() {
  return (
    <Container>
      <h1 className="mt-6 mb-2 text-h1 font-bold text-neutral-900">
        Phone accessories in Narva
      </h1>
      <p className="mb-6 text-body text-neutral-700">
        Cases, screen protectors, chargers and repairs in two stores.
      </p>

      {/* Stage 6: replace with PromotionCarousel */}
      <div className="relative mb-10 aspect-2/1 overflow-hidden rounded-2xl">
        <Image
          src="/images/promotions/screen-protector-50.jpg"
          alt="-50% on screen protectors when you buy a case"
          fill
          sizes="(min-width: 1024px) 1024px, 100vw"
          preload
          className="object-cover"
        />
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

      <section aria-labelledby="search-heading" className="mb-10">
        <h2 id="search-heading" className="mb-4 text-h2 font-bold">
          Looking for something?
        </h2>
        <SearchForm />
      </section>
    </Container>
  );
}
