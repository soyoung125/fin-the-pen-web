import { Box, Button, Stack, Tooltip } from "@mui/material";
import { NEED_SIGN_IN, NOT_AVAILABLE } from "../../../../constants/messages";
import { NEED_TITLE, SCHEDULE_DRAWER, VIEW_MODE } from "../../../../constants/schedule";
import { selectGuestMode } from "../../../../app/redux/slices/commonSlice";
import {
  modifySchedule,
  selectDate,
  selectSchedule,
  setDrawerSchedule,
} from "../../../../app/redux/slices/scheduleSlice";
import { generateRandomSchedule, handleCreate } from "../domain/schedule";
import { Schedule, ScheduleDrawerModeValue } from "../../../../types/schedule";
import { useAppDispatch, useAppSelector } from "../../../../app/redux/hooks";
import { useRecoilValue } from "recoil";
import { User } from "@type/auth.tsx";
import { useSelector } from "react-redux";
import { selectUser } from "@redux/slices/userSlice.tsx";
import { grey } from "@mui/material/colors";

/**
 * 각종 로직들 모듈로 이전 예정
 */

interface ScheduleDrawerFooterProps {
  mode: ScheduleDrawerModeValue;
  viewMode: string;
  changeViewMode: (mode: string) => void;
  handleClose: () => void;
}

function ScheduleDrawerFooter({
  mode,
  viewMode,
  changeViewMode,
  handleClose,
}: ScheduleDrawerFooterProps) {
  const date = useAppSelector(selectDate);
  const user = useSelector(selectUser);
  const guestMode = useAppSelector(selectGuestMode);
  const schedule = useAppSelector(selectSchedule) as Schedule;
  const dispatch = useAppDispatch();

  const handleModify = async () => {
    /**
     * 함수 완성되면 그 때 외부 모듈로 분리하겠습니다.
     */
    if (guestMode) {
      dispatch(modifySchedule(schedule));
      handleClose();
    } else {
      alert(NOT_AVAILABLE);
    }
  };

  const handleMode = () => {
    switch (mode) {
      case "create":
        // TODO: as 제거 예정
        handleCreate(
          dispatch,
          schedule,
          user as User,
          guestMode,
          date,
          handleClose
        );
        break;
      case "modify":
        handleModify();
        break;
      default:
        alert("잘못 된 요청입니다.");
    }
  };

  const handleSubmit = () => {
    if (schedule.event_name.length === 0) {
      alert(NEED_TITLE);
      return;
    }
    handleMode();
  };

  return (
    <Stack spacing={3}>
      <Box
        sx={{
          borderRadius: "8px",
          backgroundColor: grey[200],
          marginX: "auto",
        }}
      >
        <Button
          sx={{ borderRadius: "8px" }}
          variant={viewMode === "schedule" ? "contained" : "text"}
          onClick={() => changeViewMode(VIEW_MODE.schedule)}
        >
          일정
        </Button>
        <Button
          sx={{ borderRadius: "8px" }}
          variant={viewMode === VIEW_MODE.asset ? "contained" : "text"}
          onClick={() => {
            changeViewMode(VIEW_MODE.asset);
          }}
        >
          자산
        </Button>
      </Box>
      <Stack direction="row" spacing={1}>
        {mode === "create" && (
          <Button
            fullWidth
            variant="contained"
            color="warning"
            onClick={() => dispatch(setDrawerSchedule(generateRandomSchedule(date)))}
          >
            랜덤 데이터 채우기
          </Button>
        )}
        <Tooltip
          title={!guestMode && "아직 일반 모드에서는 동작하지 않습니다."}
          placement="top"
        >
          <Button
            variant="contained"
            fullWidth
            disabled={user === undefined}
            onClick={() => handleSubmit()}
          >
            {user === null
              ? NEED_SIGN_IN
              : `${SCHEDULE_DRAWER.add_schedule[mode]}`}
          </Button>
        </Tooltip>
      </Stack>
    </Stack>
  );
}

export default ScheduleDrawerFooter;
