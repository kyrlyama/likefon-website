"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronRight, Menu, Phone, X } from "lucide-react";
import { navLinks } from "@/lib/navigation";
import { LanguageSwitcher } from "@/components/layout/LanguageSwitcher";

export function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="lg:hidden">
      <button
        type="button"
        aria-label="Open menu"
        aria-expanded={isOpen}
        onClick={() => setIsOpen(true)}
        className="flex size-12 items-center justify-center rounded-full bg-primary-600 text-white hover:bg-primary-700"
      >
        <Menu />
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-50">
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-neutral-900/30"
            onClick={() => setIsOpen(false)}
          />

          <div className="absolute inset-y-0 right-0 flex w-5/6 max-w-sm flex-col gap-6 overflow-y-auto rounded-l-3xl bg-white p-6">
            <div className="flex items-center justify-between">
              <span className="text-h2 font-bold text-neutral-900">Like</span>
              <button
                type="button"
                aria-label="Close menu"
                onClick={() => setIsOpen(false)}
                className="flex size-12 items-center justify-center rounded-xl bg-neutral-100 text-neutral-900 hover:bg-neutral-200"
              >
                <X />
              </button>
            </div>

            <nav aria-label="Mobile">
              <ul className="divide-y divide-neutral-200 overflow-hidden rounded-2xl bg-neutral-50">
                {navLinks.map((link) => {
                  const Icon = link.icon;

                  return (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        onClick={() => setIsOpen(false)}
                        className="flex items-center gap-3 px-4 py-3 text-body font-semibold text-neutral-900 hover:bg-neutral-100"
                      >
                        <Icon
                          className="size-5 text-primary-600"
                          aria-hidden="true"
                        />
                        <span className="flex-1">{link.label}</span>
                        <ChevronRight
                          className="size-5 text-neutral-500"
                          aria-hidden="true"
                        />
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </nav>

            <LanguageSwitcher />

            <div className="mt-auto flex flex-col gap-2">
              <a
                href="tel:+372XXXXXXXX"
                className="flex items-center justify-center gap-2 rounded-xl bg-primary-600 py-3 text-body font-semibold text-white hover:bg-primary-700"
              >
                <Phone className="size-5" aria-hidden="true" />
                Call the store
              </a>
              <p className="text-center text-caption text-neutral-500">
                Fama Keskus and Astri Keskus, Narva
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
