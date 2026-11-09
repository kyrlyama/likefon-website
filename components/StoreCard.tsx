import Image from "next/image";
import { MapPin, Phone, Store as StoreIcon } from "lucide-react";
import type { Store } from "@/types/store";
import { ButtonLink } from "@/components/ui/ButtonLink";

type StoreCardProps = {
  store: Store;
};

export function StoreCard({ store }: StoreCardProps) {
  return (
    <article className="overflow-hidden rounded-2xl border border-neutral-300 bg-white shadow-sm">
      <div className="grid grid-cols-2">
        <div className="relative aspect-4/3 bg-neutral-100">
          {store.image ? (
            <Image
              src={store.image}
              alt={`${store.name} store`}
              fill
              sizes="(min-width: 768px) 384px, 50vw"
              className="object-cover"
            />
          ) : (
            // Image fallback until real photos are added.
            <div className="flex size-full items-center justify-center text-neutral-300">
              <StoreIcon className="size-10" aria-hidden="true" />
            </div>
          )}
        </div>

        <div className="p-4">
          <h2 className="text-body font-bold text-neutral-900">{store.name}</h2>
          <p className="mb-2 text-caption text-neutral-700">{store.location}</p>
          {/* dl = description list: a natural fit for "label: value" pairs */}
          <dl className="grid grid-cols-[auto_1fr] gap-x-3 text-caption">
            {store.hours.map((item) => (
              <div key={item.days} className="contents">
                <dt className="font-bold text-neutral-900">{item.days}</dt>
                <dd className="text-right text-neutral-900">{item.time}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 p-4">
        <ButtonLink href={`tel:${store.phone}`}>
          <Phone className="size-5" aria-hidden="true" />
          Call
        </ButtonLink>
        <ButtonLink href={store.mapUrl} variant="secondary" external>
          <MapPin className="size-5" aria-hidden="true" />
          Directions
        </ButtonLink>
      </div>
    </article>
  );
}
