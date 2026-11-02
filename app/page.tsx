import { formatPrice } from "@/lib/format";

export default function Home() {
  return (
    <main>
      <h1>Price test: {formatPrice(12)}</h1>
      <h1>Price test:{formatPrice(12)}</h1>
      <h1>Price test:{formatPrice(12)} </h1>
    </main>
  );
}