// Store contact details shown across the site.
export const brand = {
  name: "kiddi.zoo",
  tagline: "Wild little outfits for wild little ones",
  whatsappNumber: "919747767816",
  whatsappDisplay: "+91 97477 67816",
  instagram: "kiddi.zoo",
  email: "hello@kiddizoo.com",
  currency: "INR",
};

export function formatPrice(amount: number) {
  return `₹${amount}`;
}

export function whatsappLink(message: string) {
  return `https://wa.me/${brand.whatsappNumber}?text=${encodeURIComponent(message)}`;
}
