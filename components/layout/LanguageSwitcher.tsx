"use client";

import { useState } from "react";

type Language = "en" | "et" | "ru";

const languages: { code: Language; label: string }[] = [
  { code: "en", label: "EN" },
  { code: "et", label: "ET" },
  { code: "ru", label: "RU" },
];

export function LanguageSwitcher() {
  const [current, setCurrent] = useState<Language>("en");

  return (
    <div
      role="group"
      aria-label="Language"
      className="grid grid-cols-3 gap-1 rounded-xl bg-neutral-100 p-1"
    >
      {languages.map((language) => {
        const isActive = language.code === current;

        return (
          <button
            key={language.code}
            type="button"
            aria-pressed={isActive}
            onClick={() => setCurrent(language.code)}
            className={`rounded-lg px-4 py-2 text-body font-semibold ${
              isActive
                ? "bg-white text-primary-600 shadow-sm"
                : "text-neutral-700 hover:text-neutral-900"
            }`}
          >
            {language.label}
          </button>
        );
      })}
    </div>
  );
}
