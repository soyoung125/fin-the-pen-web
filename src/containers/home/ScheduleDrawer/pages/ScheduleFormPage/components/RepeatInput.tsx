import { Box, Collapse, Stack } from "@mui/material";
import { useSelector } from "react-redux";
import SwitchButton from "@components/common/SwitchButton";
import { selectRepeatType } from "@app/redux/slices/scheduleSlice";
import { UpdateStateInterface } from "@type/common";
import { useScheduleForm } from "@containers/home/ScheduleDrawer/hooks/useScheduleForm.ts";
import { MouseEventHandler } from "react";

interface RepeatInputProps {
  onClick?: MouseEventHandler<HTMLElement>;
}

function RepeatInput({ onClick }: RepeatInputProps) {
  const repeatType = useSelector(selectRepeatType);
  const { updateRepeat } = useScheduleForm();

  const changeRepeat = (state: UpdateStateInterface) => {
    updateRepeat(state);
  };

  return (
    <Box>
      <Stack direction="row" justifyContent="space-between" sx={{ px: 2.5 }}>
        <Box sx={{ color: "primary.main", flexGrow: 1 }} onClick={onClick}>
          반복
        </Box>
        <SwitchButton
          checked={repeatType !== ""}
          handleChange={() =>
            changeRepeat({
              target: {
                value: repeatType === "" ? "day" : "",
                id: "repeat",
              },
            })
          }
        />
      </Stack>
    </Box>
  );
}

export default RepeatInput;
