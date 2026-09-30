"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { useCart } from "@/store/useCart";
import Image from "next/image";
import { Lock, CreditCard, ArrowRight } from "lucide-react";

export default function CheckoutPage() {
  const { items } = useCart();
  const router = useRouter();
  const [isProcessing, setIsProcessing] = useState(false);

  const subtotal = items.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const shipping = subtotal > 100 ? 0 : 15;
  const total = subtotal + shipping;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);
    // Fake processing delay
    setTimeout(() => {
      router.push("/checkout/success");
    }, 2000);
  };

  if (items.length === 0) {
    return (
      <div className="pt-40 pb-24 px-6 min-h-screen text-center">
        <h1 className="font-serif text-3xl mb-6">Your cart is empty</h1>
        <button onClick={() => router.push("/shop")} className="border-b border-black pb-1 uppercase tracking-widest text-sm interactive">
          Return to Shop
        </button>
      </div>
    );
  }

  return (
    <div className="pt-32 pb-24 px-6 min-h-screen bg-aura-bg">
      <div className="container mx-auto max-w-6xl flex flex-col-reverse lg:flex-row gap-16">
        
        {/* Checkout Form */}
        <div className="w-full lg:w-3/5">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <h1 className="font-serif text-3xl md:text-4xl mb-8">Checkout</h1>
            
            <form onSubmit={handleSubmit} className="space-y-12">
              {/* Shipping Address */}
              <section>
                <h2 className="font-serif text-xl mb-6 border-b border-aura-secondary pb-4">Shipping Information</h2>
                <div className="grid grid-cols-2 gap-4">
                  <input required type="text" placeholder="First Name" className="col-span-1 p-3 bg-transparent border border-aura-secondary focus:border-black outline-none transition-colors" />
                  <input required type="text" placeholder="Last Name" className="col-span-1 p-3 bg-transparent border border-aura-secondary focus:border-black outline-none transition-colors" />
                  <input required type="text" placeholder="Address" className="col-span-2 p-3 bg-transparent border border-aura-secondary focus:border-black outline-none transition-colors" />
                  <input required type="text" placeholder="City" className="col-span-1 p-3 bg-transparent border border-aura-secondary focus:border-black outline-none transition-colors" />
                  <input required type="text" placeholder="Postal Code" className="col-span-1 p-3 bg-transparent border border-aura-secondary focus:border-black outline-none transition-colors" />
                </div>
              </section>

              {/* Payment Info */}
              <section>
                <h2 className="font-serif text-xl mb-6 border-b border-aura-secondary pb-4 flex items-center justify-between">
                  <span>Payment Method</span>
                  <div className="flex gap-2 text-gray-400">
                    <CreditCard className="w-5 h-5" />
                  </div>
                </h2>
                <div className="bg-white p-6 border border-aura-secondary space-y-4 shadow-sm">
                  <div className="relative">
                    <input required type="text" placeholder="Card Number" maxLength={19} className="w-full p-3 bg-transparent border border-aura-secondary focus:border-black outline-none transition-colors" />
                    <Lock className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <input required type="text" placeholder="MM / YY" maxLength={5} className="p-3 bg-transparent border border-aura-secondary focus:border-black outline-none transition-colors" />
                    <input required type="text" placeholder="CVC" maxLength={4} className="p-3 bg-transparent border border-aura-secondary focus:border-black outline-none transition-colors" />
                  </div>
                  <input required type="text" placeholder="Name on Card" className="w-full p-3 bg-transparent border border-aura-secondary focus:border-black outline-none transition-colors" />
                </div>
              </section>

              <button 
                type="submit"
                disabled={isProcessing}
                className="w-full bg-black text-white py-5 flex items-center justify-center gap-3 uppercase tracking-widest text-sm font-semibold hover:bg-aura-accent transition-colors duration-300 interactive shadow-lg disabled:bg-gray-400"
              >
                {isProcessing ? "Processing Securely..." : `Pay $${total.toFixed(2)}`} 
                {!isProcessing && <ArrowRight className="w-4 h-4" />}
              </button>
            </form>
          </motion.div>
        </div>

        {/* Order Summary */}
        <div className="w-full lg:w-2/5">
          <motion.div 
            initial={{ opacity: 0, x: 20 }} 
            animate={{ opacity: 1, x: 0 }} 
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white p-8 border border-aura-secondary sticky top-32 shadow-sm"
          >
            <h2 className="font-serif text-xl mb-6">Order Summary</h2>
            <div className="space-y-6 mb-8 max-h-[40vh] overflow-y-auto pr-2 no-scrollbar">
              {items.map(item => (
                <div key={item.id} className="flex gap-4">
                  <div className="relative w-16 h-20 bg-aura-secondary overflow-hidden shrink-0">
                    <Image src={item.image} alt={item.name} fill className="object-cover" />
                  </div>
                  <div className="flex-grow flex flex-col justify-center">
                    <h4 className="font-serif text-sm leading-tight mb-1">{item.name}</h4>
                    <p className="text-xs text-gray-500">Qty: {item.quantity}</p>
                  </div>
                  <div className="text-right flex flex-col justify-center">
                    <p className="text-sm font-semibold">${(item.price * item.quantity).toFixed(2)}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="border-t border-aura-secondary pt-6 space-y-3 text-sm">
              <div className="flex justify-between text-gray-600">
                <span>Subtotal</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-gray-600">
                <span>Shipping</span>
                <span>{shipping === 0 ? "Free" : `$${shipping.toFixed(2)}`}</span>
              </div>
              <div className="flex justify-between font-serif text-xl pt-4 border-t border-aura-secondary items-end">
                <span>Total</span>
                <span className="text-2xl">${total.toFixed(2)}</span>
              </div>
            </div>
          </motion.div>
        </div>

      </div>
    </div>
  );
}
