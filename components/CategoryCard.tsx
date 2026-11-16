import Image from "next/image";
import type { Category, CategoryTone } from "@/types/category";

type CategoryCardProps = {
  category: Category;
};

// Full class names, written out: Tailwind only generates classes it can
// find as complete strings in the code. `bg-tint-${tone}` would not work.
const toneClasses: Record<CategoryTone, string> = {
  blue: "bg-tint-blue",
  pink: "bg-tint-pink",
  peach: "bg-tint-peach",
  lavender: "bg-tint-lavender",
  green: "bg-tint-green",
  mauve: "bg-tint-mauve",
};

// Not a link: in v2 there are no product pages, so a click would be a dead end.
export function CategoryCard({ category }: CategoryCardProps) {
  return (
    <article
      className={`flex aspect-15/16 flex-col rounded-2xl p-3 ${toneClasses[category.tone]}`}
    >
      {/* The photos have transparent backgrounds, so the pastel shows through */}
      <div className="relative flex-1">
        <Image
          src={category.image}
          alt=""
          fill
          sizes="(min-width: 1024px) 240px, (min-width: 768px) 33vw, 50vw"
          className="object-contain"
        />
      </div>
      <h2 className="mt-2 text-body font-semibold text-neutral-900">
        {category.name}
      </h2>
    </article>
  );
}
