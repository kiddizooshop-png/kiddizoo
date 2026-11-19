import { createFileRoute } from "@tanstack/react-router";
import { Instagram, Mail, MessageCircle } from "lucide-react";
import { brand, whatsappLink } from "@/data/brand";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact & order | kiddi.zoo" },
      { name: "description", content: "Order kiddi.zoo kids wear on WhatsApp, or say hi on Instagram and email." },
      { property: "og:title", content: "Contact & order | kiddi.zoo" },
      { property: "og:description", content: "Order kids wear on WhatsApp in a few taps." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Contact,
});

const steps = [
  { n: "1", title: "Pick your favourites", text: "Browse the shop and choose the size on each outfit." },
  { n: "2", title: "Tap “Order on WhatsApp”", text: "Your outfit and size are added to the message for you." },
  { n: "3", title: "We confirm & deliver", text: "We'll reply with availability, total and delivery details." },
];

function Contact() {
  const cards = [
    { icon: MessageCircle, label: "WhatsApp", value: brand.whatsappDisplay, href: whatsappLink("Hi kiddi.zoo!"), bg: "bg-lime", note: "Fastest way to order" },
    { icon: Instagram, label: "Instagram", value: `@${brand.instagram}`, href: `https://instagram.com/${brand.instagram}`, bg: "bg-pink", note: "New drops & sneak peeks" },
    { icon: Mail, label: "Email", value: brand.email, href: `mailto:${brand.email}`, bg: "bg-sky", note: "For anything else" },
  ];
  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
      <div className="text-center">
        <p className="font-display text-lg font-bold text-pink">Say hello</p>
        <h1 className="mt-2 text-5xl font-extrabold sm:text-6xl">Let's get your little one dressed</h1>
        <p className="mx-auto mt-4 max-w-xl text-lg text-muted-foreground">
          Questions about sizes, gifts or an order? Our zookeepers are happy to help.
        </p>
      </div>

      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {cards.map(({ icon: Icon, label, value, href, bg, note }) => (
          <a
            key={label}
            href={href}
            target={href.startsWith("http") ? "_blank" : undefined}
            rel="noreferrer"
            className="sticker-press block rounded-3xl border-2 border-ink bg-card p-6 shadow-sticker"
          >
            <span className={`grid size-14 place-items-center rounded-2xl border-2 border-ink ${bg}`}>
              <Icon className="size-7" />
            </span>
            <h2 className="mt-5 text-3xl font-extrabold">{label}</h2>
            <p className="mt-1 break-all font-bold">{value}</p>
            <p className="mt-2 text-sm text-muted-foreground">{note}</p>
          </a>
        ))}
      </div>

      <section className="mt-20 rounded-[2.5rem] border-2 border-ink bg-sun-soft p-8 shadow-sticker-lg sm:p-12">
        <h2 className="text-center text-4xl font-extrabold">How ordering works</h2>
        <div className="mt-10 grid gap-8 md:grid-cols-3">
          {steps.map((s) => (
            <div key={s.n} className="text-center">
              <span className="mx-auto grid size-16 place-items-center rounded-full border-2 border-ink bg-orange font-display text-3xl font-extrabold shadow-sticker">
                {s.n}
              </span>
              <h3 className="mt-4 text-2xl font-bold">{s.title}</h3>
              <p className="mt-1 text-muted-foreground">{s.text}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
