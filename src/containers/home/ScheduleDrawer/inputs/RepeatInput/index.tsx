import { Box, Collapse, Stack, Input } from "@mui/material";
import FormControlLabel from "@mui/material/FormControlLabel";
import { useState } from "react";
import { useSelector } from "react-redux";
import SwitchButton from "@components/common/SwitchButton";
import { useAppDispatch } from "@app/redux/hooks";
import { selectSchedule } from "@app/redux/slices/scheduleSlice";
import { updateRepeat } from "../../domain/schedule";
import RepeatRadioGroup from "./RepeatRadioGroup";
import RadioButton from "@components/common/RadioButton";

function RepeatInput() {
  const dispatch = useAppDispatch();
  const schedule = useSelector(selectSchedule);

  const [openDatePickerModal, setOpenDatePickerModal] = useState(false);

  const changeRepeat = (state: { target: { value: string; name: string } }) => {
    updateRepeat(dispatch, schedule, setOpenDatePickerModal, state);
  };

  return (
    <>
      <Stack direction="row" justifyContent="space-between" sx={{ px: 2.5 }}>
        <Box sx={{ color: "primary.main" }}>반복</Box>
        <SwitchButton
          checked={schedule?.repeat !== "None"}
          handleChange={() =>
            changeRepeat({
              target: {
                value: schedule?.repeat === "None" ? "AllDay" : "None",
                name: "repeat",
              },
            })
          }
        />
      </Stack>
      <Collapse in={schedule?.repeat !== "None"}>
        <RepeatRadioGroup type="repeat" handleChange={changeRepeat}>
          <>
            <FormControlLabel
              control={<RadioButton value="AllDay" />}
              label={
                schedule?.repeat === "AllDay" ? (
                  <>
                    <Input
                      defaultValue={1}
                      type="number"
                      inputProps={{
                        min: 1,
                        max: 365,
                      }}
                      sx={{ width: "30px" }}
                    />
                    일 마다
                  </>
                ) : (
                  <>매일</>
                )
              }
            />
            <FormControlLabel
              control={<RadioButton value="Week" />}
              label={
                schedule?.repeat === "Week" ? (
                  <>
                    <Input
                      defaultValue={1}
                      type="number"
                      inputProps={{
                        min: 1,
                        max: 365,
                      }}
                      sx={{ width: "30px" }}
                    />
                    주 마다
                  </>
                ) : (
                  <>매주</>
                )
              }
            />
            <FormControlLabel
              control={<RadioButton value="Month" />}
              label={
                schedule?.repeat === "Month" ? (
                  <>
                    <Input
                      defaultValue={1}
                      type="number"
                      inputProps={{
                        min: 1,
                        max: 365,
                      }}
                      sx={{ width: "30px" }}
                    />
                    개월 마다
                  </>
                ) : (
                  <>매월</>
                )
              }
            />

            <FormControlLabel
              control={<RadioButton value="Year" />}
              label={
                schedule?.repeat === "Year" ? (
                  <>
                    <Input
                      defaultValue={1}
                      type="number"
                      inputProps={{
                        min: 1,
                        max: 365,
                      }}
                      sx={{ width: "30px" }}
                    />
                    년 마다
                  </>
                ) : (
                  <>매년</>
                )
              }
            />
          </>
        </RepeatRadioGroup>

        <Box sx={{ color: "primary.main" }}>기간</Box>
        <RepeatRadioGroup type="period" handleChange={changeRepeat}>
          <>
            <FormControlLabel
              control={<RadioButton value="All" />}
              label="계속 반복"
            />
            <FormControlLabel
              control={<RadioButton value="numberOf" />}
              label="일정 반복 횟수"
            />
            <FormControlLabel
              control={<RadioButton value="end" />}
              label="종료 날짜"
            />
          </>
        </RepeatRadioGroup>
      </Collapse>
    </>
  );
}

export default RepeatInput;
