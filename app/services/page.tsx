import type { Metadata } from "next";
import { MapPin, Phone } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { ServiceGroupList } from "@/components/ServiceGroupList";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { getServiceGroups } from "@/lib/services";
import { STORE_PHONE } from "@/lib/contact";

export const metadata: Metadata = {
  title: "Services and prices – Likefon Narva",
};

export default async function ServicesPage() {
  const groups = await getServiceGroups();

  return (
    // pb-32 on phones: space for the floating action bar, so it never
    // covers the last price.
    <div className="pb-32 lg:pb-16">
      <Container>
        <h1 className="mt-6 mb-6 text-h1 font-extrabold tracking-tight text-neutral-900 lg:mt-10 lg:text-[2.75rem]">
          Services
        </h1>

        <ServiceGroupList groups={groups} />

        {/* Phone only: a floating glass bar, always reachable with the thumb.
            Laptop: hidden, because "Call the store" is in the header. */}
        <div className="glass fixed inset-x-3 bottom-[max(1rem,env(safe-area-inset-bottom))] z-10 flex gap-2 rounded-full p-2 lg:hidden">
          <ButtonLink href={`tel:${STORE_PHONE}`} className="flex-1">
            <Phone className="size-5" aria-hidden="true" />
            Call the store
          </ButtonLink>
          <ButtonLink href="/contacts" variant="glass" className="flex-1">
            <MapPin className="size-5" aria-hidden="true" />
            Directions
          </ButtonLink>
        </div>
      </Container>
    </div>
  );
}
