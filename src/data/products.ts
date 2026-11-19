import rompGiraffe from "@/assets/wear-romper-giraffe.jpg";
import rompElephant from "@/assets/wear-romper-elephant.jpg";
import rompZebra from "@/assets/item-onesie.jpg";
import teeLion from "@/assets/wear-tee-lion.jpg";
import shirtZebra from "@/assets/wear-shirt-zebra.jpg";
import poloMonkey from "@/assets/wear-polo-monkey.jpg";
import joggersPaw from "@/assets/wear-joggers-paw.jpg";
import shortsGiraffe from "@/assets/wear-shorts-giraffe.jpg";
import leggingsLeopard from "@/assets/wear-leggings-leopard.jpg";
import backpack from "@/assets/item-backpack.jpg";
import bottle from "@/assets/item-bottle.jpg";

export const CATEGORIES = ["rompers", "tops", "bottoms", "extras"] as const;
export type Category = (typeof CATEGORIES)[number];

export const categoryInfo: Record<Category, { label: string; blurb: string; tone: string }> = {
  rompers: { label: "Rompers", blurb: "Snuggly one-pieces for tiny explorers", tone: "bg-sun-soft" },
  tops: { label: "Shirts & Tees", blurb: "Roar-worthy tops for every day", tone: "bg-orange-soft" },
  bottoms: { label: "Bottoms", blurb: "Joggers, shorts & leggings made to move", tone: "bg-sky-soft" },
  extras: { label: "Little Extras", blurb: "Bags & bottles for the adventure", tone: "bg-lime-soft" },
};

export const AGE_BANDS = ["baby", "toddler", "kids"] as const;
export type AgeBand = (typeof AGE_BANDS)[number];

export const ageBandInfo: Record<AgeBand, { label: string; range: string; min: number; max: number }> = {
  baby: { label: "Baby", range: "0–2 yrs", min: 0, max: 2 },
  toddler: { label: "Toddler", range: "2–5 yrs", min: 2, max: 5 },
  kids: { label: "Kids", range: "5–12 yrs", min: 5, max: 12 },
};

/** Store serves ages 0–12. Ages are in years; months are fractions (0.5 = 6 months). */
export const STORE_MIN_AGE = 0;
export const STORE_MAX_AGE = 12;

export type Product = {
  slug: string;
  name: string;
  category: Category;
  price: number;
  image: string;
  minAge: number;
  maxAge: number;
  sizes: string[];
  color: string;
  description: string;
  details: string[];
  badge?: string;
};

