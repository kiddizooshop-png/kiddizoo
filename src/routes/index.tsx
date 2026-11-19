import { createFileRoute, Link } from "@tanstack/react-router";
import { Heart, Leaf, Ruler, Sparkles, Star } from "lucide-react";
import hero from "@/assets/hero-kidswear.jpg";
import aboutImg from "@/assets/about-play.jpg";
import { Button } from "@/components/ui/button";
import { ProductCard } from "@/components/site/ProductCard";
import { Wave } from "@/components/site/SiteFooter";
import { whatsappLink } from "@/data/brand";
import { ageBandInfo, AGE_BANDS, categoryInfo, products, type Category } from "@/data/products";
import rompImg from "@/assets/wear-romper-giraffe.jpg";
import topImg from "@/assets/wear-tee-lion.jpg";
import bottomImg from "@/assets/wear-joggers-paw.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "kiddi.zoo — Wild little outfits for wild little ones" },
      {
        name: "description",
        content: "Shop playful rompers, shirts and bottoms for ages 0–12. Soft fabrics, happy animal prints, easy WhatsApp ordering.",
      },
      { property: "og:title", content: "kiddi.zoo — Wild little outfits for wild little ones" },
      { property: "og:description", content: "Playful rompers, shirts and bottoms for ages 0–12." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Home,
});

const featuredCats: { key: Category; img: string; rotate: string; bg: string }[] = [
  { key: "rompers", img: rompImg, rotate: "-rotate-2", bg: "bg-sun" },
  { key: "tops", img: topImg, rotate: "rotate-1", bg: "bg-pink" },
  { key: "bottoms", img: bottomImg, rotate: "-rotate-1", bg: "bg-sky" },
];

const bestSellers = products.filter((p) => p.badge === "Best seller" || p.badge === "New").slice(0, 4);

const marqueeWords = ["Rompers", "Shirts", "Joggers", "Shorts", "Leggings", "Tees", "Polos", "Ages 0–12"];

