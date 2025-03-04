import type { CartItem } from "./CartItem";

export type CartState = {
  isOpen: boolean;
  items: CartItem[];
  totalItems: number;
  totalPrice: number;
  toggleCart: () => void;
  addItem: (product: Omit<CartItem, "quantity">, quantity?: number) => void;
  removeItem: (id: number) => void;
  updateQuantity: (id: number, quantity: number) => void;
  clearCart: () => void;
};
