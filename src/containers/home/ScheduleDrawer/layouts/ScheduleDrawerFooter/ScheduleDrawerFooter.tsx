import { Box, Divider, Stack } from "@mui/material";
import { selectSchedule } from "@redux/slices/scheduleSlice.tsx";
import { Schedule } from "@type/schedule.tsx";
import { useAppSelector } from "@redux/hooks.ts";
import Save from "@assets/icons/save_icon.svg";
import ModifyFooter from "./ModifyFooter";
import CreateFooter from "./CreateFooter";

interface ScheduleDrawerFooterProps {
  handleClose: () => void;
  setShowError: React.Dispatch<React.SetStateAction<boolean>>;
}

function ScheduleDrawerFooter({
  handleClose,
  setShowError,
}: ScheduleDrawerFooterProps) {
  const schedule = useAppSelector(selectSchedule) as Schedule;

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
        <img src={Save} />
        입력 정보는 자동으로 저장됩니다.
      </Box>

      <Divider />

      {schedule && schedule.id ? (
        <ModifyFooter handleSubmit={handleSubmit} handleClose={handleClose} />
      ) : (
        <CreateFooter handleSubmit={handleSubmit} handleClose={handleClose} />
      )}
    </Box>
  );
}

export default ScheduleDrawerFooter;
