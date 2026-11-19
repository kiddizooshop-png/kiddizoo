import { describe, expect, it } from "vitest";
import { brand, formatPrice, whatsappLink } from "@/data/brand";
import { filterProducts, products, STORE_MAX_AGE, STORE_MIN_AGE } from "@/data/products";

describe("kiddi.zoo catalog rules", () => {
  it("only sells for ages 0–12", () => {
    for (const p of products) {
      expect(p.minAge).toBeGreaterThanOrEqual(STORE_MIN_AGE);
      expect(p.maxAge).toBeLessThanOrEqual(12);
    }
    expect(STORE_MAX_AGE).toBe(12);
  });

  it("stocks rompers, shirts and bottoms", () => {
    expect(filterProducts({ category: "rompers" }).length).toBeGreaterThan(0);
    expect(filterProducts({ category: "tops" }).length).toBeGreaterThan(0);
    expect(filterProducts({ category: "bottoms" }).length).toBeGreaterThan(0);
  });

  it("shows prices in rupees", () => {
    expect(formatPrice(649)).toBe("₹649");
  });

  it("sends orders to the store WhatsApp number", () => {
    expect(brand.whatsappNumber).toBe("919747767816");
    expect(whatsappLink("Hi")).toBe("https://wa.me/919747767816?text=Hi");
  });
});
