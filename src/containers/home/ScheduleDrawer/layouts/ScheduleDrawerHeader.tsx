import { Button, Stack, Tooltip, Typography } from "@mui/material";
import ClearIcon from "@mui/icons-material/Clear";
import { useSelector } from "react-redux";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import {
  SCHEDULE_DRAWER,
  SCHEDULE_DRAWER_MODE,
} from "../../../../constants/schedule";
import {
  selectDate,
  selectSchedule,
} from "../../../../app/redux/slices/scheduleSlice";
import { selectGuestMode } from "../../../../app/redux/slices/commonSlice";
import { deleteSelectedSchedule } from "@utils/tools.ts";
import { ScheduleDrawerModeValue } from "../../../../types/schedule";
import { useAppDispatch } from "../../../../app/redux/hooks";
import { selectUser } from "@redux/slices/userSlice.tsx";

interface ScheduleDrawerHeaderProps {
  mode: ScheduleDrawerModeValue;
  handleClose: () => void;
}

function ScheduleDrawerHeader({
  mode,
  handleClose,
}: ScheduleDrawerHeaderProps) {
  const dispatch = useAppDispatch();
  const schedule = useSelector(selectSchedule);
  const guestMode = useSelector(selectGuestMode);
  const user = useSelector(selectUser);
  const date = useSelector(selectDate);

  return (
    <Stack direction="row" alignItems="center" justifyContent="space-between">
      {mode === SCHEDULE_DRAWER_MODE.modify ? (
        <Tooltip
          title={!guestMode && "아직 일반 모드에서는 동작하지 않습니다."}
          placement="top"
        >
          <Button
            onClick={() => {
              if (user) {
                deleteSelectedSchedule(
                  user,
                  date,
                  dispatch,
                  schedule,
                  handleClose
                );
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
