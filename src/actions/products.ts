import { Category } from "@/entities/category";
import { Product } from "@/entities/product";

export const getProductsByCategory = async (category: Category) => {
  const response = await fetch(`https://fakestoreapi.com/products/category/${category}`);
  const data = await response.json();

  return data as Product[];
};

export const getProductById = async (productId: number) => {
  const response = await fetch(`https://fakestoreapi.com/products/${productId}`);
  const data = await response.json();

  return data as Product;
};
