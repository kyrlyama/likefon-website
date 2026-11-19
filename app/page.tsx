import { Container } from "@/components/layout/Container";
import { SearchForm } from "@/components/SearchForm";
import { CallStoreLink } from "@/components/CallStoreLink";
import { HeroCarousel } from "@/components/HeroCarousel";
import { getHeroSlides } from "@/lib/hero";

export default async function Home() {
  const slides = await getHeroSlides();

  return (
    <Container>
      <h1 className="mt-6 mb-2 text-h1 font-extrabold tracking-tight text-neutral-900 lg:mt-10 lg:text-[2.75rem]">
        Phone accessories in Narva
      </h1>
      <p className="mb-6 text-body text-neutral-700">
        Cases, screen protectors, chargers and repairs in two stores.
      </p>

      <HeroCarousel slides={slides} />

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
