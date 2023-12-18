import { EXPENDITURE_CATEGORY } from "@containers/home/ScheduleDrawer/inputs/CategoryPicker/constants.ts";
import CategoryButton from "@containers/home/ScheduleDrawer/inputs/CategoryPicker/components/CategoryButton.tsx";
import { Dispatch, SetStateAction } from "react";

export interface ExpenditureCategoryPageProps {
  selectedCategory: string;
  setSelectedCategory: Dispatch<SetStateAction<string>>;
}

function ExpenditureCategoryPage({
  selectedCategory,
  setSelectedCategory,
}: ExpenditureCategoryPageProps) {
  return (
    <>
      {EXPENDITURE_CATEGORY.map((category) => {
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

export default ExpenditureCategoryPage;
