import type { Category } from "@/types/category";
import { categories } from "@/data/categories";

export async function getCategories(): Promise<Category[]> {
  return categories;
}
