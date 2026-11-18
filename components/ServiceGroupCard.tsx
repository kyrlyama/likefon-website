import type { ComponentType } from "react";
import { Activity, BrushCleaning, Wrench } from "lucide-react";
import { NewPhoneIcon, OldPhoneIcon } from "@/components/icons/PhoneIcons";
import type { ServiceGroup, ServiceGroupId } from "@/types/service";
import { formatPrice } from "@/lib/format";

type ServiceGroupCardProps = {
  group: ServiceGroup;
};

// Icons are presentation, not data, so they live here, not in data/services.ts.
// Record<ServiceGroupId, ...>: if a new group id is added, TypeScript shows
// an error here until it gets an icon.
// ComponentType<{ className?: string }> instead of LucideIcon: any component
// that accepts className fits, so lucide icons and our own icons can mix.
type IconComponent = ComponentType<{
  className?: string;
  "aria-hidden"?: boolean | "true";
}>;

const groupIcons: Record<ServiceGroupId, IconComponent> = {
  setup: NewPhoneIcon,
  memory: OldPhoneIcon,
  cleaning: BrushCleaning,
  software: Activity,
  repairs: Wrench,
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
  const Icon = groupIcons[group.id];

  return (
    <section
      aria-labelledby={headingId}
      // No margin here: the parent list decides the spacing (gap).
      className="glass rounded-3xl p-5 lg:p-6"
    >
      <div className="mb-3 flex items-center gap-3">
        <span className="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-primary-500/10 text-primary-500">
          <Icon className="size-6" aria-hidden="true" />
        </span>
        <h2
          id={headingId}
          className="text-h2 font-extrabold tracking-tight text-neutral-900"
        >
          {group.title}
        </h2>
      </div>

      <ul>
        {group.services.map((service) => (
          <li
            key={service.id}
            className="flex items-baseline justify-between gap-4 border-t border-neutral-900/10 py-3"
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
