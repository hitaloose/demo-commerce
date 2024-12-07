"use client";

import { Button } from "@/components/button";
import { NumberPicker } from "@/components/number-picker";
import { Product } from "@/entities/product";
import { useOrderStore } from "@/stores/order";
import { useRouter } from "next/navigation";
import { useCallback, useState } from "react";

type Props = {
  product: Product;
};

export const Form = ({ product }: Props) => {
  const router = useRouter();
  const { addItem } = useOrderStore();
  const [quantity, setQuantity] = useState(0);

  const handleQuantityChange = useCallback((value: number) => {
    if (value < 0) return;

    setQuantity(value);
  }, []);

  const handleAddToCartClick = useCallback(() => {
    if (!quantity) return;

    const unitPrice = +product.price;
    const totalPrice = quantity * unitPrice;

    addItem({ product, unitPrice, quantity, totalPrice });

    router.back();
  }, [addItem, product, quantity, router]);

  return (
    <div className="flex justify-between items-center">
      <NumberPicker value={quantity} onChange={handleQuantityChange} />
      <Button onClick={handleAddToCartClick}>Add to cart</Button>
    </div>
  );
};
