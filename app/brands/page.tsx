import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { BrandCloud } from "@/components/BrandCloud";
import { CallStoreLink } from "@/components/CallStoreLink";
import { getBrands } from "@/lib/brands";

export const metadata: Metadata = {
  title: "Brands – Likefon Narva",
};

export default async function BrandsPage() {
  const brands = await getBrands();

  return (
    <Container>
      <h1 className="mt-6 mb-2 text-h1 font-bold text-neutral-900">Brands</h1>
      <p className="mb-6 text-body text-neutral-700">
        Accessory brands we sell in both stores.
      </p>

      <div className="mb-8">
        <BrandCloud brands={brands} />
      </div>

      <div className="mb-10 flex flex-col items-center gap-4 text-center">
        <p className="text-body text-neutral-700">
          Looking for a brand that isn&apos;t here? Ask us.
        </p>
        <CallStoreLink />
      </div>
    </Container>
  );
}
