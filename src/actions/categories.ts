import { getAllProducts } from "@/actions/products";
import { Category } from "@/entities/category";

export const getAllCategories = async () => {
  const products = await getAllProducts();

  return [...new Set(products.map((product) => product.category))] as Category[];
};
