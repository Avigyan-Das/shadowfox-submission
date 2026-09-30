import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-aura-text text-aura-bg py-16 px-6">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="col-span-1 md:col-span-2">
          <Link href="/" className="text-3xl font-serif tracking-widest font-bold mb-6 block">
            AURA
          </Link>
          <p className="text-aura-secondary max-w-sm mb-6">
            Botanical intelligence for your skin. We believe in the power of nature combined with modern science to reveal your skin's natural radiance.
          </p>
          <div className="flex space-x-4">
            {/* Social Links placeholder */}
            <a href="#" className="w-10 h-10 border border-aura-secondary/30 flex items-center justify-center rounded-full hover:bg-aura-accent hover:border-aura-accent transition-all interactive">
              Ig
            </a>
            <a href="#" className="w-10 h-10 border border-aura-secondary/30 flex items-center justify-center rounded-full hover:bg-aura-accent hover:border-aura-accent transition-all interactive">
              Fb
            </a>
            <a href="#" className="w-10 h-10 border border-aura-secondary/30 flex items-center justify-center rounded-full hover:bg-aura-accent hover:border-aura-accent transition-all interactive">
              Pi
            </a>
          </div>
        </div>

        <div>
          <h4 className="font-serif text-lg mb-6 text-aura-accent">Explore</h4>
          <ul className="space-y-4">
            <li><Link href="/shop" className="hover:text-aura-accent transition-colors interactive">Shop All</Link></li>
            <li><Link href="/about" className="hover:text-aura-accent transition-colors interactive">Our Story</Link></li>
            <li><Link href="/journal" className="hover:text-aura-accent transition-colors interactive">Journal</Link></li>
            <li><Link href="/ingredients" className="hover:text-aura-accent transition-colors interactive">Ingredients</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-serif text-lg mb-6 text-aura-accent">Support</h4>
          <ul className="space-y-4">
            <li><Link href="/faq" className="hover:text-aura-accent transition-colors interactive">FAQ</Link></li>
            <li><Link href="/shipping" className="hover:text-aura-accent transition-colors interactive">Shipping & Returns</Link></li>
            <li><Link href="/contact" className="hover:text-aura-accent transition-colors interactive">Contact Us</Link></li>
            <li><Link href="/privacy" className="hover:text-aura-accent transition-colors interactive">Privacy Policy</Link></li>
          </ul>
        </div>
      </div>
      <div className="container mx-auto mt-16 pt-8 border-t border-aura-secondary/20 text-sm text-center text-aura-secondary/60">
        &copy; {new Date().getFullYear()} Aura Botanical. All rights reserved.
      </div>
    </footer>
  );
}
