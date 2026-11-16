export type ServiceGroupId =
  "setup" | "memory" | "cleaning" | "software" | "repairs";

export type Service = {
  id: string;
  name: string;
  group: ServiceGroupId;
  // A number, not "5 €": we can format, sort and validate numbers.
  // Optional (?) because repairs have no fixed price.
  price?: number;
};

export type ServiceGroup = {
  id: ServiceGroupId;
  title: string;
  services: Service[];
};
