"use client";

import { useEffect, useState, useSyncExternalStore } from "react";
import type { FocusEvent, TouchEvent } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  ChevronLeft,
  ChevronRight,
  Pause,
  Play,
} from "lucide-react";

type HeroSlide = {
  id: string | number;
  image: string;
  alt: string;
  focus: string;
  href: string;
  linkLabel: string;
  caption?: {
    title: string;
    subtitle: string;
  };
};

type HeroCarouselProps = {
  slides: HeroSlide[];
};

const INTERVAL_MS = 6000; // time each slide stays on screen
const SWIPE_PX = 50; // how far a finger must move to count as a swipe

const focusRing =
  "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600";

const roundButton = `glass flex size-11 items-center justify-center rounded-full text-neutral-900 hover:bg-white active:bg-primary-100 ${focusRing}`;

// Reads the system setting "reduce motion" and updates if it changes.
// useSyncExternalStore is React's tool for values that live outside React
// (here: the browser). The 3rd function is for the server, which has no
// window: we assume "no preference" there.
const REDUCED_MOTION = "(prefers-reduced-motion: reduce)";

function subscribe(onChange: () => void) {
  const query = window.matchMedia(REDUCED_MOTION);
  query.addEventListener("change", onChange);
  return () => query.removeEventListener("change", onChange);
}

function usePrefersReducedMotion() {
  return useSyncExternalStore(
    subscribe,
    () => window.matchMedia(REDUCED_MOTION).matches,
    () => false,
  );
}

