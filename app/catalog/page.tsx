import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { CategoryGrid } from "@/components/CategoryGrid";
import { getCategories } from "@/lib/categories";

export const metadata: Metadata = {
  title: "Catalog – Likefon Narva",
};

// The page stays a Server Component: it loads the data on the server.
// Only CategoryGrid runs in the browser, because it needs useState.
export default async function CatalogPage() {
  const categories = await getCategories();

  return (
    <Container>
      <h1 className="mt-6 mb-2 text-h1 font-extrabold tracking-tight text-neutral-900 lg:mt-10 lg:text-[2.75rem]">
        Catalog
      </h1>
      <p className="mb-6 text-body text-neutral-700">
        Tap a category to see what we have in the store.
      </p>
      <CategoryGrid categories={categories} />
    </Container>
  );
}
