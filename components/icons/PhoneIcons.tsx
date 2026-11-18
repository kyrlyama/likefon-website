import type { SVGProps } from "react";

// Custom icons drawn in the same style as lucide (24×24 grid, 2px stroke,
// round caps, currentColor), so they look like part of the same icon set.
// currentColor: the icon takes the text color of its parent (text-primary-500).

type IconProps = SVGProps<SVGSVGElement>;

const base: IconProps = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

// Old push-button phone: antenna, small screen, keypad.
export function OldPhoneIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M9 5V2" />
      <rect x="6" y="5" width="12" height="17" rx="2" />
      <rect x="9" y="8" width="6" height="4" rx="0.5" />
      <path d="M9.5 15h.01M12 15h.01M14.5 15h.01M9.5 18h.01M12 18h.01M14.5 18h.01" />
    </svg>
  );
}

// New smartphone with a sparkle: "new phone, ready to set up".
export function NewPhoneIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <rect x="3" y="3" width="12" height="19" rx="2.5" />
      <path d="M8 18h2" />
      <path d="M20 2v4M18 4h4" />
      <path d="M20.5 9.5v2M19.5 10.5h2" />
    </svg>
  );
}