export function HeroCarousel({ slides }: HeroCarouselProps) {
  const [index, setIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true); // the user's choice
  const [isInteracting, setIsInteracting] = useState(false); // hover/focus
  const [touchStartX, setTouchStartX] = useState<number | null>(null);
  const reducedMotion = usePrefersReducedMotion();

  const count = slides.length;
  // Auto-play only when it can't annoy anyone: more than one slide, the
  // user didn't press pause, they don't prefer less motion, and they are
  // not reading or clicking inside the carousel right now.
  const autoPlay = count > 1 && isPlaying && !reducedMotion && !isInteracting;

  // % (modulo) makes the index wrap around: after the last slide comes the
  // first one, and before the first one comes the last one.
  const goTo = (next: number) => setIndex((next + count) % count);

  useEffect(() => {
    if (!autoPlay) return;
    // setTimeout (not setInterval) with index in the dependencies: when the
    // user clicks an arrow, the timer starts again from zero, so the slide
    // doesn't jump away a second after they chose it.
    const timer = setTimeout(() => goTo(index + 1), INTERVAL_MS);
    return () => clearTimeout(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [autoPlay, index]);

  if (count === 0) return null;

  function handleBlur(event: FocusEvent<HTMLElement>) {
    // Only resume when focus leaves the whole carousel, not when it moves
    // from one of our buttons to another.
    if (!event.currentTarget.contains(event.relatedTarget)) {
      setIsInteracting(false);
    }
  }

  function handleTouchEnd(event: TouchEvent) {
    if (touchStartX === null) return;
    const distance = event.changedTouches[0].clientX - touchStartX;
    if (distance > SWIPE_PX) goTo(index - 1); // finger moved right
    if (distance < -SWIPE_PX) goTo(index + 1); // finger moved left
    setTouchStartX(null);
  }

  return (
    <section
      aria-roledescription="carousel"
      aria-label="Promotions and our stores"
      className="mb-10"
      onMouseEnter={() => setIsInteracting(true)}
      onMouseLeave={() => setIsInteracting(false)}
      onFocus={() => setIsInteracting(true)}
      onBlur={handleBlur}
    >
      <div
        className="overflow-hidden rounded-3xl shadow-lg shadow-primary-700/10"
        onTouchStart={(event) => setTouchStartX(event.touches[0].clientX)}
        onTouchEnd={handleTouchEnd}
      >
        {/* All slides sit in one long row; we move the row left by
            100% per slide. aria-live: screen readers announce a new slide
            only when the user changed it, not every 6 seconds. */}
        <div
          aria-live={autoPlay ? "off" : "polite"}
          className="flex transition-transform duration-700 ease-out motion-reduce:transition-none"
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {slides.map((slide, i) => {
            const isActive = i === index;

            return (
              <div
                key={slide.id}
                role="group"
                aria-roledescription="slide"
                aria-label={`${i + 1} of ${count}`}
                // inert: hidden slides can't be focused or clicked, so Tab
                // doesn't jump into a slide you can't see.
                inert={!isActive}
                className="relative aspect-2/1 w-full shrink-0"
              >
                <Image
                  src={slide.image}
                  alt={slide.alt}
                  fill
                  sizes="(min-width: 1152px) 1120px, 100vw"
                  // Only the first slide is needed right away.
                  preload={i === 0}
                  className="object-cover"
                  style={{ objectPosition: slide.focus }}
                />

                {slide.caption ? (
                  // Store photo: a glass label with the name and a link.
                  <div className="glass absolute bottom-3 left-3 flex items-center gap-3 rounded-2xl py-2 pr-2 pl-4 md:bottom-6 md:left-6 md:gap-6 md:py-3 md:pr-3 md:pl-5">
                    <div>
                      <p className="text-body font-bold text-neutral-900 md:text-h2">
                        {slide.caption.title}
                      </p>
                      <p className="text-caption text-neutral-700 md:text-body">
                        {slide.caption.subtitle}
                      </p>
                    </div>
                    <a
                      href={slide.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`inline-flex h-11 items-center gap-1 rounded-full bg-primary-500 px-4 text-sm font-semibold text-white hover:bg-primary-700 ${focusRing}`}
                    >
                      {slide.linkLabel}
                      <ArrowUpRight className="size-4" aria-hidden="true" />
                    </a>
                  </div>
                ) : (
                  // Promotion banner: its text is inside the image, so the
                  // whole banner is the link. The alt text names the offer.
                  <Link
                    href={slide.href}
                    aria-label={`${slide.linkLabel}: ${slide.alt}`}
                    className={`absolute inset-0 rounded-3xl focus-visible:outline-4 focus-visible:-outline-offset-4 focus-visible:outline-primary-600`}
                  />
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Controls under the photo, not on top: they never cover the text
          inside a banner, and they are easy to reach on a phone. */}
      {count > 1 && (
        <div className="mt-3 flex items-center justify-between gap-4">
          <div className="flex gap-2">
            {slides.map((slide, i) => (
              <button
                key={slide.id}
                type="button"
                onClick={() => goTo(i)}
                aria-label={`Show slide ${i + 1} of ${count}`}
                aria-current={i === index ? "true" : undefined}
                // The visible dot is small, but the button is 24×24px,
                // so it is still easy to tap.
                className={`flex size-6 items-center justify-center rounded-full ${focusRing}`}
              >
                <span
                  aria-hidden="true"
                  className={`block h-2 rounded-full transition-all duration-300 motion-reduce:transition-none ${
                    i === index ? "w-6 bg-primary-500" : "w-2 bg-neutral-900/25"
                  }`}
                />
              </button>
            ))}
          </div>

          <div className="flex gap-2">
            {/* WCAG 2.2.2: content that moves by itself for more than
                5 seconds needs a way to stop it. */}
            {!reducedMotion && (
              <button
                type="button"
                onClick={() => setIsPlaying(!isPlaying)}
                aria-label={isPlaying ? "Pause slideshow" : "Play slideshow"}
                className={roundButton}
              >
                {isPlaying ? (
                  <Pause className="size-5" aria-hidden="true" />
                ) : (
                  <Play className="size-5" aria-hidden="true" />
                )}
              </button>
            )}
            <button
              type="button"
              onClick={() => goTo(index - 1)}
              aria-label="Previous slide"
              className={roundButton}
            >
              <ChevronLeft className="size-5" aria-hidden="true" />
            </button>
            <button
              type="button"
              onClick={() => goTo(index + 1)}
              aria-label="Next slide"
              className={roundButton}
            >
              <ChevronRight className="size-5" aria-hidden="true" />
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
