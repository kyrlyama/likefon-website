import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { MobileMenu } from "@/components/layout/MobileMenu";
import { navLinks } from "@/lib/navigation";
import { LanguageSwitcher } from "@/components/layout/LanguageSwitcher";

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
          <div className="hidden lg:block">
            <LanguageSwitcher />
          </div>
          <MobileMenu />
        </div>
      </Container>
    </header>
  );
}
