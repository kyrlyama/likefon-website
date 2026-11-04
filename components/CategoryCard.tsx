import Image from "next/image";
import Link from "next/link";
import type { Category } from "@/types/category";

type CategoryCardProps = {
  category: Category;
};

export function CategoryCard({ category }: CategoryCardProps) {
  return (
    <Link
      href={`/catalog/${category.slug}`}
      className="flex aspect-square flex-col items-center justify-between rounded-2xl border border-neutral-200 bg-white p-4 text-center hover:border-primary-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600"
    >
      <Image
        src={category.image}
        alt=""
        width={160}
        height={128}
        className="h-32 w-full object-contain"
      />
      <span className="text-body font-semibold text-neutral-900">
        {category.name}
      </span>
    </Link>
  );
}
