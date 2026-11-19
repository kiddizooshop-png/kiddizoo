import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, Check, MessageCircle } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ProductCard } from "@/components/site/ProductCard";
import { formatPrice, whatsappLink } from "@/data/brand";
import { ageLabel, categoryInfo, getProduct, products } from "@/data/products";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/shop/$slug")({
  loader: ({ params }) => {
    const product = getProduct(params.slug);
    if (!product) throw notFound();
    return { product };
  },
  head: ({ loaderData }) => {
    const p = loaderData?.product;
    if (!p) return { meta: [{ title: "Outfit not found | kiddi.zoo" }, { name: "robots", content: "noindex" }] };
    return {
      meta: [
        { title: `${p.name} | kiddi.zoo` },
        { name: "description", content: p.description },
        { property: "og:title", content: `${p.name} | kiddi.zoo` },
        { property: "og:description", content: p.description },
        { property: "og:type", content: "product" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
    };
  },
  notFoundComponent: () => (
    <div className="mx-auto max-w-xl px-6 py-24 text-center">
      <p className="text-6xl" aria-hidden>🦓</p>
      <h1 className="mt-4 text-4xl font-extrabold">This outfit wandered off</h1>
      <Link to="/shop" search={{}} className="mt-6 inline-block font-bold text-pink underline">Back to the shop</Link>
    </div>
  ),
  component: ProductPage,
});

function ProductPage() {
  const { product } = Route.useLoaderData();
  const [size, setSize] = useState<string>(product.sizes[0] ?? "One size");
  const related = products.filter((p) => p.category === product.category && p.slug !== product.slug).slice(0, 3);
  const message = `Hi kiddi.zoo! I'd like to order the ${product.name} (${product.color}) in size ${size} — ${formatPrice(product.price)}.`;

  return (
    <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6">
      <Link to="/shop" search={{ category: product.category }} className="inline-flex items-center gap-2 font-display font-bold hover:text-pink">
        <ArrowLeft className="size-4" /> {categoryInfo[product.category].label}
      </Link>

      <div className="mt-6 grid gap-10 lg:grid-cols-2">
        <div className="relative self-start">
          <div className="absolute inset-0 translate-x-3 translate-y-3 rounded-[2.5rem] bg-pink" aria-hidden />
          <div className="relative overflow-hidden rounded-[2.5rem] border-2 border-ink bg-sun-soft">
            <img src={product.image} alt={product.name} width={1254} height={1254} className="aspect-square w-full object-cover" />
          </div>
          {product.badge && (
            <span className="absolute -left-3 top-6 rotate-[-8deg] rounded-full border-2 border-ink bg-lime px-4 py-2 font-display text-lg font-bold shadow-sticker">
              {product.badge}
            </span>
          )}
        </div>

        <div className="lg:pt-6">
          <span className="rounded-full border-2 border-ink bg-sky-soft px-3 py-1 text-sm font-bold">{ageLabel(product)}</span>
          <h1 className="mt-4 text-5xl font-extrabold sm:text-6xl">{product.name}</h1>
          <p className="mt-2 font-semibold text-muted-foreground">{product.color}</p>
          <p className="mt-5 font-display text-4xl font-extrabold text-orange">{formatPrice(product.price)}</p>
          <p className="mt-5 text-lg">{product.description}</p>

          <div className="mt-8">
            <p className="font-display text-lg font-bold">Pick a size</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {product.sizes.map((s) => (
                <button
                  key={s}
                  onClick={() => setSize(s)}
                  aria-pressed={size === s}
                  className={cn(
                    "min-w-16 rounded-2xl border-2 border-ink px-4 py-2 font-display font-bold transition-transform hover:-translate-y-0.5",
                    size === s ? "bg-sun shadow-sticker" : "bg-card",
                  )}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>

          <Button variant="leaf" size="xl" className="mt-8 w-full sm:w-auto" asChild>
            <a href={whatsappLink(message)} target="_blank" rel="noreferrer">
              <MessageCircle className="size-5" /> Order size {size} on WhatsApp
            </a>
          </Button>
          <p className="mt-3 text-sm text-muted-foreground">We'll confirm availability and delivery details in chat.</p>

          <ul className="mt-8 space-y-2 rounded-3xl border-2 border-ink bg-card p-5">
            {product.details.map((d) => (
              <li key={d} className="flex items-center gap-3 font-semibold">
                <span className="grid size-6 place-items-center rounded-full bg-lime"><Check className="size-4" /></span>
                {d}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {related.length > 0 && (
        <section className="mt-24">
          <h2 className="text-4xl font-extrabold">More from the {categoryInfo[product.category].label.toLowerCase()} pen</h2>
          <div className="mt-8 grid grid-cols-2 gap-6 lg:grid-cols-3">
            {related.map((p, i) => (
              <ProductCard key={p.slug} product={p} index={i} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
