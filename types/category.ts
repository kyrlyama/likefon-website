// Only these values are allowed: a typo like "bleu" is a TypeScript error.
export type CategoryTone =
  "blue" | "pink" | "peach" | "lavender" | "green" | "mauve";

export type Category = {
  slug: string;
  name: string;
  image: string;
  tone: CategoryTone;
};
