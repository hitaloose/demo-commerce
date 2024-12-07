"use client";

import { Card } from "@/components/card";
import { Product } from "@/entities/product";
import { formatPrice } from "@/helpers/number";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useCallback } from "react";

type Props = {
  product: Product;
};

export const CardProduct = ({ product }: Props) => {
  const router = useRouter();

  const handleClick = useCallback(() => {
    router.push(`/product/${product.id}`);
  }, [product.id, router]);

  return (
    <div className="relative" onClick={handleClick}>
      <div className="absolute right-4 top-2 bg-orange-700 text-slate-50 font-semibold px-2 rounded-md">
        {formatPrice(+product.price)}
      </div>
      <Card className="flex justify-center items-center h-28">
        <Image
          src={product.image}
          alt={product.title}
          width={112}
          height={112}
          className="h-full w-full rounded-lg object-contain"
        />
      </Card>
      <div>
        <h3 className="text-ellipsis font-semibold line-clamp-2">{product.title}</h3>
      </div>
    </div>
  );
};
