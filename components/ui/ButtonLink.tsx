import type { ReactNode } from "react";

type ButtonLinkProps = {
  href: string;
  variant?: "primary" | "secondary";
  external?: boolean;
  children: ReactNode;
};

// Looks like a button, but it is a link: it goes somewhere
// (phone app, SMS app, Google Maps). Real <button> is for actions on the page.
const base =
  "inline-flex h-12 items-center justify-center gap-2 rounded-xl px-6 text-body font-semibold focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600";

const variants = {
  primary: "bg-primary-500 text-white hover:bg-primary-700",
  secondary:
    "border border-neutral-300 bg-white text-primary-500 hover:border-primary-500 hover:bg-primary-50",
};

export function ButtonLink({
  href,
  variant = "primary",
  external = false,
  children,
}: ButtonLinkProps) {
  return (
    <a
      href={href}
      className={`${base} ${variants[variant]}`}
      // New tab + noopener: the opened site can't control our page.
      {...(external && { target: "_blank", rel: "noopener noreferrer" })}
    >
      {children}
    </a>
  );
}
