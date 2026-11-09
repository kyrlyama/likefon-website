import type { Store } from "@/types/store";
import { stores } from "@/data/stores";

export async function getStores(): Promise<Store[]> {
  return stores;
}
