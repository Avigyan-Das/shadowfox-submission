import { create } from 'zustand';
import { Product } from '@/data/products';

export interface CartItem extends Product {
  quantity: number;
}

interface CartState {
  items: CartItem[];
  isOpen: boolean;
  addItem: (product: Product) => void;
  removeItem: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
  toggleCart: () => void;
  openCart: () => void;
  closeCart: () => void;
  clearCart: () => void;
}

export const useCart = create<CartState>((set) => ({
  items: [],
  isOpen: false,
  addItem: (product) => set((state) => {
    const existingItem = state.items.find(item => item.id === product.id);
    if (existingItem) {
      return {
        items: state.items.map(item =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        ),
        isOpen: true,
      };
    }
    return { items: [...state.items, { ...product, quantity: 1 }], isOpen: true };
  }),
  removeItem: (id) => set((state) => ({
    items: state.items.filter(item => item.id !== id)
  })),
  updateQuantity: (id, quantity) => set((state) => ({
    items: state.items.map(item =>
      item.id === id ? { ...item, quantity: Math.max(0, quantity) } : item
    ).filter(item => item.quantity > 0)
  })),
  toggleCart: () => set((state) => ({ isOpen: !state.isOpen })),
  openCart: () => set({ isOpen: true }),
  closeCart: () => set({ isOpen: false }),
  clearCart: () => set({ items: [] }),
}));
