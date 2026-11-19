import Link from "next/link";
import { Phone } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { MobileMenu } from "@/components/layout/MobileMenu";
import { navLinks } from "@/lib/navigation";
import { LanguageSwitcher } from "@/components/layout/LanguageSwitcher";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { STORE_PHONE } from "@/lib/contact";
import { Logo } from "@/components/Logo";

const focusRing =
  "focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary-600";

export function Header() {
  return (
    <header className="sticky top-0 z-20 pt-3">
      <Container>
        <div className="glass flex items-center justify-between rounded-full py-2 pr-2 pl-5">
          {/* aria-label: screen readers say "Likefon, home page", not "Like". */}
          <Link
            href="/"
            aria-label="Likefon, home page"
            className={`rounded-full text-h1 ${focusRing}`}
          >
            <Logo />
          </Link>

          <nav aria-label="Main" className="hidden gap-1 lg:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-full px-3 py-2 text-neutral-700 hover:bg-white/70 hover:text-neutral-900"
              >
                {link.label}
              </Link>
            ))}
          </nav>
          {/* Laptop: language + call. Phone: both live in the MobileMenu. */}
          <div className="hidden items-center gap-2 lg:flex">
            <LanguageSwitcher size="sm" />
            <ButtonLink href={`tel:${STORE_PHONE}`} size="sm">
              <Phone className="size-4" aria-hidden="true" />
              Call the store
            </ButtonLink>
          </div>
          <MobileMenu />
        </div>
      </Container>
    </header>
  );
}
