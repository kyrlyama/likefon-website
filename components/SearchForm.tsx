import { Search } from "lucide-react";

type SearchFormProps = {
  defaultValue?: string;
};

// A plain HTML form: the browser opens /search?q=... by itself,
// so no useState and no "use client" are needed.
export function SearchForm({ defaultValue = "" }: SearchFormProps) {
  return (
    <form action="/search" role="search" className="flex flex-col gap-4">
      <div className="relative">
        <label htmlFor="search" className="sr-only">
          Search accessories
        </label>
        <Search
          aria-hidden="true"
          className="pointer-events-none absolute top-1/2 left-4 size-5 -translate-y-1/2 text-neutral-500"
        />
        <input
          id="search"
          name="q"
          type="search"
          defaultValue={defaultValue}
          placeholder="Search accessories..."
          className="h-12 w-full rounded-xl border border-neutral-300 bg-white pr-4 pl-12 text-body text-neutral-900 placeholder:text-neutral-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600"
        />
      </div>
      <button
        type="submit"
        className="h-12 self-center rounded-xl bg-primary-500 px-12 text-body font-semibold text-white hover:bg-primary-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600"
      >
        Find
      </button>
    </form>
  );
}
