"use server";

import { Category } from "@/entities/category";

export const getAllCategories = async () => {
  const response = await fetch("https://fakestoreapi.com/products/categories");
  const data = await response.json();

  return data as Category[];
};
