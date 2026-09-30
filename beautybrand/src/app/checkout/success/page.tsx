"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { CheckCircle, Package, ArrowRight } from "lucide-react";
import { useCart } from "@/store/useCart";
import Link from "next/link";

export default function CheckoutSuccessPage() {
  const { clearCart } = useCart();
  const [orderNumber, setOrderNumber] = useState("");

  useEffect(() => {
    // Generate fake order number
    setOrderNumber(`AURA-${Math.floor(100000 + Math.random() * 900000)}`);
    clearCart();
  }, [clearCart]);

  return (
    <div className="pt-32 pb-24 px-6 min-h-screen flex items-center justify-center bg-aura-bg">
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-xl w-full bg-white p-12 text-center shadow-xl border border-aura-secondary"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
          className="mx-auto w-20 h-20 bg-green-50 rounded-full flex items-center justify-center mb-8"
        >
          <CheckCircle className="w-10 h-10 text-green-600" />
        </motion.div>
        
        <h1 className="font-serif text-4xl mb-4">Order Confirmed</h1>
        <p className="text-gray-600 mb-8">
          Thank you for your purchase. We've received your order and will begin processing it shortly. 
          A confirmation email has been sent to you.
        </p>

        <div className="bg-aura-secondary/30 border border-aura-secondary p-6 mb-10 flex flex-col items-center">
          <p className="text-sm text-gray-500 uppercase tracking-widest mb-2">Order Number</p>
          <p className="font-serif text-2xl font-bold tracking-wide">{orderNumber}</p>
        </div>

        <div className="space-y-4">
          <Link href="/shop" className="block w-full">
            <button className="w-full bg-black text-white py-4 uppercase tracking-widest text-sm font-semibold hover:bg-aura-accent transition-colors interactive">
              Continue Shopping
            </button>
          </Link>
          <Link href="/" className="block w-full">
            <button className="w-full bg-transparent border border-black text-black py-4 uppercase tracking-widest text-sm font-semibold hover:bg-aura-bg transition-colors interactive">
              Return Home
            </button>
          </Link>
        </div>
      </motion.div>
    </div>
  );
}
