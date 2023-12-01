import { useState } from "react";
import { categories, Category } from "../constants/categories.ts";

export const useSelectCategory = () => {
  const [selectedCategories, setSelectedCategories] = useState<Category[]>(
    categories.map((category) => ({ ...category, subCategories: [] }))
  );

  const onClickCheckFilterButton = (type: string, subCategory: string) => {
    const index = selectedCategories.findIndex((c) => c.type === type);
    const subCategories = selectedCategories[index].subCategories;
    if (subCategories.includes(subCategory)) {
      setSelectedCategories((prev) => {
        const newSelectedCategories = [...prev];
        newSelectedCategories[index].subCategories = subCategories.filter(
          (s) => s !== subCategory
        );
        return newSelectedCategories;
      });
    } else {
      setSelectedCategories((prev) => {
        const newSelectedCategories = [...prev];
        newSelectedCategories[index].subCategories = [
          ...subCategories,
          subCategory,
        ];
        return newSelectedCategories;
      });
    }
  };

  const isSubCategorySelected = (type: string, subCategory: string) => {
    const index = selectedCategories.findIndex((c) => c.type === type);
    return selectedCategories[index].subCategories.includes(subCategory);
  };

  const isAllSubCategoriesSelected = (type: string) => {
    const index = selectedCategories.findIndex((c) => c.type === type);
    const subCategories = selectedCategories[index].subCategories;
    return subCategories.length === categories[index].subCategories.length;
  };

  const switchSubCategory = (type: string) => {
    const index = selectedCategories.findIndex((c) => c.type === type);
    const subCategories = selectedCategories[index].subCategories;
    if (subCategories.length === categories[index].subCategories.length) {
      setSelectedCategories((prev) => {
        const newSelectedCategories = [...prev];
        newSelectedCategories[index].subCategories = [];
        return newSelectedCategories;
      });
    } else {
      setSelectedCategories((prev) => {
        const newSelectedCategories = [...prev];
        newSelectedCategories[index].subCategories =
          categories[index].subCategories;
        return newSelectedCategories;
      });
    }
  };

  const initSelectedCategories = () => {
    setSelectedCategories(
      categories.map((category) => ({ ...category, subCategories: [] }))
    );
  };

  return {
    selectedCategories,
    onClickCheckFilterButton,
    isSubCategorySelected,
    isAllSubCategoriesSelected,
    switchSubCategory,
    initSelectedCategories,
  };
};
