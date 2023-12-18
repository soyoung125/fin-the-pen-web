import { Dispatch, SetStateAction, SyntheticEvent, useState } from "react";
import { Box, Button, Divider, Tab, Tabs } from "@mui/material";
import ExpenditureCategoryPage from "./pages/ExpenditureCategoryPage";
import IncomeCategoryPage from "./pages/IncomeCategoryPage";
import TopNavigationBar from "@components/layouts/common/TopNavigationBar";

export interface CategoryPickerProps {
  setIsCategoryPickerOpen: Dispatch<SetStateAction<boolean>>;
}

function CategoryPicker({ setIsCategoryPickerOpen }: CategoryPickerProps) {
  const [activeTabIndex, setActiveTabIndex] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState<string>("");

  const handleTabChange = (event: SyntheticEvent, newValue: number) => {
    setActiveTabIndex(newValue);
  };

  const content = (activeTabIndex: number) => {
    switch (activeTabIndex) {
      case 0:
        return (
          <ExpenditureCategoryPage
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
          />
        );
      case 1:
        return (
          <IncomeCategoryPage
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
          />
        );
      default:
        return <div>부적절한 인덱스 값이 주어졌습니다.</div>;
    }
  };

  return (
    <>
      <TopNavigationBar
        onClick={() => setIsCategoryPickerOpen(false)}
        title="카테고리 설정"
      />
      <Tabs
        value={activeTabIndex}
        onChange={handleTabChange}
        textColor="primary"
        indicatorColor="primary"
        variant="fullWidth"
      >
        <Tab label="지출" />
        <Tab label="수입" />
      </Tabs>
      <Box height="100vh">{content(activeTabIndex)}</Box>
      <Divider />
      <Box px="20px" pt="8px" pb="28px">
        <Button fullWidth variant="contained">
          {selectedCategory} 카테고리 선택
        </Button>
      </Box>
    </>
  );
}

export default CategoryPicker;
