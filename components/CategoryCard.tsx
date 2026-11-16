"use client";

import type { PointerEvent } from "react";
import Image from "next/image";
import { Check, X } from "lucide-react";
import type { Category } from "@/types/category";

type CategoryCardProps = {
  category: Category;
  isOpen: boolean;
  onToggle: () => void;
};

// 3D tilt: the card leans toward the mouse and the photo floats above it.
// CSS variables are written straight to the element (no useState), because
// pointermove fires ~60 times per second and re-rendering that often is slow.
function tiltHandlers(maxTilt: number) {
  return {
    onPointerMove(event: PointerEvent<HTMLElement>) {
      if (event.pointerType !== "mouse") return; // no tilt on touch screens
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

      const el = event.currentTarget;
      const rect = el.getBoundingClientRect();
      const x = (event.clientX - rect.left) / rect.width; // 0 .. 1
      const y = (event.clientY - rect.top) / rect.height; // 0 .. 1

      el.style.setProperty("--ry", `${(x - 0.5) * 2 * maxTilt}deg`);
      el.style.setProperty("--rx", `${(0.5 - y) * 2 * maxTilt}deg`);
      el.style.setProperty("--mx", `${x * 100}%`);
      el.style.setProperty("--my", `${y * 100}%`);
    },
    onPointerLeave(event: PointerEvent<HTMLElement>) {
      event.currentTarget.style.setProperty("--rx", "0deg");
      event.currentTarget.style.setProperty("--ry", "0deg");
    },
  };
}

const smallTilt = tiltHandlers(8);
const bigTilt = tiltHandlers(4); // a big card tilting 8° looks too much

const tiltStyle = {
  transform: "rotateX(var(--rx, 0deg)) rotateY(var(--ry, 0deg))",
};

const tiltClasses =
  "group relative transition-transform duration-200 ease-out transform-3d motion-reduce:transition-none";

const focusRing =
  "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600";

// Card surface with the Figma states (node 420:553):
// default = white + neutral-200 border, hover = primary-500 border + light
// tint, pressed/open = primary-600 border + stronger tint.
// It is a separate layer, so the photo and text can float above it in 3D.
function CardSurface({ open }: { open: boolean }) {
  return (
    <>
      <span
        aria-hidden="true"
        className={`pointer-events-none absolute inset-0 rounded-2xl border-2 transition-colors duration-200 ${
          open
            ? "border-primary-600 bg-primary-50 shadow-lg"
            : "border-neutral-200 bg-white group-hover:border-primary-500 group-hover:bg-primary-50 group-active:border-primary-600 group-active:bg-primary-100"
        }`}
      />
      {/* Light reflection that follows the mouse */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-200 group-hover:opacity-100"
        style={{
          background:
            "radial-gradient(circle at var(--mx, 50%) var(--my, 50%), rgb(255 255 255 / 0.6), transparent 50%)",
        }}
      />
    </>
  );
}

const floatPhoto =
  "transition-transform duration-300 ease-out group-hover:translate-z-10 group-hover:scale-105 motion-reduce:transition-none";

export function CategoryCard({
  category,
  isOpen,
  onToggle,
}: CategoryCardProps) {
  const panelId = `category-${category.slug}`;

  if (!isOpen) {
    return (
      // perspective: how "deep" the 3D looks. Smaller = stronger effect.
      <div className="perspective-[900px]">
        <button
          type="button"
          id={`${panelId}-toggle`}
          onClick={onToggle}
          {...smallTilt}
          aria-expanded={false}
          aria-controls={panelId}
          style={tiltStyle}
          className={`flex aspect-15/16 w-full flex-col rounded-2xl p-2 text-left ${tiltClasses} ${focusRing}`}
        >
          <CardSurface open={false} />
          <span className={`relative block w-full flex-1 ${floatPhoto}`}>
            <Image
              src={category.image}
              alt=""
              fill
              sizes="(min-width: 1024px) 270px, (min-width: 768px) 33vw, 50vw"
              className="object-contain drop-shadow-md"
            />
          </span>
          <span className="relative mt-1 px-1 pb-1 text-body font-semibold text-neutral-900 transition-transform duration-300 group-hover:translate-z-5">
            {category.name}
          </span>
        </button>
      </div>
    );
  }

  // Open: a bigger card with the same tilt (a bit softer).
  return (
    <div className="h-full perspective-[1400px]">
      <article
        id={panelId}
        aria-labelledby={`${panelId}-title`}
        {...bigTilt}
        style={tiltStyle}
        className={`flex h-full flex-col gap-4 rounded-2xl p-4 md:p-6 ${tiltClasses}`}
      >
        <CardSurface open />

        <button
          type="button"
          id={`${panelId}-close`}
          onClick={onToggle}
          aria-label={`Close ${category.name}`}
          className={`absolute top-3 right-3 z-10 flex size-11 items-center justify-center rounded-full border-2 border-neutral-200 bg-white text-neutral-900 transition-transform translate-z-8 hover:border-primary-500 ${focusRing}`}
        >
          <X className="size-5" aria-hidden="true" />
        </button>

        <div className={`relative h-60 md:h-80 ${floatPhoto}`}>
          <Image
            src={category.image}
            alt=""
            fill
            sizes="(min-width: 768px) 560px, 100vw"
            className="object-contain drop-shadow-lg"
          />
        </div>

        <div className="relative translate-z-4">
          <h2
            id={`${panelId}-title`}
            className="mb-3 text-h2 font-bold text-neutral-900"
          >
            {category.name}
          </h2>
          <ul className="grid gap-2 sm:grid-cols-2">
            {category.items.map((item) => (
              <li
                key={item}
                className="flex items-start gap-2 text-body text-neutral-900"
              >
                <Check
                  className="mt-1 size-4 shrink-0 text-primary-600"
                  aria-hidden="true"
                />
                {item}
              </li>
            ))}
          </ul>
        </div>

        <p className="relative mt-auto text-caption text-neutral-700">
          Not sure it fits your phone? Ask us in the store.
        </p>
      </article>
    </div>
  );
}
