import { Stack, Typography } from "@mui/material";
import SwitchButton from "@components/common/SwitchButton.tsx";

export interface ScheduleHeaderProps {
  show: boolean;
  handleChange: () => void;
  isToday: boolean;
}

function ScheduleHeader({ show, handleChange, isToday }: ScheduleHeaderProps) {
  return (
    <Stack direction="row" alignItems="center" spacing={1} py={2} px={2.5}>
      <Typography variant="h2">{`${
        isToday ? "오늘" : "선택"
      } 일정`}</Typography>
      <Typography
        variant="subtitle2"
        component="div"
        sx={{ flexGrow: 1, textAlign: "right" }}
      >
        {show ? `숨기기` : `보이기`}
      </Typography>
      <SwitchButton checked={show} handleChange={handleChange} />
    </Stack>
  );
}

export default ScheduleHeader;
