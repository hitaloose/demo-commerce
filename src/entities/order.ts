import { Product } from "@/entities/product";

export type OrderItem = {
  product: Product;
  unitPrice: number;
  quantity: number;
  totalPrice: number;
};

export type Order = {
  totalPrice: number;
  items: OrderItem[];
};
