import type { Brand } from "../types/Brand";
import { brands } from "../data/brands";

export async function getBrands(): Promise<Brand[]> {
  return brands;
}
