"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function AboutPage() {
  return (
    <div className="pt-32 pb-24 px-6 min-h-screen">
      <div className="container mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 md:mb-24"
        >
          <h1 className="font-serif text-5xl md:text-7xl mb-6">Our Story</h1>
          <p className="text-gray-500 max-w-2xl mx-auto text-lg">
            Aura Botanical was born from a singular vision: to bridge the gap between ancient botanical wisdom and clinical efficacy.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16 items-center mb-24">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="relative aspect-square w-full"
          >
            <Image
              src="/images/product_1.jpg"
              alt="Founder mixing ingredients"
              fill
              className="object-cover"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="font-serif text-3xl mb-6">The Philosophy</h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              We believe that skincare should be a ritual, not a routine. Every formula we create is an invitation to connect with yourself and the natural world.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Our ingredients are ethically wild-harvested or organically cultivated. We extract their active compounds using advanced cold-press technology to ensure maximum potency, delivering visible results without compromising your skin's natural barrier.
            </p>
          </motion.div>
        </div>

        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="text-center bg-aura-secondary p-12 md:p-24"
        >
            <h2 className="font-serif text-3xl md:text-4xl mb-6">Uncompromising Quality</h2>
            <p className="max-w-2xl mx-auto text-gray-700 leading-relaxed">
                Every Aura Botanical product is 100% vegan, cruelty-free, and formulated without parabens, sulfates, synthetic fragrances, or artificial dyes. We test rigorously—never on animals—so you can trust what you're putting on your skin.
            </p>
        </motion.div>
      </div>
    </div>
  );
}
