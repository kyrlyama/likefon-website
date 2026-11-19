"use client";

import { useState } from "react";

type Language = "en" | "et" | "ru";

type LanguageSwitcherProps = {
  // sm: laptop header, same 40px height as the "Call the store" button.
  // md: mobile menu, 44px+ touch targets.
  size?: "sm" | "md";
};

const languages: { code: Language; label: string }[] = [
  { code: "en", label: "EN" },
  { code: "et", label: "ET" },
  { code: "ru", label: "RU" },
];

const sizes = {
  sm: "h-8 px-3 text-sm",
  md: "h-11 px-4 text-body",
};

export function LanguageSwitcher({ size = "md" }: LanguageSwitcherProps) {
  const [current, setCurrent] = useState<Language>("en");

  return (
    // rounded-full on the group AND the buttons: the same pill shape as the
    // header and the buttons. The inner radius follows the outer one, so the
    // white pill sits evenly inside the grey one.
    <div
      role="group"
      aria-label="Language"
      className="grid grid-cols-3 gap-1 rounded-full bg-neutral-900/5 p-1"
    >
      {languages.map((language) => {
        const isActive = language.code === current;

        return (
          <button
            key={language.code}
            type="button"
            aria-pressed={isActive}
            onClick={() => setCurrent(language.code)}
            className={`rounded-full font-semibold focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600 ${sizes[size]} ${
              isActive
                ? "bg-white text-primary-600 shadow-sm"
                : "text-neutral-700 hover:bg-white/60 hover:text-neutral-900"
            }`}
          >
            {language.label}
          </button>
        );
      })}
    </div>
  );
}
