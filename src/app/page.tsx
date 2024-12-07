import { getAllCategories } from "@/actions/categories";
import { getProductsByCategory } from "@/actions/products";
import { Card } from "@/components/card";
import { CardProduct } from "@/components/card-product";
import { MenuCategories } from "@/components/menu-categories";
import { Category } from "@/entities/category";

type Props = {
  searchParams: Promise<{
    category: Category;
  }>;
};

export default async function Page(props: Props) {
  const searchParams = await props.searchParams;

  const categories = await getAllCategories();
  const products = await getProductsByCategory(searchParams.category || categories[0]);

  return (
    <div className="mt-1 grid gap-3">
      <Card>
        <div className="w-full h-48 flex justify-center items-center">BANNER</div>
      </Card>

      <MenuCategories categories={categories} />

      <Card className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-2 gap-y-8">
        {products.map((product) => (
          <CardProduct key={product.id} product={product} />
        ))}
      </Card>
    </div>
  );
}
