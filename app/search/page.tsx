import { Suspense } from "react";
import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { CategoryCard } from "@/components/CategoryCard";
import { SearchForm } from "@/components/SearchForm";
import { CallStoreLink } from "@/components/CallStoreLink";
import { searchCategories } from "@/lib/categories";

export const metadata: Metadata = {
  title: "Search – Likefon Narva",
};

type SearchParams = Promise<{ q?: string | string[] }>;

// The page itself is static (heading), it can be prepared at build time.
// Only the results depend on the URL, so they are wrapped in <Suspense>:
// the static part shows instantly, results stream in after.
export default function SearchPage({
  searchParams,
}: {
  searchParams: SearchParams;
}) {
  return (
    <Container>
      <h1 className="mt-6 mb-6 text-h1 font-bold text-neutral-900">Search</h1>
      <Suspense
        fallback={<p className="text-body text-neutral-500">Searching…</p>}
      >
        <SearchResults searchParams={searchParams} />
      </Suspense>
    </Container>
  );
}

async function SearchResults({ searchParams }: { searchParams: SearchParams }) {
  const { q } = await searchParams;
  // ?q=a&q=b gives an array, so take the first value.
  const query = (Array.isArray(q) ? q[0] : q) ?? "";
  const results = await searchCategories(query);

  return (
    <>
      <div className="mb-8 max-w-3xl">
        <SearchForm defaultValue={query} />
      </div>

      {results.length > 0 ? (
        <ul className="mb-10 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
          {results.map((category) => (
            <li key={category.slug}>
              <CategoryCard category={category} />
            </li>
          ))}
        </ul>
      ) : (
        // Never a dead end: explain and offer the next step.
        <div className="mb-10 rounded-2xl bg-white p-6 text-center">
          <p className="mb-4 text-body text-neutral-700">
            {query
              ? `We didn't find "${query}" online, but we may have it in the store.`
              : "Type what you are looking for."}
          </p>
          <CallStoreLink />
        </div>
      )}
    </>
  );
}
