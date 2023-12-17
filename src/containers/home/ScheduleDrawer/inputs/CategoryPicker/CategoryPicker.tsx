import { SyntheticEvent, useState } from "react";
import { Tab, Tabs } from "@mui/material";

function CategoryPicker() {
  const [activeTabIndex, setActiveTabIndex] = useState(0);
  const handleChange = (event: SyntheticEvent, newValue: number) => {
    setActiveTabIndex(newValue);
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
    </>
  );
}

export default CategoryPicker;
