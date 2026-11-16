export type Category = {
  slug: string;
  name: string;
  image: string;
  // What the customer finds in this category. Shown when the card opens.
  items: string[];
};
