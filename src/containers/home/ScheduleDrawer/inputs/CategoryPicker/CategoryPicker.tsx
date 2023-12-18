import { SyntheticEvent, useState } from "react";
import { Tab, Tabs } from "@mui/material";
import ExpenditureCategoryPage from "./pages/ExpenditureCategoryPage";
import IncomeCategoryPage from "./pages/IncomeCategoryPage";

function CategoryPicker() {
  const [activeTabIndex, setActiveTabIndex] = useState(0);
  const handleChange = (event: SyntheticEvent, newValue: number) => {
    setActiveTabIndex(newValue);
  };

  const content = (activeTabIndex: number) => {
    switch (activeTabIndex) {
      case 0:
        return <ExpenditureCategoryPage />;
      case 1:
        return <IncomeCategoryPage />;
      default:
        return <div>지출</div>;
    }
  };

  return (
    <>
      <Tabs
        value={activeTabIndex}
        onChange={handleChange}
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
