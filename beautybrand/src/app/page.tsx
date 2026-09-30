"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Leaf, Droplets, Sun } from "lucide-react";

export default function Home() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <div className="w-full" ref={containerRef}>
      {/* Hero Section */}
      <section className="relative h-screen w-full overflow-hidden flex items-center justify-center">
        <motion.div style={{ y, opacity }} className="absolute inset-0 z-0">
          <Image
            src="/images/hero_bg.jpg"
            alt="Botanical Hero"
            fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-black/20" />
        </motion.div>

        <div className="relative z-10 text-center text-white px-6">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="uppercase tracking-[0.3em] text-sm md:text-base mb-6"
          >
            Nature's Purest Essence
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="font-serif text-5xl md:text-7xl lg:text-8xl mb-8"
          >
            Aura Botanical
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Link
              href="/shop"
              className="inline-flex items-center gap-2 border border-white px-8 py-4 uppercase tracking-widest text-sm hover:bg-white hover:text-black transition-all duration-500 interactive"
            >
              Shop Collection <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Marquee Features */}
      <section className="bg-aura-accent text-white py-4 overflow-hidden flex whitespace-nowrap">
        <motion.div
          className="flex space-x-12 px-6 items-center text-sm uppercase tracking-widest"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ repeat: Infinity, ease: "linear", duration: 20 }}
        >
          {Array(8).fill("").map((_, i) => (
            <div key={i} className="flex items-center space-x-12">
              <span className="flex items-center gap-2"><Leaf className="w-4 h-4" /> 100% Vegan</span>
              <span className="flex items-center gap-2"><Droplets className="w-4 h-4" /> Deeply Hydrating</span>
              <span className="flex items-center gap-2"><Sun className="w-4 h-4" /> Dermatologist Tested</span>
            </div>
          ))}
        </motion.div>
      </section>

      {/* Philosophy Section */}
      <section className="py-24 md:py-32 px-6 container mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="relative aspect-[3/4] w-full"
          >
            <Image
              src="/images/product_1.jpg"
              alt="Texture"
              fill
              className="object-cover"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-xl"
          >
            <h2 className="font-serif text-4xl md:text-5xl mb-8 leading-tight">
              Skinimalism, elevated by science.
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              We source the most potent, ethically harvested botanicals to create transformative formulas. No fillers, no compromises. Just pure, active ingredients that respect your skin's natural barrier.
            </p>
            <Link
              href="/about"
              className="inline-block border-b border-black pb-1 uppercase tracking-widest text-sm hover:text-aura-accent hover:border-aura-accent transition-colors interactive"
            >
              Discover Our Story
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Featured Video / Immersive Section */}
      <section className="h-[80vh] relative w-full overflow-hidden flex items-center justify-center">
         <motion.div
          initial={{ scale: 1.1 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0"
         >
           <Image
             src="/images/product_2.jpg"
             alt="Immersive Brand Experience"
             fill
             className="object-cover"
           />
           <div className="absolute inset-0 bg-black/30" />
         </motion.div>
         <div className="relative z-10 text-center text-white p-6 max-w-3xl">
           <h2 className="font-serif text-3xl md:text-6xl mb-6">Harmonize Your Routine</h2>
           <p className="text-lg md:text-xl font-light">Experience the synergy of nature and innovation.</p>
         </div>
      </section>
    </div>
  );
}
