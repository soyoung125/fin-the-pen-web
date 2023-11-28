import React, { useState } from "react";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import RoundedButton from "../../../../../../components/common/RoundedButton";
import FilterDrawer from "@containers/home/common/TopBar/buttons/FilterButton/FilterDrawer.tsx";

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
