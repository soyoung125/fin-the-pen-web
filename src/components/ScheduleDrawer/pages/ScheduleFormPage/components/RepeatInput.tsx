import { Box, Stack } from "@mui/material";
import SwitchButton from "@components/common/SwitchButton.tsx";
import { UpdateStateInterface } from "@type/common.tsx";
import { useScheduleForm } from "../../../hooks/useScheduleForm.ts";
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
          checked={repeatType !== "none"}
          handleChange={() =>
            changeRepeat({
              target: {
                value: repeatType === "none" ? "day" : "none",
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
