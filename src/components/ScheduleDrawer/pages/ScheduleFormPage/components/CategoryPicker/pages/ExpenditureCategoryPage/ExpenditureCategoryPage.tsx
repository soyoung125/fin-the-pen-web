import { Dispatch, SetStateAction, useState } from "react";
import { Box, Stack } from "@mui/material";
import { EXPENDITURE_CATEGORY } from "../../constants.ts";
import CategorySideTabButton from "../../components/CategorySideTabButton.tsx";
import CategoryButton from "../../components/CategoryButton.tsx";

export interface ExpenditureCategoryPageProps {
  selectedCategory: string;
  setSelectedCategory: Dispatch<SetStateAction<string>>;
}

function ExpenditureCategoryPage({
  selectedCategory,
  setSelectedCategory,
}: ExpenditureCategoryPageProps) {
  const [activeTabIndex, setActiveTabIndex] = useState(0);
  return (
    <Stack direction="row">
      <Box sx={{ width: "35%" }}>
        {EXPENDITURE_CATEGORY.map((category, index) => (
          <CategorySideTabButton
            key={category.name}
            tab={category.name}
            categoryCount={category.subCategory.length}
            isSelected={index === activeTabIndex}
            onClick={() => setActiveTabIndex(index)}
          />
        ))}
      </Box>
      <Box sx={{ width: "65%" }}>
        {EXPENDITURE_CATEGORY[activeTabIndex].subCategory.map((category) => (
          <CategoryButton
            key={category}
            selected={selectedCategory === category}
            category={category}
            onClick={() => setSelectedCategory(category)}
          />
        ))}
      </Box>
    </Stack>
  );
}

export default ExpenditureCategoryPage;
