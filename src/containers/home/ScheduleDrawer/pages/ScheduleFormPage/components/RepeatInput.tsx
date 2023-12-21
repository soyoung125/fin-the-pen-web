import { Box, Stack } from "@mui/material";
import SwitchButton from "@components/common/SwitchButton";
import { UpdateStateInterface } from "@type/common";
import { useScheduleForm } from "@containers/home/ScheduleDrawer/hooks/useScheduleForm.ts";
import { MouseEventHandler } from "react";

interface RepeatInputProps {
  repeatType: string;
  onClick?: MouseEventHandler<HTMLElement>;
  handleChange?: (value: string) => void;
}

function RepeatInput({ repeatType, onClick, handleChange }: RepeatInputProps) {
  const { updateRepeat } = useScheduleForm();

  const changeRepeat = (state: UpdateStateInterface) => {
    handleChange
      ? handleChange(state.target.value as string)
      : updateRepeat(state);
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
