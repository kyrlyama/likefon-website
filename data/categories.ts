import type { Category } from "@/types/category";

// TODO: confirm the item lists with the client.
export const categories: Category[] = [
  {
    slug: "phone-cases",
    name: "Phone cases",
    image: "/images/categories/phone-cases.webp",
    items: [
      "iPhone: from iPhone 8 to the newest models",
      "Samsung Galaxy S, A and Z series",
      "Xiaomi, Redmi and POCO",
      "Cases for older models",
      "Silicone, clear and leather cases",
      "Book cases with card pockets",
      "MagSafe cases",
    ],
  },
  {
    slug: "screen-protectors",
    name: "Screen protectors",
    image: "/images/categories/screen-protectors.webp",
    items: [
      "Tempered glass for iPhone, Samsung and Xiaomi",
      "Full-cover and privacy glass",
      "Camera lens protectors",
      "Glass for older models",
      "Free installation in the store",
    ],
  },
  {
    slug: "tablet-cases",
    name: "Tablet cases",
    image: "/images/categories/tablet-cases.webp",
    items: [
      "iPad, iPad Air, iPad mini and iPad Pro",
      "Samsung Galaxy Tab",
      "Xiaomi and Lenovo tablets",
      "Book cases with a stand",
      "Tempered glass for tablets",
    ],
  },
  {
    slug: "car-holders",
    name: "Car holders",
    image: "/images/categories/car-holders.webp",
    items: [
      "Magnetic holders (MagSafe)",
      "Air vent holders",
      "Dashboard and windshield holders",
      "Holders with wireless charging",
    ],
  },
  {
    slug: "laptop-bags",
    name: "Laptop bags",
    image: "/images/categories/laptop-bags.webp",
    items: [
      'Sizes from 13" to 17"',
      "Sleeves and bags with a shoulder strap",
      "Men's and women's designs",
      "Water-resistant materials",
    ],
  },
  {
    slug: "headphones",
    name: "Headphones",
    image: "/images/categories/headphones.webp",
    items: [
      "Wireless earbuds",
      "Over-ear headphones",
      "Wired earphones: 3.5 mm, USB-C and Lightning",
    ],
  },
  {
    slug: "charging",
    name: "Charging",
    image: "/images/categories/charging.webp",
    items: [
      "Fast chargers (USB-C, Power Delivery)",
      "Cables: USB-C, Lightning and Micro-USB",
      "Power banks",
      "Car chargers",
      "Wireless chargers",
    ],
  },
  {
    slug: "selfie-sticks",
    name: "Selfie sticks",
    image: "/images/categories/selfie-sticks.webp",
    items: [
      "Selfie sticks with a tripod",
      "Bluetooth remote control",
      "Ring lights",
      "Phone tripods",
    ],
  },
];
