import React, { useState } from "react";
import RoundedButton from "../../../../../common/RoundedButton.tsx";
import FilterDrawer from "@components/layouts/common/TopBar/buttons/FilterButton/FilterDrawer.tsx";
import TuneRoundedIcon from "@mui/icons-material/TuneRounded";

function FilterButton() {
  const [bottomDrawerOpen, setBottomDrawerOpen] = useState(false);

  return (
    <>
      <RoundedButton value="user" onClick={() => setBottomDrawerOpen(true)}>
        <TuneRoundedIcon />
      </RoundedButton>
      <FilterDrawer
        bottomDrawerOpen={bottomDrawerOpen}
        setBottomDrawerOpen={setBottomDrawerOpen}
      />
    </>
  );
}

export default FilterButton;
