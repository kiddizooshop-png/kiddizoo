import { createFileRoute, Link } from "@tanstack/react-router";
import { z } from "zod";
import { ProductCard } from "@/components/site/ProductCard";
import {
  ageBandInfo,
  AGE_BANDS,
  CATEGORIES,
  categoryInfo,
  filterProducts,
  type AgeBand,
  type Category,
} from "@/data/products";
import { cn } from "@/lib/utils";

const searchSchema = z.object({
  category: z.enum(CATEGORIES).optional().catch(undefined),
  age: z.enum(AGE_BANDS).optional().catch(undefined),
});

export const Route = createFileRoute("/shop/")({
  validateSearch: (
    search: Record<string, unknown>,
  ): { category?: Category | undefined; age?: AgeBand | undefined } => searchSchema.parse(search),
  head: () => ({
    meta: [
      { title: "Shop kids wear — Rompers, shirts & bottoms | kiddi.zoo" },
      { name: "description", content: "Browse kiddi.zoo rompers, shirts, tees, joggers, shorts and leggings for ages 0–12." },
      { property: "og:title", content: "Shop kids wear | kiddi.zoo" },
      { property: "og:description", content: "Rompers, shirts and bottoms for ages 0–12 with playful animal prints." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Shop,
});

const chip =
  "rounded-full border-2 border-ink px-4 py-2 font-display font-bold transition-transform hover:-translate-y-0.5";

function Shop() {
  const { category, age } = Route.useSearch();
  const list = filterProducts({ category, age });
  const title = category ? categoryInfo[category].label : "The whole zoo";

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6">
      <div className="relative overflow-hidden rounded-[2.5rem] border-2 border-ink bg-sky-soft px-6 py-10 shadow-sticker-lg sm:px-10">
        <div className="absolute -right-6 -top-8 text-[9rem] opacity-20" aria-hidden>🦒</div>
        <p className="font-display text-lg font-bold text-pink">kiddi.zoo shop</p>
        <h1 className="text-5xl font-extrabold sm:text-6xl">{title}</h1>
        <p className="mt-2 max-w-lg text-lg text-muted-foreground">
          {category ? categoryInfo[category].blurb : "Rompers, shirts and bottoms for every little explorer, 0–12 yrs."}
        </p>
      </div>

      <div className="mt-8 flex flex-col gap-4">
        <div className="flex flex-wrap items-center gap-2">
          <span className="mr-2 font-display font-bold text-muted-foreground">Type</span>
          <Link to="/shop" search={{ age }} className={cn(chip, !category ? "bg-orange shadow-sticker" : "bg-card")}>
            All
          </Link>
          {CATEGORIES.map((c) => (
            <Link key={c} to="/shop" search={{ category: c, age }} className={cn(chip, category === c ? "bg-orange shadow-sticker" : "bg-card")}>
              {categoryInfo[c].label}
            </Link>
          ))}
        </div>
        <div className="flex flex-wrap items-center gap-2">
          <span className="mr-2 font-display font-bold text-muted-foreground">Age</span>
          <Link to="/shop" search={{ category }} className={cn(chip, !age ? "bg-sun shadow-sticker" : "bg-card")}>
            All ages
          </Link>
          {AGE_BANDS.map((a) => (
            <Link key={a} to="/shop" search={{ category, age: a }} className={cn(chip, age === a ? "bg-sun shadow-sticker" : "bg-card")}>
              {ageBandInfo[a].label} · {ageBandInfo[a].range}
            </Link>
          ))}
        </div>
      </div>

      {list.length > 0 ? (
        <div className="mt-10 grid grid-cols-2 gap-x-6 gap-y-10 lg:grid-cols-3 xl:grid-cols-4">
          {list.map((p, i) => (
            <ProductCard key={p.slug} product={p} index={i} />
          ))}
        </div>
      ) : (
        <div className="mt-16 text-center">
          <p className="text-6xl" aria-hidden>🙈</p>
          <p className="mt-4 font-display text-2xl font-bold">No outfits here yet</p>
          <Link to="/shop" search={{}} className="mt-4 inline-block font-bold text-pink underline">
            Show everything
          </Link>
        </div>
      )}
    </div>
  );
}
