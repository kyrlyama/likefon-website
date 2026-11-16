"use client";

import { useState } from "react";
import { flushSync } from "react-dom";
import type { Category } from "@/types/category";
import { CategoryCard } from "@/components/CategoryCard";

type CategoryGridProps = {
  categories: Category[];
};

// Runs a DOM update with the View Transitions API: the browser takes a
// "photo" of the page before and after the update and animates between
// them. That is how the other cards slide smoothly to their new places.
function animate(update: () => void) {
  const reducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)",
  ).matches;

  if (!document.startViewTransition || reducedMotion) {
    update(); // old browser or user turned animations off: just update
    return;
  }
  document.startViewTransition(update);
}

export function CategoryGrid({ categories }: CategoryGridProps) {
  // Only one card is open at a time. null = all cards are closed.
  const [openSlug, setOpenSlug] = useState<string | null>(null);

  function toggle(slug: string) {
    const next = openSlug === slug ? null : slug;

    animate(() => {
      // flushSync: React updates the DOM right now (not later), so the
      // browser's "after" photo already shows the new layout.
      flushSync(() => setOpenSlug(next));

      // Move keyboard focus to where the user expects it.
      const target = next
        ? `category-${next}-close`
        : `category-${slug}-toggle`;
      document.getElementById(target)?.focus({ preventScroll: true });
    });

    if (next) {
      // Keep the opened card on screen. Wait for the animation to finish.
      setTimeout(() => {
        document
          .getElementById(`category-${next}`)
          ?.scrollIntoView({ behavior: "smooth", block: "nearest" });
      }, 400);
    }
  }

  return (
    <ul
      // grid-flow-dense: when a card becomes 2 columns wide, smaller cards
      // fill the empty holes, so no card disappears or leaves a gap.
      className="mb-10 grid grid-flow-dense grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4"
      onKeyDown={(event) => {
        if (event.key === "Escape" && openSlug) toggle(openSlug);
      }}
    >
      {categories.map((category) => {
        const isOpen = category.slug === openSlug;

        return (
          <li
            key={category.slug}
            // Each card needs its own unique name, so the browser knows
            // which "before" card is which "after" card.
            style={{ viewTransitionName: `card-${category.slug}` }}
            className={isOpen ? "col-span-2 md:row-span-2" : undefined}
          >
            <CategoryCard
              category={category}
              isOpen={isOpen}
              onToggle={() => toggle(category.slug)}
            />
          </li>
        );
      })}
    </ul>
  );
}
