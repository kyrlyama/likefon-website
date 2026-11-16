export type Promotion = {
  id: string;
  title: string;
  description: string;
  image: string;
  // The banner has text inside the image, so alt must repeat the offer.
  imageAlt: string;
  // ISO date "YYYY-MM-DD", last day the offer is valid.
  validUntil: string;
};
