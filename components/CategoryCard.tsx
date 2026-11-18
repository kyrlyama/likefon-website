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

// Card surface: liquid glass, the same .glass utility as the service cards
// (app/globals.css), so the whole site shares one material.
// States: default = glass, hover = more white + soft blue edge,
// pressed = light blue tint, open = whiter glass + blue ring.
// It is a separate layer (not the button itself), so the photo and text can
// float above it in 3D, and the blur stays on a flat layer.
function CardSurface({ open }: { open: boolean }) {
  return (
    <>
      <span
        aria-hidden="true"
        className={`glass pointer-events-none absolute inset-0 rounded-3xl transition-colors duration-200 ${
          open
            ? "bg-white/75 ring-2 ring-primary-500/40"
            : "group-hover:border-primary-500/40 group-hover:bg-white/75 group-active:bg-primary-100/70"
        }`}
      />
      {/* Light reflection that follows the mouse */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 rounded-3xl opacity-0 transition-opacity duration-200 group-hover:opacity-100"
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
          className={`flex aspect-15/16 w-full flex-col rounded-3xl p-2 text-left ${tiltClasses} ${focusRing}`}
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
        className={`flex h-full flex-col gap-4 rounded-3xl p-5 md:p-6 ${tiltClasses}`}
      >
        <CardSurface open />

        {/* translate-z-12 (48px), not z-10: inside transform-3d the browser
            ignores z-index and sorts children by their 3D depth. The photo
            floats to translate-z-10 (40px) on hover, so a button at 32px
            was BEHIND the photo and the photo caught every click. */}
        <button
          type="button"
          id={`${panelId}-close`}
          onClick={onToggle}
          aria-label={`Close ${category.name}`}
          className={`absolute top-3 right-3 flex size-11 items-center justify-center rounded-full border border-neutral-900/10 bg-white/80 text-neutral-900 translate-z-12 hover:bg-white active:bg-primary-100 ${focusRing}`}
        >
          <X className="size-5" aria-hidden="true" />
        </button>

        {/* pointer-events-none: the photo is decoration, so clicks go
            through it to whatever is underneath (like the close button). */}
        <div
          className={`pointer-events-none relative h-60 md:h-80 ${floatPhoto}`}
        >
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