export const products: Product[] = [
  {
    slug: "sunny-giraffe-romper",
    name: "Sunny Giraffe Romper",
    category: "rompers",
    price: 649,
    image: rompGiraffe,
    minAge: 0,
    maxAge: 2,
    sizes: ["0–3M", "3–6M", "6–12M", "12–18M", "18–24M"],
    color: "Sunshine yellow",
    description:
      "A short-sleeve romper covered in happy giraffes. Easy snap buttons make changes quick, so there's more time for giggles.",
    details: ["100% soft cotton", "Snap buttons down the front", "Gentle on sensitive skin"],
    badge: "Best seller",
  },
  {
    slug: "ellie-ribbed-romper",
    name: "Ellie Ribbed Romper",
    category: "rompers",
    price: 749,
    image: rompElephant,
    minAge: 0,
    maxAge: 2,
    sizes: ["0–3M", "3–6M", "6–12M", "12–18M", "18–24M"],
    color: "Sky blue",
    description:
      "Long-sleeve ribbed romper with a tiny embroidered elephant on the pocket. Stretchy, cosy and made for naps.",
    details: ["Ribbed cotton knit", "Full-length snaps", "Ribbed cuffs that stay put"],
  },
  {
    slug: "zebra-hooded-romper",
    name: "Zebra Hooded Romper",
    category: "rompers",
    price: 899,
    image: rompZebra,
    minAge: 0,
    maxAge: 2,
    sizes: ["3–6M", "6–12M", "12–18M", "18–24M"],
    color: "Cream & charcoal",
    description:
      "Our cuddliest romper — a zebra hood with little ears, plus matching socks. Perfect for photos and play dates.",
    details: ["Brushed cotton fleece", "Comes with matching socks", "Hood with 3D ears"],
    badge: "New",
  },
  {
    slug: "leo-lion-tee",
    name: "Leo the Lion Tee",
    category: "tops",
    price: 449,
    image: teeLion,
    minAge: 2,
    maxAge: 8,
    sizes: ["2Y", "3Y", "4Y", "5Y", "6Y", "8Y"],
    color: "Zoo orange",
    description: "A bright orange tee with a big friendly lion face. Guaranteed to make every day a little louder.",
    details: ["Soft jersey cotton", "Crack-resistant print", "Roomy everyday fit"],
    badge: "Best seller",
  },
  {
    slug: "zebra-party-shirt",
    name: "Zebra Party Shirt",
    category: "tops",
    price: 649,
    image: shirtZebra,
    minAge: 2,
    maxAge: 10,
    sizes: ["2Y", "4Y", "6Y", "8Y", "10Y"],
    color: "Blush pink",
    description:
      "A smart button-up shirt with a tiny zebra print — dressy enough for parties, comfy enough for the playground.",
    details: ["Breathable cotton poplin", "Classic collar", "Easy buttons for little fingers"],
  },
  {
    slug: "monkey-polo",
    name: "Cheeky Monkey Polo",
    category: "tops",
    price: 549,
    image: poloMonkey,
    minAge: 3,
    maxAge: 12,
    sizes: ["3Y", "4Y", "6Y", "8Y", "10Y", "12Y"],
    color: "Lime leaf",
    description: "A zesty lime polo with an embroidered monkey on the chest. School-day smart, weekend ready.",
    details: ["Cotton piqué", "Embroidered monkey", "Two-button placket"],
  },
  {
    slug: "paw-print-joggers",
    name: "Paw Print Joggers",
    category: "bottoms",
    price: 599,
    image: joggersPaw,
    minAge: 1,
    maxAge: 10,
    sizes: ["1Y", "2Y", "4Y", "6Y", "8Y", "10Y"],
    color: "Sky blue",
    description: "Super-soft joggers with little paw prints, a comfy waistband and pockets for treasures.",
    details: ["Cotton-blend fleece", "Elastic waist with drawstring", "Cuffed ankles"],
    badge: "Best seller",
  },
  {
    slug: "giraffe-pocket-shorts",
    name: "Giraffe Pocket Shorts",
    category: "bottoms",
    price: 399,
    image: shortsGiraffe,
    minAge: 1,
    maxAge: 8,
    sizes: ["1Y", "2Y", "3Y", "4Y", "6Y", "8Y"],
    color: "Zoo orange",
    description: "Sunny orange shorts with a peek-a-boo giraffe pocket. Made for hot days and big adventures.",
    details: ["Lightweight cotton", "Giraffe patch pocket", "Pull-on drawstring waist"],
  },
  {
    slug: "leopard-leggings",
    name: "Party Leopard Leggings",
    category: "bottoms",
    price: 449,
    image: leggingsLeopard,
    minAge: 2,
    maxAge: 12,
    sizes: ["2Y", "4Y", "6Y", "8Y", "10Y", "12Y"],
    color: "Berry pink",
    description: "Stretchy berry-pink leggings with a playful leopard print. Twirl-proof and wash-proof.",
    details: ["Stretch cotton", "Soft wide waistband", "Holds colour wash after wash"],
    badge: "New",
  },
  {
    slug: "giraffe-backpack",
    name: "Gigi Giraffe Backpack",
    category: "extras",
    price: 799,
    image: backpack,
    minAge: 3,
    maxAge: 8,
    sizes: ["One size"],
    color: "Sunshine yellow",
    description: "A giraffe-face backpack with a zip snack pocket and mesh bottle holders. Nursery-run approved.",
    details: ["Padded straps", "Front zip pocket", "Side mesh pockets"],
  },
  {
    slug: "panda-bottle-lunch-set",
    name: "Panda Bottle & Lunch Set",
    category: "extras",
    price: 699,
    image: bottle,
    minAge: 3,
    maxAge: 12,
    sizes: ["One size"],
    color: "Sky blue",
    description: "A matching panda water bottle and lunch box, ready for school, the park and everywhere between.",
    details: ["Flip-straw bottle", "Clip-lock lunch box", "Easy to clean"],
  },
];

export function getProduct(slug: string) {
  return products.find((p) => p.slug === slug);
}

export function fitsAgeBand(product: Product, band: AgeBand) {
  const { min, max } = ageBandInfo[band];
  return product.minAge < max && product.maxAge > min;
}

export function filterProducts(opts: { category?: Category | undefined; age?: AgeBand | undefined }) {
  return products.filter(
    (p) => (!opts.category || p.category === opts.category) && (!opts.age || fitsAgeBand(p, opts.age)),
  );
}

export function ageLabel(p: Product) {
  return p.maxAge <= 2 && p.minAge === 0 ? "0–24 months" : `${p.minAge}–${p.maxAge} yrs`;
}
