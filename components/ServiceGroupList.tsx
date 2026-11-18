import type { ServiceGroup } from "@/types/service";
import { ServiceGroupCard } from "@/components/ServiceGroupCard";

type ServiceGroupListProps = {
  groups: ServiceGroup[];
};

// Masonry layout with CSS columns (not grid):
// phone 1 column, tablet 2, laptop 3.
// Columns fill top to bottom, so with our 5 groups the laptop gets:
//   1: Setup (11 rows) | 2: Memory + Cleaning | 3: Diagnostics + Repairs
// and all 3 columns end at about the same height. A grid would make each
// row as tall as its tallest card and leave big holes.
// The wrapper div gives the space between cards (mb-5) and break-inside-avoid
// stops the browser from cutting a card between two columns.
export function ServiceGroupList({ groups }: ServiceGroupListProps) {
  return (
    <div className="gap-5 md:columns-2 lg:columns-3">
      {groups.map((group) => (
        <div key={group.id} className="mb-5 break-inside-avoid">
          <ServiceGroupCard group={group} />
        </div>
      ))}
    </div>
  );
}
