// zustandStore.ts
import { create } from "zustand";
import { persist } from "zustand/middleware";

export interface Product {
  id: string;
  title: string;
  desc: string;
  price: number;
  image: string;
  slug: string;
  quantity?: number;
}

export interface CartStore {
  cart: Product[];
  addToCart: (product: Product) => void;
  removeFromCart: (productId: string) => void;
  setQuantity: (productId: string, quantity: number) => void;
  cartCount: () => number;
}

const useCartStore = create<CartStore>()(
  persist(
    (set, get) => ({
      cart: [],

      addToCart: (product) => {
        const existing = get().cart.find((item) => item.id === product.id);
        if (existing) {
          set({
            cart: get().cart.map((item) =>
              item.id === product.id
                ? { ...item, quantity: item.quantity! + 1 }
                : item
            ),
          });
        } else {
          set({ cart: [...get().cart, { ...product, quantity: 1 }] });
        }
      },

      removeFromCart: (productId) => {
        const updated = get()
          .cart.map((item) =>
            item.id === productId
              ? { ...item, quantity: item.quantity! - 1 }
              : item
          )
          .filter((item) => item.quantity! > 0);
        set({ cart: updated });
      },

      setQuantity: (productId, quantity) => {
        if (quantity <= 0) {
          set({ cart: get().cart.filter((item) => item.id !== productId) });
        } else {
          set({
            cart: get().cart.map((item) =>
              item.id === productId ? { ...item, quantity } : item
            ),
          });
        }
      },

      cartCount: () =>
        get().cart.reduce((sum, item) => sum + (item.quantity ?? 0), 0),
    }),
    { name: "cart-storage" }
  )
);

export default useCartStore;
