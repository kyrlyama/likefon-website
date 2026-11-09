export function formatPrice(price: number): string {
  return new Intl.NumberFormat("et-EE", {
    style: "currency",
    currency: "EUR",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(price);
}

// 10, 15 -> "10–15 €". 0 -> "Free". Same min and max -> "10 €".
export function formatPriceRange(min: number, max?: number): string {
  if (min === 0 && !max) return "Free";
  if (max === undefined || max === min) return formatPrice(min);
  return `${min}–${formatPrice(max)}`;
}

// "2026-12-31" -> "31.12.2026" (Estonian date format)
export function formatDate(isoDate: string): string {
  return new Intl.DateTimeFormat("et-EE", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    timeZone: "Europe/Tallinn",
  }).format(new Date(isoDate));
}
