import { LucideIcon } from "lucide-react";
import { Award, LayoutGrid, MapPin, Tag, Wrench } from "lucide-react";

export type NavLink = {
  href: string;
  label: string;
  icon: LucideIcon;
};

export const navLinks: NavLink[] = [
  { href: "/catalog", label: "Catalog", icon: LayoutGrid },
  { href: "/services", label: "Services", icon: Wrench },
  { href: "/promotions", label: "Promotions", icon: Award },
  { href: "/brands", label: "Brands", icon: Tag },
  { href: "/contacts", label: "Contacts", icon: MapPin },
];
