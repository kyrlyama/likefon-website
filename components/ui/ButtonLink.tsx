import Link from "next/link";
import type { ReactNode } from "react";

type ButtonLinkProps = {
  href: string;
  variant?: "primary" | "secondary" | "glass";
  size?: "md" | "sm";
  external?: boolean;
  className?: string;
  children: ReactNode;
};

// Looks like a button, but it is a link: it goes somewhere
// (phone app, SMS app, Google Maps). Real <button> is for actions on the page.
const base =
  "inline-flex items-center justify-center gap-2 rounded-full font-semibold focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600";

// Size is a prop, not extra classes from outside: "h-12" + "h-10" on the
// same element would conflict, and the winner depends on CSS order, not on
// which class you wrote last.
// sm (40px) is only for the laptop header, where the mouse is precise.
// Touch screens keep md (48px): bigger than the 44px minimum touch target.
const sizes = {
  md: "h-12 px-6 text-body",
  sm: "h-10 px-4 text-sm",
};

const variants = {
  primary: "bg-primary-500 text-white hover:bg-primary-700",
  secondary:
    "border border-neutral-300 bg-white text-primary-500 hover:border-primary-500 hover:bg-primary-50",
  glass:
    "border border-neutral-900/10 bg-white/70 text-neutral-900 hover:bg-white",
};

export function ButtonLink({
  href,
  variant = "primary",
  size = "md",
  external = false,
  className = "",
  children,
}: ButtonLinkProps) {
  const classes = `${base} ${sizes[size]} ${variants[variant]} ${className}`;

  // Pages of our own site ("/contacts"): next/link changes the page
  // without a full reload. tel:, sms: and https: links stay a plain <a>.
  if (href.startsWith("/")) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <a
      href={href}
      className={classes}
      // New tab + noopener: the opened site can't control our page.
      {...(external && { target: "_blank", rel: "noopener noreferrer" })}
    >
      {children}
    </a>
  );
}
