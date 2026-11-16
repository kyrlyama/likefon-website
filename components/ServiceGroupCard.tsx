import type { ServiceGroup } from "../types/service";
import { formatPrice } from "@/lib/format";

type ServiceGroupCardProps = {
  group: ServiceGroup;
};

function priceLabel(price?: number): string {
  if (price === undefined) return "In store";
  if (price === 0) return "Free";
  return formatPrice(price);
}

// A price list, not one card per service: 27 cards would be a very long
// scroll on a phone. Rows with dividers are easier to scan, like a menu.
export function ServiceGroupCard({ group }: ServiceGroupCardProps) {
  const headingId = `services-${group.id}`;

  return (
    <section
      aria-labelledby={headingId}
      className="rounded-2xl border-2 border-neutral-200 bg-white p-4"
    >
      <h2 id={headingId} className="mb-2 text-h2 font-bold text-neutral-900">
        {group.title}
      </h2>
      <ul>
        {group.services.map((service) => (
          <li
            key={service.id}
            className="flex items-baseline justify-between gap-4 border-b border-neutral-200 py-3 last:border-0"
          >
            <span className="text-body text-neutral-900">{service.name}</span>
            {/* tabular-nums: all digits have the same width, prices line up */}
            <span className="shrink-0 font-bold text-primary-600 tabular-nums">
              {priceLabel(service.price)}
            </span>
          </li>
        ))}
      </ul>
    </section>
  );
}
