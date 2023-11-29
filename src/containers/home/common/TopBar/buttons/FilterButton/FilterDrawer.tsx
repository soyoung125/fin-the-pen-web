import {
  Alert,
  Box,
  Button,
  Chip,
  Divider,
  Drawer,
  Paper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import moment from "moment";
import FilterAccordion from "./inputs/FilterAccordion";
import {
  initFilter,
  revertFilter,
  selectFiltered,
  selectFilteredDate,
  setFilteredDate,
  updateAnalyzedData,
  updateFilter,
} from "@redux/slices/scheduleSlice.tsx";
import { WRONG_TIME_ORDER } from "../../../../../../constants/schedule";
import { isTimeOrderCorrect } from "@utils/tools.ts";
import { EXPENDITURE, FIXED } from "../../../../../../constants/categories";
import AlertModal from "../../../../../../components/common/AlertModal";
import { useAppDispatch } from "@redux/hooks.ts";
import useModal from "../../../../../../hooks/useModal";
import ResetButton from "@components/common/ResetButton";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import RoundedButton from "@components/common/RoundedButton.tsx";
import DialogContext from "@components/layouts/dialog/DialogContext.tsx";
import FilterHeader from "@containers/home/common/TopBar/buttons/FilterButton/FilterHeader.tsx";

interface FilterDrawerProps {
  bottomDrawerOpen: boolean;
  setBottomDrawerOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

function FilterDrawer({
  bottomDrawerOpen,
  setBottomDrawerOpen,
}: FilterDrawerProps) {
  const { dialog } = useContext(DialogContext);

  const foo = async () => {
    const answer = await dialog({
      title: "알림",
      content: "저장하시겠습니까?",
    });

    console.log(answer);
  };

  return (
    <>
      <Drawer
        open={bottomDrawerOpen}
        anchor="bottom"
        onClose={() => setBottomDrawerOpen(false)}
      >
        <Stack gap={1} direction="row" px="20px" py="12px" alignItems="center">
          <RoundedButton
            value="arrow-back-ios-icon"
            onClick={() => setBottomDrawerOpen(false)}
          >
            <ArrowBackIosIcon />
          </RoundedButton>

          <Typography variant="h4">카테고리 필터 설정</Typography>
        </Stack>

        <Divider />
        <FilterHeader
          title="날짜"
          isCheckAll={true}
          onClickCheckAll={() => {}}
        />
        <div>날짜 선택기</div>

        <Stack justifyContent="space-between" spacing={2} m={1} pt={5} pb={2}>
          <Button variant="contained" color="primary" onClick={() => foo()}>
            저장
          </Button>
        </Stack>
      </Drawer>
    </>
  );
}
export default FilterDrawer;
