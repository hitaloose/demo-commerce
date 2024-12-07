import { Order, OrderItem } from "@/entities/order";
import { create } from "zustand";

type State = {
  order: Order;
};

type Actions = {
  addItem: (newItem: OrderItem) => void;
  removeItem: (index: number) => void;
};

export const useOrderStore = create<State & Actions>((set) => ({
  order: { totalPrice: 0, items: [] },
  addItem: (newItem: OrderItem) =>
    set((state) => {
      const newTotalPrice = state.order.totalPrice + newItem.totalPrice;

      return { order: { totalPrice: newTotalPrice, items: [...state.order.items, newItem] } };
    }),
  removeItem: (index: number) =>
    set((state) => {
      const shadowItems = state.order.items;
      const itemToRemove = shadowItems[index];

      const newTotalPrice = state.order.totalPrice - itemToRemove.totalPrice;

      shadowItems.splice(index, 1);

      return {
        order: { totalPrice: newTotalPrice, items: shadowItems },
      };
    }),
}));
