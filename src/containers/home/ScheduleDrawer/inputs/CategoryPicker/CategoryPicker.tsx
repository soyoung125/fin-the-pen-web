import { SyntheticEvent, useState } from "react";
import { Tab, Tabs } from "@mui/material";
import ExpenditureCategoryPage from "./pages/ExpenditureCategoryPage";
import IncomeCategoryPage from "./pages/IncomeCategoryPage";

function CategoryPicker() {
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
      {content(activeTabIndex)}
    </>
  );
}

export default CategoryPicker;
