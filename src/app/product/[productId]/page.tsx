import Image from "next/image";

import { getAllProducts, getProductById } from "@/actions/products";
import { formatPrice } from "@/helpers/number";
import { Form } from "@/app/product/[productId]/components/form";

type Props = {
  params: Promise<{ productId: string }>;
};

export async function generateStaticParams() {
  const products = await getAllProducts();

  return products.map((product) => ({
    productId: String(product.id),
  }));
}

export default async function Page(props: Props) {
  const params = await props.params;
  const product = await getProductById(+params.productId);

  return (
    <div className="px-2 h-full flex flex-col justify-between">
      <div className="flex justify-center h-60 mt-6">
        <Image src={product.image} alt={product.title} height={240} width={240} />
      </div>
      <div className="flex flex-col gap-4 border shadow border-slate-200 rounded px-2 pb-8">
        <div className="flex items-center justify-between gap-4">
          <h3 className="text-lg font-semibold text-ellipsis line-clamp-2">{product.title}</h3>
          <div className="bg-orange-700 text-slate-50 text-lg font-semibold px-2 rounded-md">
            {formatPrice(+product.price)}
          </div>
        </div>
        <span className="text-sm text-ellipsis line-clamp-6">{product.description}</span>

        <Form product={product} />
      </div>
    </div>
  );
}

export const dynamic = "force-static";
