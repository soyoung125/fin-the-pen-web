import { INCOME_CATEGORY } from "../../constants.ts";
import CategoryButton from "../../components/CategoryButton.tsx";
import { Dispatch, SetStateAction } from "react";

export interface IncomeCategoryPageProps {
  selectedCategory: string;
  setSelectedCategory: Dispatch<SetStateAction<string>>;
}

function IncomeCategoryPage({
  selectedCategory,
  setSelectedCategory,
}: IncomeCategoryPageProps) {
  return (
    <>
      {INCOME_CATEGORY.map((category) => {
        return (
          <CategoryButton
            key={category}
            selected={selectedCategory === category}
            category={category}
            onClick={() => setSelectedCategory(category)}
          />
        );
      })}
    </>
  );
}

export default IncomeCategoryPage;
