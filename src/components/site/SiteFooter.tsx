import { Link } from "@tanstack/react-router";
import { Instagram, Mail, MessageCircle } from "lucide-react";
import logo from "@/assets/kiddi-zoo-logo.png.asset.json";
import { brand, whatsappLink } from "@/data/brand";

export function SiteFooter() {
  return (
    <footer className="relative mt-24 border-t-2 border-ink bg-ink text-cream">
      <Wave className="absolute -top-[38px] left-0 h-10 w-full text-ink" />
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-14 md:grid-cols-[1.3fr_1fr_1fr]">
        <div>
          <div className="inline-block rounded-3xl bg-cream p-3">
            <img src={logo.url} alt="kiddi.zoo" className="h-16 w-auto" />
          </div>
          <p className="mt-4 max-w-xs text-cream/80">
            Playful, comfy kids wear for ages 0–12. Rompers, shirts and bottoms with a little bit of wild.
          </p>
        </div>
        <div>
          <h3 className="font-display text-xl font-bold text-sun">Explore</h3>
          <ul className="mt-3 space-y-2 text-cream/85">
            <li><Link to="/shop" search={{ category: "rompers" }} className="hover:text-sun">Rompers</Link></li>
            <li><Link to="/shop" search={{ category: "tops" }} className="hover:text-sun">Shirts & Tees</Link></li>
            <li><Link to="/shop" search={{ category: "bottoms" }} className="hover:text-sun">Bottoms</Link></li>
            <li><Link to="/about" className="hover:text-sun">Our Story</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="font-display text-xl font-bold text-sun">Say hello</h3>
          <ul className="mt-3 space-y-3 text-cream/85">
            <li>
              <a href={whatsappLink("Hi kiddi.zoo!")} target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-sun">
                <MessageCircle className="size-4" /> {brand.whatsappDisplay}
              </a>
            </li>
            <li>
              <a href={`https://instagram.com/${brand.instagram}`} target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-sun">
                <Instagram className="size-4" /> @{brand.instagram}
              </a>
            </li>
            <li>
              <a href={`mailto:${brand.email}`} className="flex items-center gap-2 hover:text-sun">
                <Mail className="size-4" /> {brand.email}
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-cream/15 py-5 text-center text-sm text-cream/60">
        © {new Date().getFullYear()} kiddi.zoo · Made with love for little ones
      </div>
    </footer>
  );
}

export function Wave({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 1440 40" preserveAspectRatio="none" className={className} aria-hidden>
      <path
        fill="currentColor"
        d="M0 40 C 120 0 240 0 360 20 S 600 40 720 20 S 960 0 1080 20 S 1320 40 1440 10 L1440 40 Z"
      />
    </svg>
  );
}
