import { Typography, Stack, Box } from "@mui/material";
import ClearRoundedIcon from "@mui/icons-material/ClearRounded";
import SearchIcon from "@mui/icons-material/Search";
import TuneRoundedIcon from "@mui/icons-material/TuneRounded";
import { useNavigate } from "react-router-dom";
import SelectYearMonth from "@components/common/SelectYearMonth";
import { HeaderBox } from "./ScheduleListPageHeader.styles.ts";

export interface ScheduleListPageHeaderProps {
  date: string;
  title?: string;
  addMonth: () => void;
  subtractMonth: () => void;
  changeMonth: () => void;
  handleClickSearch: () => void;
  handleClickFilter: () => void;
}

function ScheduleListPageHeader({
  date,
  title,
  changeMonth,
  subtractMonth,
  addMonth,
  handleClickSearch,
  handleClickFilter,
}: ScheduleListPageHeaderProps) {
  const navigate = useNavigate();
  return (
    <Box bgcolor="#735bf2" sx={{ position: "sticky", top: 0, zIndex: 1000 }}>
      <HeaderBox>
        <Stack
          direction="row"
          spacing={1}
          justifyContent="space-between"
          alignItems="center"
        >
          <ClearRoundedIcon onClick={() => navigate(-1)} />
          <Typography variant="h4" component="div" sx={{ flexGrow: 1 }}>
            {title}
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
          sx={{ color: "#FFF" }}
        >
          <SelectYearMonth
            date={date}
            lastMonth={subtractMonth}
            nextMonth={addMonth}
            changeYearAndMonth={changeMonth}
          />
          <TuneRoundedIcon onClick={handleClickFilter} />
          {/*<FilterButton />*/}
        </Stack>
      </HeaderBox>
    </Box>
  );
}

export default ScheduleListPageHeader;
