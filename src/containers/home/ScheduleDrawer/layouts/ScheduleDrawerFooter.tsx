import { Box, Button, Divider, Stack, Tooltip } from "@mui/material";
import { NEED_SIGN_IN } from "../../../../constants/messages";
import { SCHEDULE_DRAWER } from "../../../../constants/schedule";
import { selectGuestMode } from "@redux/slices/commonSlice.tsx";
import {
  selectDate,
  selectSchedule,
  setDrawerSchedule,
} from "@redux/slices/scheduleSlice.tsx";
import { generateRandomSchedule } from "../domain/schedule";
import { Schedule, ScheduleDrawerModeValue } from "@type/schedule.tsx";
import { useAppDispatch, useAppSelector } from "@redux/hooks.ts";
import { useSelector } from "react-redux";
import { selectUser } from "@redux/slices/userSlice.tsx";
import useSchedule from "@hooks/useSchedule.tsx";
import Save from "@assets/icons/save_icon.svg";

/**
 * 각종 로직들 모듈로 이전 예정
 */

interface ScheduleDrawerFooterProps {
  mode: ScheduleDrawerModeValue;
  handleClose: () => void;
  setShowError: React.Dispatch<React.SetStateAction<boolean>>;
}

function ScheduleDrawerFooter({
  mode,
  handleClose,
  setShowError,
}: ScheduleDrawerFooterProps) {
  const date = useAppSelector(selectDate);
  const user = useSelector(selectUser);
  const guestMode = useAppSelector(selectGuestMode);
  const schedule = useAppSelector(selectSchedule) as Schedule;
  const dispatch = useAppDispatch();
  const { handleCreateSchedule, handleModifySchedule } = useSchedule();
  const handleMode = () => {
    switch (mode) {
      case "create":
        handleCreateSchedule(schedule, date);
        handleClose();
        break;
      case "modify":
        handleModifySchedule(schedule);
        handleClose();
        break;
      default:
        alert("잘못 된 요청입니다.");
    }
  };

  const handleSubmit = () => {
    if (
      schedule.event_name === "" ||
      schedule.category === "" ||
      schedule.start_date === "" ||
      schedule.end_date === ""
    ) {
      setShowError(true);
      return;
    }
    setShowError(false);
    handleMode();
  };

  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          color: "#8C919C",
          fontSize: "14px",
          mb: 0.5,
        }}
      >
        <img src={Save} />
        입력 정보는 자동으로 저장됩니다.
      </Box>

      <Divider />

      <Stack direction="row" spacing={1} mx={2.5} mt={1}>
        {mode === "create" && process.env.NODE_ENV === "development" && (
          <Button
            fullWidth
            variant="contained"
            color="warning"
            onClick={() =>
              dispatch(setDrawerSchedule(generateRandomSchedule(date)))
            }
          >
            랜덤 일정 채우기(dev)
          </Button>
        )}
        <Tooltip
          title={!guestMode && "아직 일반 모드에서는 동작하지 않습니다."}
          placement="top"
        >
          <Button
            variant="contained"
            fullWidth
            disabled={user === null}
            onClick={() => handleSubmit()}
          >
            {user === null
              ? NEED_SIGN_IN
              : `${SCHEDULE_DRAWER.add_schedule[mode]}`}
          </Button>
        </Tooltip>
      </Stack>
    </Box>
  );
}

export default ScheduleDrawerFooter;
