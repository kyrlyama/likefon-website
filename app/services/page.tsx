import type { Metadata } from "next";
import { MessageSquare, Phone } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { ServiceGroupCard } from "@/components/ServiceGroupCard";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { getServiceGroups } from "@/lib/services";
import { STORE_PHONE } from "@/lib/contact";

export const metadata: Metadata = {
  title: "Services and prices – Likefon Narva",
};

export default async function ServicesPage() {
  const groups = await getServiceGroups();

  return (
    <Container>
      <h1 className="mt-6 mb-2 text-h1 font-bold text-neutral-900">Services</h1>
      <p className="mb-6 text-body text-neutral-700">
        Phone setup, data transfer, cleaning and software help.
      </p>

      <div className="mb-8 flex max-w-3xl flex-col gap-6">
        {groups.map((group) => (
          <ServiceGroupCard key={group.id} group={group} />
        ))}
      </div>

      <div className="mb-10 grid max-w-3xl grid-cols-2 gap-4">
        <ButtonLink href={`tel:${STORE_PHONE}`}>
          <Phone className="size-5" aria-hidden="true" />
          Call us
        </ButtonLink>
        <ButtonLink href={`sms:${STORE_PHONE}`} variant="secondary">
          <MessageSquare className="size-5" aria-hidden="true" />
          Text us
        </ButtonLink>
      </div>
    </Container>
  );
}
