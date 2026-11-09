import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { PromotionBanner } from "@/components/PromotionBanner";
import { CallStoreLink } from "@/components/CallStoreLink";
import { getActivePromotions } from "@/lib/promotions";

export const metadata: Metadata = {
  title: "Promotions – Likefon Narva",
};

export default async function PromotionsPage() {
  const promotions = await getActivePromotions();

  return (
    <Container>
      <h1 className="mt-6 mb-6 text-h1 font-bold text-neutral-900">
        Promotions
      </h1>

      {promotions.length > 0 ? (
        <ul className="mb-10 flex max-w-3xl flex-col gap-6">
          {promotions.map((promotion, index) => (
            <li key={promotion.id}>
              <PromotionBanner promotion={promotion} preload={index === 0} />
            </li>
          ))}
        </ul>
      ) : (
        // Empty state: explain + next step, never a dead end.
        <div className="mb-10 rounded-2xl bg-white p-6 text-center">
          <p className="mb-4 text-body text-neutral-700">
            No active offers right now. Ask in the store, we often have
            discounts on cases and glass.
          </p>
          <CallStoreLink />
        </div>
      )}
    </Container>
  );
}
