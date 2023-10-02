import {
  Alert,
  Box,
  Button,
  Chip,
  Drawer,
  Paper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import FilterAltIcon from '@mui/icons-material/FilterAlt';
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
} from "../../../../../../app/redux/slices/scheduleSlice";
import { WRONG_TIME_ORDER } from "../../../../../../constants/schedule";
import { isTimeOrderCorrect } from "@utils/tools.ts";
import RoundedButton from "../../../../../../components/common/RoundedButton";
import { EXPENDITURE, FIXED } from "../../../../../../constants/categories";
import AlertModal from "../../../../../../components/common/AlertModal";
import { useAppDispatch } from "../../../../../../app/redux/hooks";
import useModal from "../../../../../../hooks/useModal";
import ResetButton from "@components/common/ResetButton";

function FilterButton() {
  const dispatch = useAppDispatch();
  const filtered = useSelector(selectFiltered);
  const filteredDate = useSelector(selectFilteredDate);
  const [oldFiltered, setOldFiltered] = useState([...filtered]);
  const [oldFilteredDate, setOldFilteredDate] = useState({ ...filteredDate });
  const [error, setError] = useState(false);
  const [bottomDrawerOpen, setBottomDrawerOpen] = useState(false);
  const [alertMode, setAlertMode] = useState<
    "reset" | "saveFilter" | "confirmCloseFilter"
  >("reset");
  const {
    modalOpen: alertModalOpen,
    openModal: openAlertModal,
    closeModal: closeAlertModal,
  } = useModal();
  const FIXEDEXPENDITURE = {
    ...FIXED,
    nested: FIXED.nested.filter((c) => c.type === "출금"),
  };

  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    const target = event.target as HTMLDivElement;
    dispatch(updateFilter(target.innerText));
  };

  const handleDelete = (cat: string) => {
    dispatch(updateFilter(cat));
  };

  const changeAlertMode = (mode: "reset" | "saveFilter") => {
    setAlertMode(mode);
    openAlertModal();
  };

  const handleClickOk = () => {
    if (
      isSame(filtered, oldFiltered) &&
      isSame(filteredDate, oldFilteredDate)
    ) {
      setBottomDrawerOpen(false);
    } else {
      setAlertMode("confirmCloseFilter");
      openAlertModal();
    }
  };

  const handleClickYes = () => {
    closeAlertModal();
    switch (alertMode) {
      case "reset":
        dispatch(initFilter());
        break;
      case "saveFilter":
        saveFilter();
        break;
      case "confirmCloseFilter":
        //필터 데이터 되돌리기
        dispatch(
          revertFilter({
            filtered: oldFiltered,
            filtered_date: oldFilteredDate,
          })
        );
        setBottomDrawerOpen(false);
        break;
    }
  };

  const saveFilter = () => {
    dispatch(updateAnalyzedData());
    setOldFiltered([...filtered]);
    setOldFilteredDate({ ...filteredDate });
    setBottomDrawerOpen(false);
  };

  const changeSchedule = (event: React.ChangeEvent<HTMLInputElement>) => {
    const date = event.target.value;
    if (
      event.target.id === "end" &&
      moment(date).isBefore(filteredDate.start)
    ) {
      alert(WRONG_TIME_ORDER);
    } else {
      dispatch(
        setFilteredDate({
          type: event.target.id,
          date: event.target.value,
        })
      );
    }
  };

  const isSame = (
    data1: string[] | { [key: string]: string },
    data2: string[] | { [key: string]: string }
  ) => {
    return JSON.stringify(data1) === JSON.stringify(data2);
  };

  useEffect(() => {
    if (isTimeOrderCorrect(filteredDate.start, filteredDate.end)) {
      setError(false);
    } else {
      setError(true);
    }
  }, [filteredDate]);

  return (
    <>
      <RoundedButton value="user" onClick={() => setBottomDrawerOpen(true)}>
        <FilterAltIcon />
      </RoundedButton>
      <Drawer
        open={bottomDrawerOpen}
        anchor="top"
        onClose={() => setBottomDrawerOpen(false)}
      >
        <Stack justifyContent="space-between" spacing={2} m={1} pt={5} pb={2}>
          <Stack
            direction="row"
            alignItems="center"
            justifyContent="space-between"
          >
            <ResetButton handleClick={() => changeAlertMode("reset")} />
            <Typography variant="h5" sx={{ fontWeight: "bold" }}>
              필터 설정
            </Typography>
            <Button
              variant="text"
              color="primary"
              onClick={() => handleClickOk()}
            >
              확인
            </Button>
          </Stack>
          {filtered.length > 0 && (
            <Paper>
              <Box p={2}>
                <Box mb={2}>
                  <Alert severity="error">
                    아래 태그들은 앱에서 표시되지 않습니다.
                  </Alert>
                </Box>
                <Stack direction="row" sx={{ overflowX: "scroll" }}>
                  {filtered.map((cat: string) => (
                    <Chip
                      label={cat}
                      key={cat}
                      sx={{ mb: 1, mr: 1 }}
                      onClick={handleClick}
                      onDelete={() => handleDelete(cat)}
                    />
                  ))}
                </Stack>
              </Box>
            </Paper>
          )}
          <Stack>
            {[FIXEDEXPENDITURE, EXPENDITURE].map((obj) => (
              <FilterAccordion tag={obj} key={obj.type} />
            ))}
          </Stack>
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            spacing={2}
            sx={{ width: "100%" }}
          >
            <TextField
              id="start"
              label="시작일"
              type="date"
              fullWidth
              InputLabelProps={{
                shrink: true,
              }}
              value={filteredDate.start}
              onChange={changeSchedule}
              size="small"
            />
            <Typography>~</Typography>
            <TextField
              id="end"
              label="종료일"
              type="date"
              fullWidth
              InputLabelProps={{
                shrink: true,
              }}
              value={filteredDate.end}
              onChange={changeSchedule}
              size="small"
            />
          </Stack>
          {error && (
            <Stack justifyContent="center">
              <Alert color="error">{WRONG_TIME_ORDER}</Alert>
            </Stack>
          )}
          <Button
            variant="contained"
            color="primary"
            onClick={() => changeAlertMode("saveFilter")}
          >
            저장
          </Button>
        </Stack>
      </Drawer>

      <AlertModal
        open={alertModalOpen}
        handleClose={closeAlertModal}
        handleClickYes={handleClickYes}
        mode={alertMode}
      />
    </>
  );
}
export default FilterButton;
