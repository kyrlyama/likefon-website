// One slide of the home page carousel: a promotion banner or a store photo.
export type HeroSlide = {
  id: string;
  image: string;
  alt: string;
  href: string;
  external?: boolean; // opens in a new tab (Google Maps)
  linkLabel: string; // "See the offer", "Directions"
  // Text on top of the photo. Promotion banners have no caption,
  // because their text is already inside the image.
  caption?: { title: string; subtitle: string };
  focus?: string; // CSS object-position for cropped photos
};
