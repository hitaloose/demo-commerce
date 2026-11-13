import products from "@/data/products.json";
import { Category } from "@/entities/category";
import { Product } from "@/entities/product";

// Snapshot of https://fakestoreapi.com/products, with images served from /public.
// FakeStoreAPI rejects requests from Vercel's servers, so the demo no longer fetches it at runtime.
const allProducts = products as Product[];

export const getProductsByCategory = async (category: Category) =>
  allProducts.filter((product) => product.category === category);

export const getAllProducts = async () => allProducts;

export const getProductById = async (productId: number) =>
  allProducts.find((product) => product.id === productId);
