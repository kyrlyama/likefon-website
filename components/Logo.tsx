import { PhoneCall } from "lucide-react";

type LogoProps = {
  className?: string;
};

// The Likefon logo: "Like" + a phone handset with signal waves, as on the
// store sign. Text + icon (not an image): it stays sharp at any size and
// uses our own font. The size comes from the parent's font size (em units).
// Ask the client for the original logo file (SVG) for the final version.
export function Logo({ className = "" }: LogoProps) {
  return (
    // items-center: the handset sits next to the word, centred on the
    // letters, not raised above them.
    <span
      className={`inline-flex items-center font-extrabold tracking-tight text-neutral-900 ${className}`}
    >
      Like
      {/* -scale-x-100 mirrors lucide's PhoneCall, so the waves point
          up-left like on the sign. aria-hidden: the parent link has the
          name. */}
      <PhoneCall
        aria-hidden="true"
        strokeWidth={2.75}
        className="ml-1 size-[0.8em] -scale-x-100 text-primary-600"
      />
    </span>
  );
}
