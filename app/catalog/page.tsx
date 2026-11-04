import { Container } from "@/components/layout/Container";
import { CategoryCard } from "@/components/CategoryCard";
import { getCategories } from "@/lib/categories";

export default async function CatalogPage() {
  const categories = await getCategories();

  return (
    <Container>
      <h1 className="text-h1 text-primary-600">Catalog</h1>
      <div className="grid-cols-4">
        {categories.map((category) => (
          <CategoryCard key={category.slug} category={category} />
        ))}
      </div>
    </Container>
  );
}
