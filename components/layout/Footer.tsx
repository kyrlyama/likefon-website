import Link from "next/link";
import { Container } from "@/components/layout/Container";
export default function Footer() {
  return (
    <footer className="bg-neutral-900 text-white py-4">
      <Container>
        <nav aria-label="Footer">
          <ul className="mb-4 flex flex-wrap justify-end gap-4">
            <li>
              <Link href="/catalog" className="hover:underline">
                Catalog
              </Link>
            </li>
            <li>
              <Link href="/services" className="hover:underline">
                Services
              </Link>
            </li>
            <li>
              <Link href="/promotions" className="hover:underline">
                Promotions
              </Link>
            </li>
            <li>
              <Link href="/brands" className="hover:underline">
                Brands
              </Link>
            </li>
            <li>
              <Link href="/contacts" className="hover:underline">
                Contacts
              </Link>
            </li>
          </ul>
          <div className="Container">
            <p className="text-center">© Like. All rights reserved.</p>
          </div>
        </nav>
      </Container>
    </footer>
  );
}
