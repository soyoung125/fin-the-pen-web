import { Stack, Typography, Button } from "@mui/material";
import WarningTwoToneIcon from "@mui/icons-material/WarningTwoTone";
import warning_icon from "@assets/icons/warning.svg";

export interface ReportEmptyBoxProps {
  handleClickAddSchedule: () => void;
}

function ReportEmptyBox({ handleClickAddSchedule }: ReportEmptyBoxProps) {
  return (
    <Stack spacing={2} alignItems="center">
      <img src={warning_icon} alt="warning" />
      <Typography fontSize="16px">소비 데이터가 없습니다.</Typography>
      <Button variant="contained" onClick={handleClickAddSchedule}>
        일정 추가하기
      </Button>
    </Stack>
  );
}

export default ReportEmptyBox;
