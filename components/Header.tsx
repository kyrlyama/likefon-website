import Link from "next/link";
import { Menu } from "lucide-react";
import { Container } from "@/components/Container";

type NavLink = {
  href: string;
  label: string;
};

const navLinks: NavLink[] = [
  { href: "/catalog", label: "Catalog" },
  { href: "/services", label: "Services" },
  { href: "/promotions", label: "Promotions" },
  { href: "/brands", label: "Brands" },
  { href: "/contacts", label: "Contacts" },
];

export function Header() {
  return (
    <header className="border-b border-neutral-200">
      <Container>
        <div className="flex items-center justify-between py-4">
          <Link href="/" className="text-h1 font-bold text-neutral-900">
            Like
          </Link>

          <nav aria-label="Main" className="hidden gap-6 lg:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-neutral-700 hover:text-primary-600"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <button
            type="button"
            aria-label="Open menu"
            className="flex size-12 items-center justify-center rounded-full bg-primary-600 text-white lg:hidden"
          >
            <Menu />
          </button>
        </div>
      </Container>
    </header>
  );
}
