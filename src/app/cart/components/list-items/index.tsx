"use client";

import { Button } from "@/components/button";
import { Card } from "@/components/card";
import { formatPrice } from "@/helpers/number";
import { useOrderStore } from "@/stores/order";
import Image from "next/image";

export const ListItems = () => {
  const { order, removeItem } = useOrderStore();

  return (
    <div className="grid gap-2 p-1">
      {!order.items.length && (
        <Card className="flex flex-col justify-center items-center">
          <h3 className="font-semibold">Cart empty</h3>
          <span className="text-sm">Back to shop</span>
        </Card>
      )}
      {order.items.map((item, index) => (
        <Card key={index}>
          <div className="flex items-center gap-2">
            <div>
              <h3 className="font-semibold">{item.product.title}</h3>
              <span className="text-sm text-ellipsis line-clamp-5">{item.product.description}</span>
            </div>
            <Image
              src={item.product.image}
              alt={item.product.title}
              width={82}
              height={82}
              className="object-contain"
            />
          </div>

          <div className="h-px bg-slate-200 my-4" />

          <div className="flex justify-between items-center">
            <div>
              <p>
                <strong>Unit price: </strong>
                {formatPrice(item.unitPrice)}
              </p>
              <p>
                <strong>Quantity: </strong>
                {item.quantity}
              </p>
              <p>
                <strong>Total price: </strong>
                {formatPrice(item.totalPrice)}
              </p>
            </div>
            <Button onClick={() => removeItem(index)}>Remove</Button>
          </div>
        </Card>
      ))}
    </div>
  );
};
