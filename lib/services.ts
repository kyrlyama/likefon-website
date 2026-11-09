import type { Service } from "@/types/service";
import { services } from "@/data/services";

export async function getServices(): Promise<Service[]> {
  return services;
}
