import { Stack, Typography } from "@mui/material";
import ArrowBackIosRoundedIcon from "@mui/icons-material/ArrowBackIosRounded";
import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";

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
}: SelectYearMonthProps) {
  return (
    <Stack
      direction="row"
      justifyContent="space-between"
      alignItems="center"
      spacing={1}
    >
      <ArrowBackIosRoundedIcon onClick={lastMonth} />
      <Typography
        variant="h2"
        sx={{ textDecoration: "underline", textDecorationThickness: 2 }}
      >{`${year}년 ${month}월`}</Typography>
      <ArrowForwardIosRoundedIcon onClick={nextMonth} />
    </Stack>
  );
}

export default SelectYearMonth;
