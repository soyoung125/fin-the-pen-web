import { Dispatch, SetStateAction } from "react";

export interface ExpenditureCategoryPageProps {
  selectedCategory: string;
  setSelectedCategory: Dispatch<SetStateAction<string>>;
}

function ExpenditureCategoryPage({
  selectedCategory,
  setSelectedCategory,
}: ExpenditureCategoryPageProps) {
  return <></>;
}

export default ExpenditureCategoryPage;
