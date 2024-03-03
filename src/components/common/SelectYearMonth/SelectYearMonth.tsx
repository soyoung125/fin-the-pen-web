import { Stack, Typography } from "@mui/material";
import ArrowBackIosRoundedIcon from "@mui/icons-material/ArrowBackIosRounded";
import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";
import ExpandMoreRoundedIcon from "@mui/icons-material/ExpandMoreRounded";

export interface SelectYearMonthProps {
  year: number;
  month: number;
  lastMonth: () => void;
  nextMonth: () => void;
  changeYearAndMonth?: () => void;
}

function SelectYearMonth({
  year,
  month,
  lastMonth,
  nextMonth,
  changeYearAndMonth,
}: SelectYearMonthProps) {
  return (
    <Stack
      direction="row"
      justifyContent="space-between"
      alignItems="center"
      spacing={2}
    >
      <ArrowBackIosRoundedIcon onClick={lastMonth} fontSize={"small"} />
      <Stack direction="row" alignItems="center" onClick={changeYearAndMonth}>
        <Typography variant="h4">{`${year}년 ${month}월`}</Typography>
        <ExpandMoreRoundedIcon />
      </Stack>
      <ArrowForwardIosRoundedIcon onClick={nextMonth} fontSize={"small"} />
    </Stack>
  );
}

export default SelectYearMonth;
