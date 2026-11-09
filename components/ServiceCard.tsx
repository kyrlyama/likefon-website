import type { Service } from "@/types/service";
import { formatPriceRange } from "@/lib/format";

type ServiceCardProps = {
  service: Service;
};

export function ServiceCard({ service }: ServiceCardProps) {
  const hasPrice = service.priceMin !== undefined;

  return (
    <article className="flex items-start justify-between gap-4 rounded-2xl border-2 border-neutral-200 bg-white p-4">
      <div>
        <h2 className="mb-1 text-h2 font-bold text-neutral-900">
          {service.name}
        </h2>
        <p className="text-caption text-primary-600">
          {hasPrice && service.duration
            ? service.duration
            : "Price and time are discussed in the store."}
        </p>
      </div>
      {hasPrice && (
        <p className="shrink-0 text-h2 font-bold text-primary-600">
          {formatPriceRange(service.priceMin!, service.priceMax)}
        </p>
      )}
    </article>
  );
}
