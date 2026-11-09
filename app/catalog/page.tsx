import { Container } from "@/components/layout/Container";
import { CategoryCard } from "@/components/CategoryCard";
import { getCategories } from "@/lib/categories";

export default async function CatalogPage() {
  const categories = await getCategories();

  return (
    <Container>
      <h1 className="mt-6 mb-6 text-h1 font-bold text-neutral-900">
        What we sell
      </h1>
      <ul className="mb-10 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
        {categories.map((category) => (
          <li key={category.slug}>
            <CategoryCard category={category} />
          </li>
        ))}
      </ul>
    </Container>
  );
}
