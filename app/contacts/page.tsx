import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { StoreCard } from "@/components/StoreCard";
import { getStores } from "@/lib/stores";

export const metadata: Metadata = {
  title: "Contacts – Likefon stores in Narva",
};

export default async function ContactsPage() {
  const stores = await getStores();

  return (
    <Container>
      <h1 className="mt-6 mb-6 text-h1 font-bold text-neutral-900">Contacts</h1>
      <ul className="mb-10 grid gap-6 md:grid-cols-2">
        {stores.map((store) => (
          <li key={store.id}>
            <StoreCard store={store} />
          </li>
        ))}
      </ul>
    </Container>
  );
}
