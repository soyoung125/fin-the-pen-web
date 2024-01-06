import {Stack, Typography} from "@mui/material";
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';

export interface ReportMonthTitleProps {
  year: number;
  month: number;
  onClickMonth: () => void;
}

function ReportMonthTitle({
                            month,
                            year,
                            onClickMonth,
                          }: ReportMonthTitleProps) {
  return (
    <Stack bgcolor="#F7F7F8" borderRadius="12px" p="14px" gap="10px">
      <Stack direction="row" alignItems="center" spacing={1}>
        <Typography fontSize="16px">
          {year}년 {month}월
        </Typography>
        <CalendarTodayIcon sx={{fontSize: 16}} onClick={onClickMonth}/>
      </Stack>
      <Typography fontSize="18px" fontWeight={500}>
        <span style={{color: "#735BF2", fontWeight: 700}}>
          카테고리별 소비 리포트
        </span>{" "}
        입니다.
      </Typography>
    </Stack>
  );
}

export default ReportMonthTitle;
