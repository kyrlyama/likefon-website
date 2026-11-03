"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { navLinks } from "@/lib/navigation";

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

          <nav
            aria-label="Mobile"
            className="absolute inset-y-0 right-0 w-3/4 max-w-xs bg-neutral-50 p-4"
          >
            <button
              type="button"
              aria-label="Close menu"
              onClick={() => setIsOpen(false)}
              className="ml-auto flex size-12 items-center justify-center text-neutral-900"
            >
              <X />
            </button>

            <ul className="mt-4 flex flex-col">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="block py-3 text-neutral-900"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      )}
    </div>
  );
}
