import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import logo from "@/assets/kiddi-zoo-logo.png.asset.json";
import { Button } from "@/components/ui/button";
import { brand, whatsappLink } from "@/data/brand";

const nav = [
  { to: "/", label: "Home" },
  { to: "/shop", label: "Shop" },
  { to: "/about", label: "Our Story" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 border-b-2 border-ink bg-cream/90 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-2 sm:px-6">
        <Link to="/" className="shrink-0" aria-label={`${brand.name} home`}>
          <img src={logo.url} alt="kiddi.zoo" className="h-12 w-auto sm:h-14" />
        </Link>
        <nav className="hidden items-center gap-1 md:flex">
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              search={{}}
              activeOptions={{ exact: item.to === "/" }}
              className="rounded-full px-4 py-2 font-display text-lg font-semibold text-ink transition-colors hover:bg-sun-soft"
              activeProps={{ className: "bg-sun" }}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="hidden md:block">
          <Button variant="leaf" asChild>
            <a href={whatsappLink("Hi kiddi.zoo! I'd like to place an order.")} target="_blank" rel="noreferrer">
              Order on WhatsApp
            </a>
          </Button>
        </div>
        <button
          className="rounded-full border-2 border-ink bg-card p-2 shadow-sticker md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>
      {open && (
        <nav className="flex flex-col gap-1 border-t-2 border-ink px-4 py-3 md:hidden">
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              search={{}}
              onClick={() => setOpen(false)}
              className="rounded-2xl px-4 py-3 font-display text-xl font-semibold"
              activeOptions={{ exact: item.to === "/" }}
              activeProps={{ className: "bg-sun" }}
            >
              {item.label}
            </Link>
          ))}
          <Button variant="leaf" size="lg" className="mt-2" asChild>
            <a href={whatsappLink("Hi kiddi.zoo! I'd like to place an order.")} target="_blank" rel="noreferrer">
              Order on WhatsApp
            </a>
          </Button>
        </nav>
      )}
    </header>
  );
}
