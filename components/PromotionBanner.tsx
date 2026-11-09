import Image from "next/image";
import type { Promotion } from "@/types/promotion";
import { formatDate } from "@/lib/format";

type PromotionBannerProps = {
  promotion: Promotion;
  preload?: boolean;
};

export function PromotionBanner({
  promotion,
  preload = false,
}: PromotionBannerProps) {
  return (
    <article className="overflow-hidden rounded-2xl border border-neutral-200 bg-white">
      <div className="relative aspect-2/1">
        <Image
          src={promotion.image}
          alt={promotion.imageAlt}
          fill
          sizes="(min-width: 768px) 768px, 100vw"
          preload={preload}
          className="object-cover"
        />
      </div>
      <div className="p-4">
        <h2 className="mb-1 text-h2 font-bold text-neutral-900">
          {promotion.title}
        </h2>
        <p className="mb-2 text-body text-neutral-700">
          {promotion.description}
        </p>
        <p className="text-caption text-neutral-500">
          Valid until {formatDate(promotion.validUntil)}
        </p>
      </div>
    </article>
  );
}
