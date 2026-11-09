import Image from "next/image";
import type { Category } from "@/types/category";

type CategoryCardProps = {
  category: Category;
};

// Not a link: in v2 there are no product pages, so a click would be a dead end.
export function CategoryCard({ category }: CategoryCardProps) {
  return (
    <article className="flex flex-col items-center gap-3 rounded-2xl border border-neutral-200 bg-white p-4 text-center">
      <Image
        src={category.image}
        alt=""
        width={160}
        height={120}
        className="h-24 w-full object-contain md:h-32"
      />
      <h2 className="text-body font-semibold text-neutral-900">
        {category.name}
      </h2>
    </article>
  );
}
