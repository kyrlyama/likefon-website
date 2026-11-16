type BrandSize = "sm" | "md" | "xl";

type Brand = {
  id: string | number;
  name: string;
  x: number;
  y: number;
  size: BrandSize;
};

type BrandCloudProps = {
  brands: Brand[];
};

// Full class names, written out, so Tailwind can find them.
const sizeClasses: Record<BrandSize, string> = {
  sm: "text-body md:text-h2",
  md: "text-h2 md:text-[2rem]",
  xl: "text-[1.75rem] md:text-[3rem]",
};

// Brand names float over a soft blurred glow. No JavaScript: it is a plain list
// positioned with CSS, so it works as a Server Component.
export function BrandCloud({ brands }: BrandCloudProps) {
  return (
    <div className="relative mx-auto aspect-3/4 w-full max-w-4xl sm:aspect-4/3 md:aspect-2/1">
      {/* Decorative soft glow behind the names (no hard edges) */}
      <div
        aria-hidden="true"
        className="absolute top-[5%] left-0 h-1/2 w-1/2 rounded-full bg-primary-500/10 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="absolute right-0 bottom-[5%] h-1/2 w-1/2 rounded-full bg-primary-100 blur-3xl"
      />

      {/* A real <ul>: screen readers read it as "list, 5 items" */}
      <ul className="absolute inset-0">
        {brands.map((brand, index) => (
          <li
            key={brand.id}
            // -translate-1/2: the point (x, y) is the CENTER of the word,
            // not its top-left corner. Otherwise words at x: 76 overflow.
            className="absolute -translate-x-1/2 -translate-y-1/2"
            style={{ left: `${brand.x}%`, top: `${brand.y}%` }}
          >
            <span
              className={`block animate-levitate font-bold whitespace-nowrap text-neutral-900 motion-reduce:animate-none ${sizeClasses[brand.size]}`}
              style={{
                // Each word gets its own speed (3–5.4 s) and a negative
                // delay (starts "in the middle"), so they don't move
                // together like robots. Based on index, not random,
                // so the server and the browser get the same numbers.
                animationDuration: `${3 + ((index * 0.8) % 2.4)}s`,
                animationDelay: `-${index * 0.9}s`,
              }}
            >
              {brand.name}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
