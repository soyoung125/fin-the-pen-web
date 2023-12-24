import React, { useState } from "react";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import RoundedButton from "../../../../../common/RoundedButton.tsx";
import FilterDrawer from "@components/layouts/common/TopBar/buttons/FilterButton/FilterDrawer.tsx";

function FilterButton() {
  const [bottomDrawerOpen, setBottomDrawerOpen] = useState(false);

  return (
    <>
      <RoundedButton value="user" onClick={() => setBottomDrawerOpen(true)}>
        <FilterAltIcon />
      </RoundedButton>
      <FilterDrawer
        bottomDrawerOpen={bottomDrawerOpen}
        setBottomDrawerOpen={setBottomDrawerOpen}
      />
    </>
  );
}

export default FilterButton;
