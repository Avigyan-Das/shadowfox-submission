"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const posts = [
  {
    id: 1,
    title: "The Science of Squalane: Why Your Skin Needs It",
    category: "Ingredients",
    date: "March 15, 2026",
    image: "/images/product_1.jpg",
    excerpt: "Discover how this weightless lipid mimics your skin's natural oils to provide unparalleled hydration without clogging pores."
  },
  {
    id: 2,
    title: "Morning Rituals for Glowing Skin",
    category: "Lifestyle",
    date: "February 28, 2026",
    image: "/images/hero_bg.jpg",
    excerpt: "Elevate your morning routine from a rushed necessity to a grounding ritual that sets the tone for your day."
  },
  {
    id: 3,
    title: "Understanding Your Skin Barrier",
    category: "Education",
    date: "February 10, 2026",
    image: "/images/product_2.jpg",
    excerpt: "What is the acid mantle, and why is protecting it the single most important step in anti-aging?"
  }
];

export default function JournalPage() {
  return (
    <div className="pt-32 pb-24 px-6 min-h-screen">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 md:mb-24"
        >
          <h1 className="font-serif text-5xl md:text-7xl mb-6">The Journal</h1>
          <p className="text-gray-500 max-w-2xl mx-auto text-lg">
            Insights, education, and inspiration from the world of botanical science and holistic wellbeing.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
          {posts.map((post, idx) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden mb-6 bg-aura-secondary interactive">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="flex justify-between items-center text-sm text-gray-500 mb-3 uppercase tracking-wider">
                <span>{post.category}</span>
                <span>{post.date}</span>
              </div>
              <h2 className="font-serif text-2xl mb-3 group-hover:text-aura-accent transition-colors">
                {post.title}
              </h2>
              <p className="text-gray-600 mb-4 line-clamp-3">
                {post.excerpt}
              </p>
              <Link href="#" className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-widest interactive hover:text-aura-accent transition-colors">
                Read More <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.article>
          ))}
        </div>
      </div>
    </div>
  );
}
