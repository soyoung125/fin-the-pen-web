import { Stack, Typography } from "@mui/material";
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";

export interface ReportMonthTitleProps {
  year: number;
  month: number;
  onClickLeftIcon: () => void;
  onClickMonth: () => void;
  onClickRightIcon: () => void;
}

function ReportMonthTitle({
  month,
  year,
  onClickMonth,
  onClickRightIcon,
  onClickLeftIcon,
}: ReportMonthTitleProps) {
  return (
    <Stack bgcolor="#F7F7F8" borderRadius="12px" p="14px" gap="10px">
      <Stack direction="row" alignItems="center">
        <ArrowLeftIcon onClick={onClickLeftIcon} />
        <Typography fontSize="16px" onClick={onClickMonth}>
          {year}년 {month}월
        </Typography>
        <ArrowRightIcon onClick={onClickRightIcon} />
      </Stack>
      <Typography fontSize="18px" fontWeight={500}>
        <span style={{ color: "#735BF2", fontWeight: 700 }}>
          카테고리별 소비 리포트
        </span>{" "}
        입니다.
      </Typography>
    </Stack>
  );
}

export default ReportMonthTitle;
