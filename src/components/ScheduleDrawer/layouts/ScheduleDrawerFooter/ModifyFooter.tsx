import { useAppSelector } from "@redux/hooks.ts";
import { selectScheduleForm } from "@redux/slices/scheduleSlice.tsx";
import { SCHEDULE_DRAWER } from "@constants/schedule.ts";
import useSchedule from "@hooks/useSchedule.ts";
import { Button, Stack } from "@mui/material";
import { RequestSchedule, Schedule } from "@app/types/schedule.ts";
import { useScheduleChangeModal } from "@components/ScheduleDrawer/hooks/ScheduleChangeModal/useScheduleChangeModal.tsx";

interface ModifyFooterInterface {
  handleSubmit: () => boolean;
  handleClose: () => void;
}

function ModifyFooter({ handleSubmit, handleClose }: ModifyFooterInterface) {
  const schedule = useAppSelector(selectScheduleForm);
  const { handleModifySchedule, handleDeleteSchedule } = useSchedule();

  const handleModify = () => {
    if (handleSubmit() && schedule) {
      handleModifySchedule(schedule);
      handleClose();
    }
  };

  const handleDelete = () => {
    if (schedule) {
      handleDeleteSchedule(schedule);
      handleClose();
    }
  };

  return (
    <Stack direction="row" spacing={1} mx={2.5} mt={1}>
      <Button
        fullWidth
        variant="contained"
        color="error"
        onClick={handleDelete}
      >
        {SCHEDULE_DRAWER.delete_schedule}
      </Button>
      <Button variant="contained" fullWidth onClick={handleModify}>
        {SCHEDULE_DRAWER.modify_schedule}
      </Button>
    </Stack>
  );
}

export default ModifyFooter;
