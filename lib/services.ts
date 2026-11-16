import type { Service, ServiceGroup, ServiceGroupId } from "../types/service";
import { services, serviceGroupTitles } from "@/data/services";

export async function getServices(): Promise<Service[]> {
  return services;
}

// Turns the flat list into groups, in the order of serviceGroupTitles.
// The data stays flat because a database table is flat too (Phase 2):
// one "services" table with a "group" column.
export async function getServiceGroups(): Promise<ServiceGroup[]> {
  const groupIds = Object.keys(serviceGroupTitles) as ServiceGroupId[];

  return groupIds
    .map((id) => ({
      id,
      title: serviceGroupTitles[id],
      services: services.filter((service) => service.group === id),
    }))
    .filter((group) => group.services.length > 0); // hide empty groups
}
