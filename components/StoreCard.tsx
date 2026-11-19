import Image from "next/image";
import { Clock, MapPin, Phone, Store as StoreIcon } from "lucide-react";
import type { Store } from "@/types/store";
import { ButtonLink } from "@/components/ui/ButtonLink";

type StoreCardProps = {
  store: Store;
};

// A big glass card: the photo on top (people recognise the store when they
// arrive), then name, floor and hours in readable sizes, then the actions.
// Our main audience is 35–60, so the text is body size, not caption size.
export function StoreCard({ store }: StoreCardProps) {
  return (
    <article className="glass flex h-full flex-col overflow-hidden rounded-3xl">
      <div className="relative aspect-16/10 bg-white/40">
        {store.image ? (
          <Image
            src={store.image}
            alt={`${store.name} store`}
            fill
            // 2 cards per row on laptop (~560px each), full width on phone.
            sizes="(min-width: 768px) 560px, 100vw"
            className="object-cover"
            style={{ objectPosition: store.imageFocus }}
          />
        ) : (
          // Image fallback until real photos are added.
          <div className="flex size-full items-center justify-center text-neutral-300">
            <StoreIcon className="size-12" aria-hidden="true" />
          </div>
        )}
      </div>

      <div className="flex flex-1 flex-col gap-5 p-5 md:p-7">
        <div>
          <h2 className="text-h1 font-extrabold tracking-tight text-neutral-900">
            {store.name}
          </h2>
          <p className="mt-1 flex items-center gap-2 text-body text-neutral-700">
            <MapPin className="size-5 shrink-0" aria-hidden="true" />
            {store.location}
          </p>
        </div>

        <div className="rounded-2xl bg-white/60 p-4">
          <p className="mb-2 flex items-center gap-2 text-body font-bold text-neutral-900">
            <Clock className="size-5 shrink-0" aria-hidden="true" />
            Opening hours
          </p>
          {/* dl = description list: a natural fit for "label: value" pairs */}
          <dl className="grid grid-cols-[auto_1fr] gap-x-4 gap-y-1 text-body">
            {store.hours.map((item) => (
              <div key={item.days} className="contents">
                <dt className="text-neutral-700">{item.days}</dt>
                <dd className="text-right font-semibold text-neutral-900 tabular-nums">
                  {item.time}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        {/* mt-auto: buttons stick to the bottom, so in two cards side by
            side they line up even if one card has more text. */}
        <div className="mt-auto grid grid-cols-2 gap-3">
          <ButtonLink href={`tel:${store.phone}`}>
            <Phone className="size-5" aria-hidden="true" />
            Call
          </ButtonLink>
          <ButtonLink href={store.mapUrl} variant="glass" external>
            <MapPin className="size-5" aria-hidden="true" />
            Directions
          </ButtonLink>
        </div>
      </div>
    </article>
  );
}
