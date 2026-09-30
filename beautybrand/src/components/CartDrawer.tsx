"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, Minus, Plus, ShoppingBag, ArrowRight } from "lucide-react";
import { useCart } from "@/store/useCart";
import Image from "next/image";
import Link from "next/link";

export default function CartDrawer() {
  const { isOpen, closeCart, items, updateQuantity, removeItem } = useCart();

  const subtotal = items.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const shippingThreshold = 100;
  const progress = Math.min((subtotal / shippingThreshold) * 100, 100);
  const remainingForFreeShipping = Math.max(shippingThreshold - subtotal, 0);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeCart}
            className="fixed inset-0 bg-aura-bg/80 backdrop-blur-sm z-[70]"
          />

          {/* Drawer */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 30, stiffness: 200, mass: 0.8 }}
            className="fixed top-0 right-0 h-full w-full max-w-lg bg-white z-[80] shadow-2xl flex flex-col border-l border-aura-secondary"
          >
            {/* Header */}
            <div className="p-6 md:p-8 flex justify-between items-center bg-aura-bg">
              <h2 className="text-2xl font-serif tracking-wide">Cart ({items.length})</h2>
              <button onClick={closeCart} className="interactive hover:rotate-90 transition-transform duration-300 bg-white p-2 rounded-full shadow-sm">
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Free Shipping Progress */}
            {items.length > 0 && (
              <div className="px-6 md:px-8 py-4 bg-aura-bg border-b border-aura-secondary">
                <p className="text-sm text-center mb-2 font-medium">
                  {remainingForFreeShipping > 0 
                    ? `You're $${remainingForFreeShipping.toFixed(2)} away from free shipping!` 
                    : "✨ You've unlocked free shipping! ✨"}
                </p>
                <div className="w-full h-1 bg-aura-secondary rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: `${progress}%` }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="h-full bg-aura-accent"
                  />
                </div>
              </div>
            )}

            {/* Cart Items */}
            <div className="flex-grow overflow-y-auto p-6 md:p-8 space-y-8 bg-white">
              {items.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-full text-center space-y-6 opacity-60">
                  <ShoppingBag className="w-16 h-16 text-aura-accent" />
                  <p className="font-serif text-2xl">Your cart is empty.</p>
                  <button onClick={closeCart} className="uppercase tracking-widest text-sm border-b border-black pb-1 interactive hover:text-aura-accent hover:border-aura-accent transition-colors">
                    Continue Shopping
                  </button>
                </div>
              ) : (
                <AnimatePresence>
                  {items.map((item) => (
                    <motion.div 
                      layout
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      key={item.id} 
                      className="flex gap-6 group"
                    >
                      <div className="relative w-28 h-32 bg-aura-secondary overflow-hidden">
                        <Image
                          src={item.image}
                          alt={item.name}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                      </div>
                      <div className="flex-grow flex flex-col justify-between py-1">
                        <div>
                          <div className="flex justify-between items-start">
                            <h3 className="font-serif text-lg leading-tight pr-4">{item.name}</h3>
                            <button onClick={() => removeItem(item.id)} className="text-gray-400 hover:text-red-500 transition-colors interactive">
                              <X className="w-4 h-4" />
                            </button>
                          </div>
                          <p className="text-sm text-gray-500 mt-1">{item.category}</p>
                        </div>
                        <div className="flex justify-between items-end mt-4">
                          <div className="flex items-center border border-aura-secondary rounded-sm">
                            <button
                              onClick={() => updateQuantity(item.id, item.quantity - 1)}
                              className="p-2 interactive hover:bg-aura-bg transition-colors"
                            >
                              <Minus className="w-3 h-3" />
                            </button>
                            <span className="w-8 text-center text-sm font-medium">{item.quantity}</span>
                            <button
                              onClick={() => updateQuantity(item.id, item.quantity + 1)}
                              className="p-2 interactive hover:bg-aura-bg transition-colors"
                            >
                              <Plus className="w-3 h-3" />
                            </button>
                          </div>
                          <p className="font-semibold text-lg">${item.price * item.quantity}</p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>
              )}
            </div>

            {/* Footer / Checkout */}
            {items.length > 0 && (
              <div className="border-t border-aura-secondary bg-aura-bg p-6 md:p-8 shadow-[0_-10px_40px_rgba(0,0,0,0.03)]">
                <div className="space-y-3 mb-6 text-sm">
                  <div className="flex justify-between text-gray-500">
                    <span>Subtotal</span>
                    <span>${subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-gray-500">
                    <span>Shipping</span>
                    <span>{remainingForFreeShipping > 0 ? "Calculated at checkout" : "Free"}</span>
                  </div>
                </div>
                <div className="flex justify-between text-xl mb-6 font-serif items-end">
                  <span>Total</span>
                  <span className="text-2xl">${subtotal.toFixed(2)}</span>
                </div>
                <Link href="/checkout" onClick={closeCart} className="block w-full">
                  <button className="w-full bg-black text-white py-4 flex items-center justify-center gap-2 uppercase tracking-widest text-sm font-semibold hover:bg-aura-accent transition-colors duration-300 interactive shadow-lg">
                    Proceed to Checkout <ArrowRight className="w-4 h-4" />
                  </button>
                </Link>
                <div className="mt-4 flex gap-2 justify-center items-center text-xs text-gray-400">
                  <span>🔒 Secure Encrypted Checkout</span>
                </div>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
