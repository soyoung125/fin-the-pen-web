import { Box, Divider } from "@mui/material";
import { selectScheduleForm } from "@redux/slices/scheduleSlice.tsx";
import { RequestSchedule, Schedule } from "@app/types/schedule.ts";
import { useAppSelector } from "@redux/hooks.ts";
import Save from "@assets/icons/save_icon.svg";
import ModifyFooter from "./ModifyFooter.tsx";
import CreateFooter from "./CreateFooter.tsx";

interface ScheduleDrawerFooterProps {
  handleClose: () => void;
  setShowError: React.Dispatch<React.SetStateAction<boolean>>;
}

function ScheduleDrawerFooter({
  handleClose,
  setShowError,
}: ScheduleDrawerFooterProps) {
  const schedule = useAppSelector(selectScheduleForm) as RequestSchedule;

  const handleSubmit = () => {
    if (
      schedule.event_name === "" ||
      schedule.category === "" ||
      schedule.start_date === "" ||
      schedule.end_date === ""
    ) {
      setShowError(true);
      return false;
    }
    setShowError(false);
    return true;
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
        <img src={Save} alt="save" />
        입력 정보는 자동으로 저장됩니다.
      </Box>

      <Divider />

      {schedule && schedule.schedule_id ? (
        <ModifyFooter handleSubmit={handleSubmit} handleClose={handleClose} />
      ) : (
        <CreateFooter handleSubmit={handleSubmit} handleClose={handleClose} />
      )}
    </Box>
  );
}

export default ScheduleDrawerFooter;
