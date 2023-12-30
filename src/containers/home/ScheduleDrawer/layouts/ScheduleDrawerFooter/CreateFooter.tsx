import { useAppSelector } from "@app/redux/hooks";
import { selectDate, selectSchedule } from "@app/redux/slices/scheduleSlice";
import { SCHEDULE_DRAWER } from "@constants/schedule";
import useSchedule from "@hooks/useSchedule";
import { Button, Stack, Tooltip } from "@mui/material";
import { Schedule } from "@type/schedule";
import { useScheduleForm } from "../../hooks/useScheduleForm";
import { selectGuestMode } from "@app/redux/slices/commonSlice";
import { useUser } from "@app/tanstack-query/useUser";
import { NEED_SIGN_IN } from "@constants/messages";

interface CreateFooterInterface {
  handleSubmit: () => boolean;
  handleClose: () => void;
}

function CreateFooter({ handleSubmit, handleClose }: CreateFooterInterface) {
  const date = useAppSelector(selectDate);
  const schedule = useAppSelector(selectSchedule) as Schedule;
  const guestMode = useAppSelector(selectGuestMode);
  const { data: user } = useUser();
  const { handleCreateSchedule } = useSchedule();
  const { setRandomGeneratedSchedule } = useScheduleForm();

  const handleCreate = () => {
    if (handleSubmit()) {
      handleCreateSchedule(schedule, date);
      handleClose();
    }
  };

  return (
    <Stack direction="row" spacing={1} mx={2.5} mt={1}>
      {process.env.NODE_ENV === "development" && (
        <Button
          fullWidth
          variant="contained"
          color="warning"
          onClick={() => setRandomGeneratedSchedule(date)}
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
          disabled={user === undefined}
          onClick={handleCreate}
        >
          {user === undefined
            ? NEED_SIGN_IN
            : `${SCHEDULE_DRAWER.add_schedule}`}
        </Button>
      </Tooltip>
    </Stack>
  );
}

export default CreateFooter;
