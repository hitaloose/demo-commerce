"use client";

import { Card } from "@/components/card";
import { formatPrice } from "@/helpers/number";
import { useOrderStore } from "@/stores/order";

export const CardSubtotal = () => {
  const { order } = useOrderStore();

  return (
    <div className="p-1">
      <Card>
        <p>
          <strong>Order price: </strong>
          {formatPrice(order.totalPrice)}
        </p>
      </Card>
    </div>
  );
};
