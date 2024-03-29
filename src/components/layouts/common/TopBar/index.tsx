import { Box, Stack } from "@mui/material";
import { useEffect } from "react";
import {
  selectHeaderMode,
  selectHeaderOpen,
  setGuestModeFalse,
  setGuestModeTrue,
} from "@redux/slices/commonSlice.tsx";
import AnalysisMode from "./headerMode/AnalysisMode.tsx";
import HomeMode from "./headerMode/HomeMode.tsx";
import { useAppDispatch, useAppSelector } from "@redux/hooks.ts";
import { selectSavingPopUpSetting } from "@redux/slices/assetSlice.tsx";
import PopupButton from "./buttons/PopupButton.tsx";
import { useNavigate } from "react-router-dom";
import { PATH } from "@constants/path.ts";
import SettingsMode from "./headerMode/SettingsMode.tsx";
import SignMode from "./headerMode/SignMode.tsx";
import SearchMode from "./headerMode/SearchMode.tsx";
import AssetMode from "./headerMode/AssetMode.tsx";
import { useUser } from "@app/tanstack-query/useUser.ts";

function TopBar() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { data: user } = useUser();
  const isHeaderOpen = useAppSelector(selectHeaderOpen);
  const headerMode = useAppSelector(selectHeaderMode);
  const popupSetting = useAppSelector(selectSavingPopUpSetting);

  useEffect(() => {
    if (user?.name === "guest by msw") {
      console.warn(
        "게스트 모드로 동작합니다. 게스트 모드에서는 데이터가 저장되지 않습니다."
      );
      dispatch(setGuestModeTrue());
    } else {
      dispatch(setGuestModeFalse());
    }
  }, [user]);

  const handleClickPopup = () => {
    if (popupSetting.settings.connect === "적금 계좌 APP") {
      console.log("계좌 열기");
    } else {
      navigate(PATH.savingsGoal);
    }
  };

  return (
    isHeaderOpen && (
      <>
        <Box
          sx={{
            position: "sticky",
            top: 0,
            backgroundColor: "#FFF",
            zIndex: 1000,
          }}
        >
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            sx={{ paddingX: "20px", height: 40 }}
          >
            {headerMode === "home" && <HomeMode />}
            {headerMode === "analysis" && <AnalysisMode />}
            {headerMode === "settings" && <SettingsMode />}
            {headerMode === "sign" && <SignMode />}
            {headerMode === "search" && <SearchMode />}
            {headerMode === "assetManagement" && <AssetMode />}
          </Stack>
          {popupSetting.isOn && (
            <PopupButton handleClickPopup={handleClickPopup} />
          )}
        </Box>
      </>
    )
  );
}

export default TopBar;
/**
 * 상단 바
 */
