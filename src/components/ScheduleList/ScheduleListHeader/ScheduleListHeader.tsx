import { Typography, Stack } from "@mui/material";
import ClearRoundedIcon from "@mui/icons-material/ClearRounded";
import SearchIcon from "@mui/icons-material/Search";
import TuneRoundedIcon from "@mui/icons-material/TuneRounded";
import HeaderBox from "./HeaderBox";
import { useNavigate } from "react-router-dom";
import SelectYearMonth from "@components/common/SelectYearMonth";

export interface ScheduleListHeaderProps {
  year: number;
  month: number;
  addMonth: () => void;
  subtractMonth: () => void;
  changeMonth: () => void;
  handleClickSearch: () => void;
  handleClickFilter: () => void;
}

function ScheduleListHeader({
  year,
  month,
  changeMonth,
  subtractMonth,
  addMonth,
  handleClickSearch,
  handleClickFilter,
}: ScheduleListHeaderProps) {
  const navigate = useNavigate();
  return (
    <>
      <HeaderBox>
        <Stack
          direction="row"
          spacing={1}
          justifyContent="space-between"
          alignItems="center"
        >
          <ClearRoundedIcon onClick={() => navigate(-1)} />
          <Typography variant="h4" component="div" sx={{ flexGrow: 1 }}>
            식비 소비 리포트
          </Typography>
          <SearchIcon onClick={handleClickSearch} />
        </Stack>
      </HeaderBox>

      <HeaderBox>
        <Stack
          direction="row"
          spacing={1}
          justifyContent="space-between"
          alignItems="center"
        >
          <SelectYearMonth
            year={year}
            month={month}
            lastMonth={subtractMonth}
            nextMonth={addMonth}
            changeYearAndMonth={changeMonth}
          />
          <TuneRoundedIcon onClick={handleClickFilter} />
        </Stack>
      </HeaderBox>
    </>
  );
}

export default ScheduleListHeader;
