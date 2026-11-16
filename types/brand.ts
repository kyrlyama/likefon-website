export type BrandSize = "sm" | "md" | "lg";

export type Brand = {
  id: string;
  name: string;
  // Position inside the cloud, in % of its width and height.
  // Chosen by hand (not Math.random), see data/brands.ts.
  x: number;
  y: number;
  size: BrandSize;
};
