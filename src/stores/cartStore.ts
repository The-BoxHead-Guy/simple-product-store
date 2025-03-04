// src/stores/cartStore.ts
import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { CartState } from "../types/Cart/CartState";

export const useCartStore = create<CartState>()(
  persist(
    (set, get) => ({
      isOpen: false,
      items: [],
      totalItems: 0,
      totalPrice: 0,

      toggleCart: () => set((state) => ({ isOpen: !state.isOpen })),

      addItem: (product, quantity = 1) => {
        set((state) => {
          const existingItem = state.items.find(
            (item) => item.id === product.id
          );
          const items = existingItem
            ? state.items.map((item) =>
                item.id === product.id
                  ? { ...item, quantity: item.quantity + quantity }
                  : item
              )
            : [...state.items, { ...product, quantity }];

          return {
            items,
            totalItems: items.reduce((sum, item) => sum + item.quantity, 0),
            totalPrice: items.reduce(
              (sum, item) => sum + item.price * item.quantity,
              0
            ),
          };
        });
      },

      removeItem: (id) => {
        set((state) => {
          const items = state.items.filter((item) => item.id !== id);
          return {
            items,
            totalItems: items.reduce((sum, item) => sum + item.quantity, 0),
            totalPrice: items.reduce(
              (sum, item) => sum + item.price * item.quantity,
              0
            ),
          };
        });
      },

      updateQuantity: (id, quantity) => {
        set((state) => {
          const items = state.items
            .map((item) => (item.id === id ? { ...item, quantity } : item))
            .filter((item) => item.quantity > 0);

          return {
            items,
            totalItems: items.reduce((sum, item) => sum + item.quantity, 0),
            totalPrice: items.reduce(
              (sum, item) => sum + item.price * item.quantity,
              0
            ),
          };
        });
      },

      clearCart: () => {
        set({ items: [], totalItems: 0, totalPrice: 0 });
      },
    }),
    {
      name: "cart-storage", // LocalStorage key
      skipHydration: true, // Required for Astro SSR
    }
  )
);
