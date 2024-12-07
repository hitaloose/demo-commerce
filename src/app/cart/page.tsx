import { CardSubtotal } from "@/app/cart/components/card-subtotal";
import { ListItems } from "@/app/cart/components/list-items";

export default function Page() {
  return (
    <div className="mt-1">
      <ListItems />
      <CardSubtotal />
    </div>
  );
}
