import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { navLinks } from "@/lib/navigation";
export default function Footer() {
  return (
    <footer className="bg-neutral-900 text-white py-4">
      <Container>
        <nav aria-label="Footer">
          <ul className="mb-4 flex flex-wrap justify-end gap-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="hover:underline">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <p className="text-center">© Like. All rights reserved.</p>
      </Container>
    </footer>
  );
}
