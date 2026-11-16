import type { Brand } from "@/types/brand";

// Positions are fixed numbers, not Math.random(). Next.js renders the page
// on the server AND in the browser: random numbers would be different each
// time and cause a "hydration error". Fixed numbers also give design
// control: the most important brands are big and near the center.
// TODO: confirm the brand list with the client and add the rest.
export const brands: Brand[] = [
  // Row 1
  { id: "apple", name: "Apple", x: 18, y: 9, size: "xl" },
  { id: "joyroom", name: "Joyroom", x: 56, y: 6, size: "md" },
  { id: "dux", name: "Dux", x: 87, y: 11, size: "md" },
  // Row 2
  { id: "blavec", name: "Blavec", x: 13, y: 27, size: "md" },
  { id: "samsung", name: "Samsung", x: 61, y: 25, size: "xl" },
  // Row 3
  { id: "ugreen", name: "Ugreen", x: 24, y: 43, size: "xl" },
  { id: "baseus", name: "Baseus", x: 62, y: 45, size: "md" },
  { id: "hoco", name: "hoco", x: 89, y: 40, size: "md" },
  // Row 4
  { id: "borofone", name: "Borofone", x: 15, y: 60, size: "md" },
  { id: "x-level", name: "X-Level", x: 44, y: 59, size: "xl" },
  { id: "wiwu", name: "WIWU", x: 90, y: 60, size: "md" },
  // Row 5
  { id: "acefast", name: "Acefast", x: 28, y: 77, size: "md" },
  { id: "xiaomi", name: "Xiaomi", x: 72, y: 75, size: "xl" },
  // Row 6
  { id: "nillkin", name: "Nillkin", x: 15, y: 93, size: "md" },
  { id: "telprotect", name: "Telprotect", x: 51, y: 91, size: "md" },
  { id: "bluestar", name: "Bluestar", x: 86, y: 93, size: "md" },
];
