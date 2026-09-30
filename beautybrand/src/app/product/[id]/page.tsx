"use client";

import { use } from "react";
import Image from "next/image";
import { notFound } from "next/navigation";
import { motion } from "framer-motion";
import { products } from "@/data/products";
import { useCart } from "@/store/useCart";
import { Leaf, Plus, Minus, Check } from "lucide-react";
import { useState } from "react";

export default function ProductDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = use(params);
  const product = products.find((p) => p.id === resolvedParams.id);
  const { addItem } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);

  if (!product) {
    return notFound();
  }

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addItem(product);
    }
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <div className="pt-32 pb-24 px-6 min-h-screen">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row gap-16">
          {/* Product Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2"
          >
            <div className="relative aspect-[3/4] w-full bg-aura-secondary overflow-hidden sticky top-32">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-cover"
                priority
              />
            </div>
          </motion.div>

          {/* Product Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full lg:w-1/2 flex flex-col justify-center"
          >
            <p className="uppercase tracking-widest text-sm text-gray-500 mb-4">{product.category}</p>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl mb-6 leading-tight">{product.name}</h1>
            <p className="text-2xl font-semibold mb-8">${product.price}</p>
            
            <p className="text-gray-600 text-lg mb-10 leading-relaxed">
              {product.description}
            </p>

            <div className="space-y-4 mb-10 border-y border-aura-secondary py-6">
              <h3 className="font-serif text-xl mb-4">The Details</h3>
              <ul className="grid grid-cols-2 gap-4">
                {product.details.map((detail, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-sm text-gray-700">
                    <Leaf className="w-4 h-4 text-aura-accent" /> {detail}
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex items-center gap-6 mb-8">
              {/* Quantity Selector */}
              <div className="flex items-center border border-black p-2 w-32 justify-between">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="p-2 hover:bg-aura-secondary transition-colors interactive"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="font-semibold">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="p-2 hover:bg-aura-secondary transition-colors interactive"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>

              {/* Add to Cart Button */}
              <button
                onClick={handleAddToCart}
                className="flex-grow bg-black text-white py-5 px-8 uppercase tracking-widest text-sm font-semibold hover:bg-aura-accent transition-colors duration-300 interactive flex items-center justify-center gap-2"
              >
                {added ? (
                  <>
                    <Check className="w-5 h-5" /> Added to Cart
                  </>
                ) : (
                  `Add to Cart - $${product.price * quantity}`
                )}
              </button>
            </div>
            
            {/* Accordion / Info sections placeholder */}
            <div className="space-y-4 mt-8">
               <details className="group border-b border-aura-secondary pb-4">
                  <summary className="flex justify-between items-center font-serif text-lg cursor-pointer list-none interactive">
                    <span>Ingredients</span>
                    <span className="transition group-open:rotate-45">
                      <Plus className="w-5 h-5" />
                    </span>
                  </summary>
                  <div className="text-gray-600 mt-4 text-sm leading-relaxed">
                    Formulated with clinical-grade botanicals. We prioritize clean, effective ingredients. Free from parabens, sulfates, and synthetic fragrances.
                  </div>
               </details>
               <details className="group border-b border-aura-secondary pb-4">
                  <summary className="flex justify-between items-center font-serif text-lg cursor-pointer list-none interactive">
                    <span>How to Use</span>
                    <span className="transition group-open:rotate-45">
                      <Plus className="w-5 h-5" />
                    </span>
                  </summary>
                  <div className="text-gray-600 mt-4 text-sm leading-relaxed">
                    Apply a small amount to clean, dry skin. Massage gently in upward, circular motions until fully absorbed. Use daily for best results.
                  </div>
               </details>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
