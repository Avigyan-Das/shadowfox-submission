"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Product } from "@/data/products";
import { useCart } from "@/store/useCart";

interface ProductCardProps {
  product: Product;
  index: number;
}

export default function ProductCard({ product, index }: ProductCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const { addItem } = useCart();

  const handleAdd = (e: React.MouseEvent) => {
    e.preventDefault(); // Prevent navigating to product detail
    addItem(product);
  };

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.6, delay: index * 0.05 }}
      className="group relative flex flex-col cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link href={`/product/${product.id}`} className="relative aspect-[3/4] w-full overflow-hidden bg-aura-secondary mb-4 interactive">
        <motion.div
          animate={{ scale: isHovered ? 1.05 : 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="absolute inset-0"
        >
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </motion.div>
        
        {/* Quick Add Overlay */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : 20 }}
          transition={{ duration: 0.3 }}
          className="absolute bottom-4 left-4 right-4"
        >
          <button
            onClick={handleAdd}
            className="w-full bg-white/90 backdrop-blur-sm text-black py-3 uppercase tracking-widest text-xs font-semibold hover:bg-black hover:text-white transition-colors interactive shadow-lg"
          >
            Quick Add
          </button>
        </motion.div>
      </Link>
      
      <div className="flex justify-between items-start">
        <div>
          <h3 className="font-serif text-lg">{product.name}</h3>
          <p className="text-sm text-gray-500 mt-1">{product.category}</p>
        </div>
        <p className="font-semibold">${product.price}</p>
      </div>
    </motion.div>
  );
}
