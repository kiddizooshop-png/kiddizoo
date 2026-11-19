import { createFileRoute, Link } from "@tanstack/react-router";
import aboutImg from "@/assets/about-play.jpg";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "Our story | kiddi.zoo kids wear" },
      { name: "description", content: "kiddi.zoo makes soft, playful kids wear for ages 0–12 — rompers, shirts and bottoms full of animal friends." },
      { property: "og:title", content: "Our story | kiddi.zoo" },
      { property: "og:description", content: "Soft, playful kids wear for ages 0–12." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: About,
});

const values = [
  { emoji: "🦒", title: "Comfy first", text: "If it isn't soft enough to nap in, it doesn't make it into the zoo.", bg: "bg-sun-soft" },
  { emoji: "🦁", title: "Made to move", text: "Stretchy waists, easy snaps and roomy fits for climbing, crawling and running.", bg: "bg-orange-soft" },
  { emoji: "🦓", title: "Happy prints", text: "Every design starts with a smile — giraffes, lions, zebras and friends.", bg: "bg-pink-soft" },
  { emoji: "🐘", title: "Grows with them", text: "From first rompers to big-kid shirts, we dress little ones from 0 to 12.", bg: "bg-sky-soft" },
];

function About() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6">
      <div className="grid items-center gap-12 lg:grid-cols-2">
        <div>
          <p className="font-display text-lg font-bold text-pink">Our story</p>
          <h1 className="mt-2 text-5xl font-extrabold sm:text-6xl">Every kid has a little wild inside</h1>
          <p className="mt-6 text-lg text-muted-foreground">
            kiddi.zoo started with a simple idea: kids' clothes should be as fun as the kids wearing them. We design rompers,
            shirts and bottoms that are gentle on skin, easy for parents, and full of animal friends that make getting dressed
            the best part of the morning.
          </p>
          <p className="mt-4 text-lg text-muted-foreground">
            From newborns to 12-year-olds, every piece is picked for comfort, colour and a whole lot of play.
          </p>
          <Button variant="zoo" size="xl" className="mt-8" asChild>
            <Link to="/shop" search={{}}>Meet the collection</Link>
          </Button>
        </div>
        <div className="relative">
          <div className="absolute inset-0 -rotate-3 rounded-[2.5rem] bg-sky" aria-hidden />
          <img src={aboutImg} alt="Smiling toddler hugging a soft lion toy" className="relative rotate-1 rounded-[2.5rem] border-2 border-ink object-cover shadow-sticker-lg" />
        </div>
      </div>

      <div className="mt-24 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {values.map((v, i) => (
          <div key={v.title} className={`rounded-3xl border-2 border-ink ${v.bg} p-6 shadow-sticker ${i % 2 ? "rotate-1" : "-rotate-1"}`}>
            <span className="text-5xl" aria-hidden>{v.emoji}</span>
            <h2 className="mt-4 text-3xl font-extrabold">{v.title}</h2>
            <p className="mt-2 text-muted-foreground">{v.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
