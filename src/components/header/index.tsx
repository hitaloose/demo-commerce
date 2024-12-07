"use client";

import { Button } from "@/components/button";
import { useOrderStore } from "@/stores/order";
import { useRouter } from "next/navigation";
import { useCallback } from "react";

export const Header = () => {
  const router = useRouter();
  const itemsLength = useOrderStore((state) => state.order.items.length);

  const handleBackClick = useCallback(() => {
    router.back();
  }, [router]);

  const handleCartClick = useCallback(() => {
    router.push("/cart");
  }, [router]);

  return (
    <div className="border sticky">
      <div className="container mx-auto">
        <div className="flex justify-between items-center px-3 py-2">
          <Button onClick={handleBackClick}>Back</Button>
          <strong>Demo Commerce</strong>
          <div className="relative">
            {!!itemsLength && (
              <div className="absolute right-[-6px] top-[-5px] bg-orange-700 text-slate-50 font-semibold px-2 rounded-md">
                {itemsLength}
              </div>
            )}
            <Button onClick={handleCartClick}>Cart</Button>
          </div>
        </div>
      </div>
    </div>
  );
};
