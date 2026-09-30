export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  image: string;
  details: string[];
}

export const products: Product[] = [
  { id: "p1", name: "Luminous Glow Serum", description: "A lightweight, hydrating serum that leaves skin with a radiant, dewy finish.", price: 45, category: "Skincare", image: "/images/product_1.jpg", details: ["Hydrating", "Brightening", "Vegan"] },
  { id: "p2", name: "Botanical Cleansing Oil", description: "Gently melts away makeup and impurities without stripping the skin of its natural moisture.", price: 38, category: "Skincare", image: "/images/product_2.jpg", details: ["Gentle", "Nourishing"] },
  { id: "p3", name: "Restorative Night Cream", description: "Deeply moisturizing night cream that repairs and rejuvenates skin while you sleep.", price: 65, category: "Skincare", image: "/images/product_1.jpg", details: ["Anti-aging", "Repairing"] },
  { id: "p4", name: "Purifying Clay Mask", description: "Draws out impurities and minimizes pores with a blend of natural clays and botanical extracts.", price: 32, category: "Skincare", image: "/images/product_2.jpg", details: ["Clarifying", "Detoxifying"] },
  { id: "p5", name: "Awakening Eye Gel", description: "Cooling and refreshing eye gel that reduces puffiness and dark circles.", price: 40, category: "Skincare", image: "/images/product_1.jpg", details: ["Cooling", "De-puffing"] },
  { id: "p6", name: "Daily Defense Sunscreen SPF 50", description: "Broad-spectrum protection that blends seamlessly without leaving a white cast.", price: 35, category: "Suncare", image: "/images/product_2.jpg", details: ["UVA/UVB Protection", "Invisible finish"] },
  { id: "p7", name: "Hydration Mist", description: "A refreshing burst of hydration with rosewater and aloe.", price: 22, category: "Skincare", image: "/images/product_1.jpg", details: ["Refreshing", "Soothing"] },
  { id: "p8", name: "Vitamin C Booster", description: "Potent vitamin C drops to brighten and even skin tone.", price: 55, category: "Serums", image: "/images/product_2.jpg", details: ["Brightening", "Antioxidant"] },
  { id: "p9", name: "Exfoliating Toner", description: "AHA/BHA toner for smooth, clear skin.", price: 28, category: "Skincare", image: "/images/product_1.jpg", details: ["Exfoliating", "Clarifying"] },
  { id: "p10", name: "Squalane Facial Oil", description: "100% plant-derived squalane for weightless hydration.", price: 42, category: "Serums", image: "/images/product_2.jpg", details: ["Hydrating", "Non-comedogenic"] },
  { id: "p11", name: "Soothing Oat Cleanser", description: "Calming gel cleanser for sensitive skin.", price: 26, category: "Skincare", image: "/images/product_1.jpg", details: ["Calming", "Gentle"] },
  { id: "p12", name: "Peptide Firming Moisturizer", description: "Rich moisturizer to plump and firm skin.", price: 58, category: "Skincare", image: "/images/product_2.jpg", details: ["Firming", "Anti-aging"] },
  { id: "p13", name: "Charcoal Detox Soap", description: "Deep cleansing bar soap for face and body.", price: 15, category: "Bodycare", image: "/images/product_1.jpg", details: ["Detoxifying", "Deep Clean"] },
  { id: "p14", name: "Rosehip Seed Oil", description: "Cold-pressed rosehip oil for scars and fine lines.", price: 34, category: "Serums", image: "/images/product_2.jpg", details: ["Regenerating", "Nourishing"] },
  { id: "p15", name: "Hyaluronic Acid Serum", description: "Intense moisture binding serum for all skin types.", price: 38, category: "Serums", image: "/images/product_1.jpg", details: ["Hydrating", "Plumping"] },
  { id: "p16", name: "Green Tea Match Scrub", description: "Gentle physical exfoliant with matcha green tea.", price: 30, category: "Skincare", image: "/images/product_2.jpg", details: ["Exfoliating", "Antioxidant"] },
  { id: "p17", name: "Niacinamide Zinc Serum", description: "Blemish and congestion reducing formula.", price: 25, category: "Serums", image: "/images/product_1.jpg", details: ["Clarifying", "Oil Control"] },
  { id: "p18", name: "Algae Plumping Mask", description: "Marine algae mask for instant hydration boost.", price: 45, category: "Skincare", image: "/images/product_2.jpg", details: ["Hydrating", "Plumping"] },
  { id: "p19", name: "Tinted Mineral SPF 30", description: "Light coverage mineral sunscreen.", price: 36, category: "Suncare", image: "/images/product_1.jpg", details: ["Sun Protection", "Even Tone"] },
  { id: "p20", name: "Lavender Sleep Mask", description: "Overnight mask infused with relaxing lavender.", price: 48, category: "Skincare", image: "/images/product_2.jpg", details: ["Calming", "Repairing"] },
  { id: "p21", name: "Glow Body Oil", description: "Shimmering body oil for a sun-kissed look.", price: 40, category: "Bodycare", image: "/images/product_1.jpg", details: ["Radiance", "Moisturizing"] },
  { id: "p22", name: "Shea Butter Body Lotion", description: "Rich and creamy lotion for dry skin.", price: 28, category: "Bodycare", image: "/images/product_2.jpg", details: ["Deep Moisture", "Soothing"] },
  { id: "p23", name: "Eucalyptus Shower Gel", description: "Invigorating body wash with eucalyptus extract.", price: 20, category: "Bodycare", image: "/images/product_1.jpg", details: ["Refreshing", "Cleansing"] },
  { id: "p24", name: "Jojoba Lip Balm", description: "Intensely nourishing lip balm.", price: 12, category: "Skincare", image: "/images/product_2.jpg", details: ["Hydrating", "Protecting"] },
  { id: "p25", name: "Retinol Renewing Serum", description: "Gentle retinol alternative for cell turnover.", price: 62, category: "Serums", image: "/images/product_1.jpg", details: ["Anti-aging", "Renewing"] },
  { id: "p26", name: "Chamomile Makeup Remover", description: "Bi-phase makeup remover for stubborn cosmetics.", price: 24, category: "Skincare", image: "/images/product_2.jpg", details: ["Gentle", "Effective"] },
  { id: "p27", name: "Collagen Boosting Cream", description: "Supports skin elasticity and firmness.", price: 70, category: "Skincare", image: "/images/product_1.jpg", details: ["Firming", "Plumping"] },
  { id: "p28", name: "Aloe Vera Aftersun", description: "Cooling gel to soothe sun-exposed skin.", price: 18, category: "Suncare", image: "/images/product_2.jpg", details: ["Soothing", "Cooling"] },
  { id: "p29", name: "Blemish Drying Lotion", description: "Overnight spot treatment.", price: 22, category: "Skincare", image: "/images/product_1.jpg", details: ["Clarifying", "Fast-acting"] },
  { id: "p30", name: "Ginseng Eye Cream", description: "Revitalizing eye cream for dark circles.", price: 45, category: "Skincare", image: "/images/product_2.jpg", details: ["Brightening", "Revitalizing"] },
  { id: "p31", name: "Sea Salt Hair Mist", description: "Texturizing mist for effortless waves.", price: 26, category: "Haircare", image: "/images/product_1.jpg", details: ["Texturizing", "Volumizing"] },
  { id: "p32", name: "Argan Oil Hair Serum", description: "Smoothing serum for frizz-free hair.", price: 32, category: "Haircare", image: "/images/product_2.jpg", details: ["Smoothing", "Nourishing"] },
  { id: "p33", name: "Scalp Detox Scrub", description: "Purifying scrub for a healthy scalp.", price: 35, category: "Haircare", image: "/images/product_1.jpg", details: ["Clarifying", "Stimulating"] },
  { id: "p34", name: "Cuticle Oil Pen", description: "Nourishing oil for healthy nails.", price: 14, category: "Bodycare", image: "/images/product_2.jpg", details: ["Nourishing", "Protecting"] },
  { id: "p35", name: "Hand Repair Cream", description: "Intense moisture for dry, cracked hands.", price: 20, category: "Bodycare", image: "/images/product_1.jpg", details: ["Repairing", "Moisturizing"] },
  { id: "p36", name: "Magnesium Bath Salts", description: "Relaxing bath salts for muscle recovery.", price: 25, category: "Bodycare", image: "/images/product_2.jpg", details: ["Relaxing", "Soothing"] }
];