function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-dots">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 pb-16 pt-10 sm:px-6 lg:grid-cols-[1fr_1.15fr] lg:pb-24 lg:pt-16">
          <div className="relative z-10 animate-pop-in">
            <span className="inline-flex items-center gap-2 rounded-full border-2 border-ink bg-lime px-4 py-1.5 font-display text-sm font-bold shadow-sticker">
              <Sparkles className="size-4" /> New jungle drop is here
            </span>
            <h1 className="mt-6 text-5xl font-extrabold sm:text-6xl lg:text-7xl">
              Wild little
              <span className="relative mx-2 inline-block text-orange">
                outfits
                <svg viewBox="0 0 200 20" className="absolute -bottom-2 left-0 w-full text-pink" aria-hidden>
                  <path d="M2 14 Q 50 2 100 12 T 198 8" fill="none" stroke="currentColor" strokeWidth="6" strokeLinecap="round" />
                </svg>
              </span>
              for wild little <span className="text-sky">ones</span>.
            </h1>
            <p className="mt-6 max-w-md text-lg text-muted-foreground">
              Super-soft rompers, shirts and bottoms with happy animal prints — for babies, toddlers and big kids up to 12.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button variant="zoo" size="xl" asChild>
                <Link to="/shop" search={{}}>Shop the zoo</Link>
              </Button>
              <Button variant="paper" size="xl" asChild>
                <a href={whatsappLink("Hi kiddi.zoo! Can you help me pick an outfit?")} target="_blank" rel="noreferrer">
                  Chat with us
                </a>
              </Button>
            </div>
            <div className="mt-8 flex items-center gap-3 text-sm font-semibold">
              <div className="flex text-sun">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="size-5 fill-current stroke-ink" />
                ))}
              </div>
              Loved by little ones & their grown-ups
            </div>
          </div>

          <div className="relative">
            <div className="absolute -right-10 -top-10 size-64 rounded-full bg-sun opacity-70 blur-2xl" aria-hidden />
            <div className="absolute -bottom-8 -left-6 size-48 rounded-full bg-pink-soft blur-xl" aria-hidden />
            <div className="relative rotate-1 overflow-hidden rounded-[2.5rem] border-2 border-ink bg-card shadow-sticker-lg">
              <img src={hero} alt="Colorful kiddi.zoo kids clothes: giraffe romper, lion tee, blue joggers and zebra shirt" width={1536} height={1024} className="w-full object-cover" />
            </div>
            <div className="absolute -bottom-6 right-6 animate-float rounded-2xl border-2 border-ink bg-sky px-5 py-3 font-display text-lg font-bold shadow-sticker">
              Sizes 0–12 yrs
            </div>
            <div className="absolute -left-4 top-8 animate-wiggle rounded-full border-2 border-ink bg-pink px-4 py-2 font-display font-bold text-accent-foreground shadow-sticker">
              100% cuddly
            </div>
          </div>
        </div>
      </section>

      {/* MARQUEE */}
      <div className="-rotate-1 overflow-hidden border-y-2 border-ink bg-orange py-3">
        <div className="flex w-max animate-marquee gap-10 whitespace-nowrap font-display text-2xl font-extrabold">
          {[...marqueeWords, ...marqueeWords].map((w, i) => (
            <span key={i} className="flex items-center gap-10">
              {w} <span className="text-cream">✿</span>
            </span>
          ))}
        </div>
      </div>

      {/* CATEGORIES */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
        <div className="text-center">
          <h2 className="text-4xl font-extrabold sm:text-5xl">Pick your little animal's look</h2>
          <p className="mt-3 text-lg text-muted-foreground">Three ways to dress the zoo.</p>
        </div>
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {featuredCats.map((c) => (
            <Link
              key={c.key}
              to="/shop"
              search={{ category: c.key }}
              className={`group relative block ${c.rotate} rounded-[2rem] border-2 border-ink ${c.bg} p-4 shadow-sticker-lg transition-transform hover:rotate-0 hover:scale-[1.02]`}
            >
              <div className="overflow-hidden rounded-[1.5rem] border-2 border-ink bg-cream">
                <img src={c.img} alt={categoryInfo[c.key].label} loading="lazy" className="aspect-square w-full object-cover transition-transform duration-500 group-hover:scale-110" />
              </div>
              <div className="flex items-center justify-between px-2 pt-4">
                <div>
                  <h3 className="text-3xl font-extrabold">{categoryInfo[c.key].label}</h3>
                  <p className="text-sm font-semibold opacity-80">{categoryInfo[c.key].blurb}</p>
                </div>
                <span className="grid size-12 place-items-center rounded-full border-2 border-ink bg-card text-2xl transition-transform group-hover:rotate-45">→</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* BEST SELLERS */}
      <section className="relative bg-sun-soft">
        <Wave className="absolute -top-[38px] left-0 h-10 w-full text-sun-soft" />
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <h2 className="text-4xl font-extrabold sm:text-5xl">Zoo favourites</h2>
              <p className="mt-2 text-lg text-muted-foreground">The pieces everyone keeps asking about.</p>
            </div>
            <Button variant="sky" size="lg" asChild>
              <Link to="/shop" search={{}}>See everything</Link>
            </Button>
          </div>
          <div className="mt-10 grid grid-cols-2 gap-6 lg:grid-cols-4">
            {bestSellers.map((p, i) => (
              <ProductCard key={p.slug} product={p} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* AGE BANDS */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
        <h2 className="text-center text-4xl font-extrabold sm:text-5xl">Shop by age</h2>
        <div className="mt-10 grid gap-6 sm:grid-cols-3">
          {AGE_BANDS.map((band, i) => {
            const info = ageBandInfo[band];
            const bg = ["bg-pink-soft", "bg-lime-soft", "bg-sky-soft"][i];
            const emoji = ["🐣", "🦁", "🦒"][i];
            return (
              <Link
                key={band}
                to="/shop"
                search={{ age: band }}
                className={`sticker-press flex items-center gap-5 rounded-3xl border-2 border-ink ${bg} p-6 shadow-sticker`}
              >
                <span className="text-5xl" aria-hidden>{emoji}</span>
                <div>
                  <div className="font-display text-3xl font-extrabold">{info.label}</div>
                  <div className="font-semibold text-muted-foreground">{info.range}</div>
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      {/* WHY */}
      <section className="mx-auto max-w-7xl px-4 pb-8 sm:px-6">
        <div className="grid items-center gap-12 rounded-[2.5rem] border-2 border-ink bg-card p-6 shadow-sticker-lg md:grid-cols-2 md:p-10">
          <div className="overflow-hidden rounded-[2rem] border-2 border-ink">
            <img src={aboutImg} alt="Happy toddler hugging a plush lion in a sunny playroom" loading="lazy" className="aspect-[4/3] w-full object-cover" />
          </div>
          <div>
            <h2 className="text-4xl font-extrabold sm:text-5xl">Made for climbing, crawling & cuddles</h2>
            <ul className="mt-8 space-y-5">
              {[
                { icon: Leaf, title: "Soft on little skin", text: "Breathable cottons that feel gentle from the very first wear.", bg: "bg-lime" },
                { icon: Ruler, title: "Sizes 0 to 12", text: "From newborn rompers to big-kid shirts, the whole zoo is covered.", bg: "bg-sky" },
                { icon: Heart, title: "Prints kids adore", text: "Giraffes, lions, zebras and friends — outfits they'll actually want to wear.", bg: "bg-pink" },
              ].map(({ icon: Icon, title, text, bg }) => (
                <li key={title} className="flex gap-4">
                  <span className={`grid size-12 shrink-0 place-items-center rounded-2xl border-2 border-ink ${bg} shadow-sticker`}>
                    <Icon className="size-6" />
                  </span>
                  <div>
                    <h3 className="text-2xl font-bold">{title}</h3>
                    <p className="text-muted-foreground">{text}</p>
                  </div>
                </li>
              ))}
            </ul>
            <Button variant="berry" size="lg" className="mt-8" asChild>
              <Link to="/about">Read our story</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-5xl px-4 py-20 text-center sm:px-6">
        <h2 className="text-5xl font-extrabold sm:text-6xl">
          Ordering is as easy as <span className="text-lime [-webkit-text-stroke:2px_var(--ink)]">saying hi</span>
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-lg text-muted-foreground">
          Pick your favourites, send us a message on WhatsApp with the size, and we'll take care of the rest.
        </p>
        <Button variant="leaf" size="xl" className="mt-8" asChild>
          <a href={whatsappLink("Hi kiddi.zoo! I'd like to place an order.")} target="_blank" rel="noreferrer">
            Message us on WhatsApp
          </a>
        </Button>
      </section>
    </>
  );
}
