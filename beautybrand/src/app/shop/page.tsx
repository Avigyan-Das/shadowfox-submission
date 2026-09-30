"use client";

import { useState, useMemo } from "react";
import { products } from "@/data/products";
import ProductCard from "@/components/ProductCard";
import { motion, AnimatePresence } from "framer-motion";
import { Search, SlidersHorizontal, X } from "lucide-react";

export default function ShopPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  const [priceSort, setPriceSort] = useState<"none" | "low" | "high">("none");
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const categories = ["All", ...Array.from(new Set(products.map(p => p.category)))];

  const filteredProducts = useMemo(() => {
    let result = products;

    // Filter by category
    if (activeCategory !== "All") {
      result = result.filter(p => p.category === activeCategory);
    }

    // Filter by search
    if (searchQuery) {
      const q = searchQuery.toLowerCase();
      result = result.filter(p => 
        p.name.toLowerCase().includes(q) || 
        p.description.toLowerCase().includes(q)
      );
    }

    // Sort by price
    if (priceSort === "low") {
      result = [...result].sort((a, b) => a.price - b.price);
    } else if (priceSort === "high") {
      result = [...result].sort((a, b) => b.price - a.price);
    }

    return result;
  }, [activeCategory, searchQuery, priceSort]);

  return (
    <div className="pt-32 pb-24 px-6 min-h-screen">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 md:mb-24"
        >
          <h1 className="font-serif text-4xl md:text-6xl mb-6">The Collection</h1>
          <p className="text-gray-500 max-w-2xl mx-auto">
            Discover our full range of scientifically-backed, botanically-powered skincare essentials designed to elevate your daily ritual.
          </p>
        </motion.div>

        {/* Search & Filter Toolbar */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-12 border-b border-aura-secondary pb-6 gap-8">
          <div className="relative w-full md:w-1/2 lg:w-1/3">
            <Search className="absolute left-0 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input 
              type="text" 
              placeholder="Search by ingredient, concern, or product..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-8 pr-8 py-3 bg-transparent border-0 border-b-2 border-aura-secondary focus:border-black outline-none transition-colors text-black placeholder:text-gray-400 interactive font-serif text-lg"
            />
            {searchQuery && (
              <button onClick={() => setSearchQuery("")} className="absolute right-0 top-1/2 -translate-y-1/2 interactive">
                <X className="w-5 h-5 text-gray-400 hover:text-black transition-colors" />
              </button>
            )}
          </div>

          <div className="flex items-center gap-6 w-full md:w-auto overflow-x-auto no-scrollbar pb-2 md:pb-0">
            <button 
              onClick={() => setIsFilterOpen(!isFilterOpen)}
              className="flex items-center gap-2 text-sm uppercase tracking-widest font-semibold pb-1 border-b border-transparent hover:border-black transition-colors interactive whitespace-nowrap"
            >
              <SlidersHorizontal className="w-4 h-4" /> {isFilterOpen ? "Close Filters" : "Filter & Sort"}
            </button>
            <div className="text-sm text-gray-500 whitespace-nowrap font-serif italic">
              {filteredProducts.length} items
            </div>
          </div>
        </div>

        {/* Advanced Filters Panel */}
        <AnimatePresence>
          {isFilterOpen && (
            <motion.div 
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="overflow-hidden mb-12"
            >
              <div className="p-6 bg-aura-secondary/30 grid grid-cols-1 md:grid-cols-2 gap-8 border border-aura-secondary">
                <div>
                  <h3 className="font-serif text-lg mb-4">Category</h3>
                  <div className="flex flex-wrap gap-2">
                    {categories.map(cat => (
                      <button 
                        key={cat}
                        onClick={() => setActiveCategory(cat)}
                        className={`px-4 py-2 text-sm transition-colors interactive border ${
                          activeCategory === cat ? 'bg-black text-white border-black' : 'bg-transparent border-aura-secondary hover:border-black'
                        }`}
                      >
                        {cat}
                      </button>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="font-serif text-lg mb-4">Sort By Price</h3>
                  <div className="flex flex-wrap gap-2">
                    <button 
                      onClick={() => setPriceSort("none")}
                      className={`px-4 py-2 text-sm transition-colors interactive border ${
                        priceSort === "none" ? 'bg-black text-white border-black' : 'bg-transparent border-aura-secondary hover:border-black'
                      }`}
                    >
                      Featured
                    </button>
                    <button 
                      onClick={() => setPriceSort("low")}
                      className={`px-4 py-2 text-sm transition-colors interactive border ${
                        priceSort === "low" ? 'bg-black text-white border-black' : 'bg-transparent border-aura-secondary hover:border-black'
                      }`}
                    >
                      Low to High
                    </button>
                    <button 
                      onClick={() => setPriceSort("high")}
                      className={`px-4 py-2 text-sm transition-colors interactive border ${
                        priceSort === "high" ? 'bg-black text-white border-black' : 'bg-transparent border-aura-secondary hover:border-black'
                      }`}
                    >
                      High to Low
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Product Grid */}
        {filteredProducts.length > 0 ? (
          <motion.div 
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16"
          >
            <AnimatePresence>
              {filteredProducts.map((product, idx) => (
                <ProductCard key={product.id} product={product} index={idx} />
              ))}
            </AnimatePresence>
          </motion.div>
        ) : (
          <div className="text-center py-24">
            <h3 className="font-serif text-2xl mb-4">No products found</h3>
            <p className="text-gray-500 mb-8">We couldn't find anything matching your criteria.</p>
            <button 
              onClick={() => { setSearchQuery(""); setActiveCategory("All"); setPriceSort("none"); }}
              className="px-6 py-3 bg-black text-white uppercase tracking-widest text-sm hover:bg-aura-accent transition-colors interactive"
            >
              Clear Filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
