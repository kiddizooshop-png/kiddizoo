import { Link } from "@tanstack/react-router";
import { formatPrice } from "@/data/brand";
import { ageLabel, type Product } from "@/data/products";
import { cn } from "@/lib/utils";

const tones = ["bg-sun-soft", "bg-sky-soft", "bg-pink-soft", "bg-lime-soft", "bg-orange-soft"];

export function ProductCard({ product, index = 0 }: { product: Product; index?: number }) {
  return (
    <Link
      to="/shop/$slug"
      params={{ slug: product.slug }}
      className="group block animate-pop-in"
      style={{ animationDelay: `${index * 60}ms` }}
    >
      <div
        className={cn(
          "relative overflow-hidden rounded-3xl border-2 border-ink shadow-sticker transition-transform duration-300 group-hover:-translate-y-1 group-hover:-rotate-1",
          tones[index % tones.length],
        )}
      >
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          width={1254}
          height={1254}
          className="aspect-square w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {product.badge && (
          <span className="absolute left-3 top-3 rotate-[-6deg] rounded-full border-2 border-ink bg-pink px-3 py-1 font-display text-sm font-bold text-accent-foreground">
            {product.badge}
          </span>
        )}
        <span className="absolute bottom-3 right-3 rounded-full border-2 border-ink bg-card px-3 py-1 text-xs font-bold">
          {ageLabel(product)}
        </span>
      </div>
      <div className="mt-3 flex items-start justify-between gap-3 px-1">
        <h3 className="font-display text-xl font-bold leading-tight group-hover:text-pink">{product.name}</h3>
        <span className="shrink-0 font-display text-xl font-extrabold text-orange">{formatPrice(product.price)}</span>
      </div>
      <p className="px-1 text-sm text-muted-foreground">{product.color}</p>
    </Link>
  );
}
