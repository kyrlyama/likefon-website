import { Phone } from "lucide-react";
import { STORE_PHONE } from "../lib/contact";

// A link, not a button: it goes somewhere (opens the phone app).
export function CallStoreLink() {
  return (
    <a
      href={`tel:${STORE_PHONE}`}
      className="inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-primary-500 px-6 text-body font-semibold text-white hover:bg-primary-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600"
    >
      <Phone className="size-5" aria-hidden="true" />
      Call the store
    </a>
  );
}
