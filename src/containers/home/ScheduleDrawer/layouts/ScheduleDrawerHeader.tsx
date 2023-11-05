import { Button, Stack, Tooltip, Typography } from "@mui/material";
import ClearIcon from "@mui/icons-material/Clear";
import { useSelector } from "react-redux";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import {
  SCHEDULE_DRAWER,
  SCHEDULE_DRAWER_MODE,
} from "../../../../constants/schedule";
import { selectSchedule } from "../../../../app/redux/slices/scheduleSlice";
import { selectGuestMode } from "../../../../app/redux/slices/commonSlice";
import { ScheduleDrawerModeValue } from "../../../../types/schedule";
import useSchedule from "@hooks/useSchedule.tsx";

interface ScheduleDrawerHeaderProps {
  mode: ScheduleDrawerModeValue;
  handleClose: () => void;
}

function ScheduleDrawerHeader({
  mode,
  handleClose,
}: ScheduleDrawerHeaderProps) {
  const schedule = useSelector(selectSchedule);
  const guestMode = useSelector(selectGuestMode);
  const { deleteSelectedSchedule } = useSchedule();

  return (
    <Stack direction="row" alignItems="center" justifyContent="space-between">
      {mode === SCHEDULE_DRAWER_MODE.modify ? (
        <Tooltip
          title={!guestMode && "아직 일반 모드에서는 동작하지 않습니다."}
          placement="top"
        >
          <Button
            onClick={() => {
              if (schedule) {
                deleteSelectedSchedule(schedule.id as string);
                handleClose();
              }
            }}
            color="error"
          >
            <DeleteForeverIcon />
          </Button>
        </Tooltip>
      ) : (
        <Button disabled />
      )}

      <Typography variant="h5" sx={{ fontWeight: "bold" }}>
        {SCHEDULE_DRAWER.drawer_title[mode]}
      </Typography>
      <Button onClick={handleClose}>
        <ClearIcon />
      </Button>
    </Stack>
  );
}

export default ScheduleDrawerHeader;
