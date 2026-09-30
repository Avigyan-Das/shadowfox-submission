"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ShoppingBag, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useCart } from "@/store/useCart";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { toggleCart, items } = useCart();

  const cartItemsCount = items.reduce((acc, item) => acc + item.quantity, 0);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        className={`fixed top-0 w-full z-50 transition-colors duration-300 ${
          isScrolled ? "bg-aura-bg/80 backdrop-blur-md shadow-sm py-4" : "bg-transparent py-6"
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="container mx-auto px-6 flex justify-between items-center">
          {/* Mobile Menu Button */}
          <button
            className="md:hidden interactive"
            onClick={() => setMobileMenuOpen(true)}
          >
            <Menu className="w-6 h-6" />
          </button>

          {/* Desktop Links Left */}
          <div className="hidden md:flex space-x-8 text-sm uppercase tracking-widest">
            <Link href="/shop" className="hover:text-aura-accent transition-colors">
              Shop
            </Link>
            <Link href="/about" className="hover:text-aura-accent transition-colors">
              Our Story
            </Link>
          </div>

          {/* Logo */}
          <Link href="/" className="text-2xl md:text-3xl font-serif tracking-widest font-bold absolute left-1/2 transform -translate-x-1/2">
            AURA
          </Link>

          {/* Icons Right */}
          <div className="flex items-center space-x-6">
            <div className="hidden md:flex space-x-8 text-sm uppercase tracking-widest mr-8">
              <Link href="/journal" className="hover:text-aura-accent transition-colors">
                Journal
              </Link>
            </div>
            <button className="relative interactive hover:text-aura-accent transition-colors" onClick={toggleCart}>
              <ShoppingBag className="w-6 h-6" />
              {cartItemsCount > 0 && (
                <motion.span 
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="absolute -top-2 -right-2 bg-aura-accent text-white text-[10px] font-bold w-5 h-5 flex items-center justify-center rounded-full"
                >
                  {cartItemsCount}
                </motion.span>
              )}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Full Screen Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-[60] bg-aura-bg flex flex-col items-center justify-center"
          >
            <button
              className="absolute top-6 left-6 interactive"
              onClick={() => setMobileMenuOpen(false)}
            >
              <X className="w-8 h-8" />
            </button>
            <div className="flex flex-col space-y-8 text-center text-2xl font-serif">
              <Link href="/" onClick={() => setMobileMenuOpen(false)} className="hover:text-aura-accent transition-colors">Home</Link>
              <Link href="/shop" onClick={() => setMobileMenuOpen(false)} className="hover:text-aura-accent transition-colors">Shop Collection</Link>
              <Link href="/about" onClick={() => setMobileMenuOpen(false)} className="hover:text-aura-accent transition-colors">Our Story</Link>
              <Link href="/journal" onClick={() => setMobileMenuOpen(false)} className="hover:text-aura-accent transition-colors">Journal</Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
