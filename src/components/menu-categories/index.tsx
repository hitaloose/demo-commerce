"use client";

import { Button } from "@/components/button";
import { Card } from "@/components/card";
import { Category } from "@/entities/category";
import { useRouter, useSearchParams } from "next/navigation";
import { useCallback, useMemo } from "react";

type Props = {
  categories: Category[];
};

export const MenuCategories = ({ categories }: Props) => {
  const searchParams = useSearchParams();
  const router = useRouter();

  const selectedCategory = useMemo(() => searchParams.get("category") || categories[0], [categories, searchParams]);

  const handleClick = useCallback(
    (category: Category) => {
      router.push(`/?category=${category}`);
    },
    [router]
  );

  return (
    <Card className="flex gap-2 overflow-y-auto">
      {categories.map((category) => (
        <Button
          className="text-nowrap"
          key={category}
          variant={selectedCategory === category ? "active" : "primary"}
          onClick={() => handleClick(category)}
        >
          {category}
        </Button>
      ))}
    </Card>
  );
};
