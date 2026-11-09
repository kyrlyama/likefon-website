import type { Category } from "@/types/category";
import { categories } from "@/data/categories";

export async function getCategories(): Promise<Category[]> {
  return categories;
}

export async function searchCategories(query: string): Promise<Category[]> {
  const normalized = query.trim().toLowerCase();
  if (!normalized) return [];

  return categories.filter((category) =>
    category.name.toLowerCase().includes(normalized),
  );
}
