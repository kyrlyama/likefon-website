import { Phone } from "lucide-react";
import { STORE_PHONE } from "@/lib/contact";
import { ButtonLink } from "@/components/ui/ButtonLink";

export function CallStoreLink() {
  return (
    <ButtonLink href={`tel:${STORE_PHONE}`}>
      <Phone className="size-5" aria-hidden="true" />
      Call the store
    </ButtonLink>
  );
}
