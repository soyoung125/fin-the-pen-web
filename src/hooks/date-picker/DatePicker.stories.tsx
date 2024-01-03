import { Meta } from "@storybook/react";
import { useDatePicker } from "./hooks/useDatePicker.tsx";
import { useState } from "react";
import { Button, Typography } from "@mui/material";

export const Example = () => {
  const { openMonthPicker, openDayPicker, openTimePicker } = useDatePicker();
  const [value, setValue] = useState("버튼을 눌러 업데이트 해주세요");
  const handleMonthPicker = async () => {
    const newDate = await openMonthPicker("2021-10");
    if (!newDate) return;
    setValue(newDate.format("YYYY-MM"));
  };

  const handleDayPicker = async () => {
    const newDate = await openDayPicker();
    if (!newDate) return;
    setValue(newDate);
  };

  const handleTimePicker = async () => {
    const newDate = await openTimePicker({ defaultTime: "12:00" });
    if (!newDate) return;
    setValue(newDate);
  };

  return (
    <>
      <Typography>useDatePicker에 의해서 선택된 값 : {value}</Typography>
      <Button variant="contained" color="info" onClick={handleMonthPicker}>
        월 선택기
      </Button>
      <Button variant="contained" color="success" onClick={handleDayPicker}>
        일 선택기
      </Button>
      <Button variant="contained" color="warning" onClick={handleTimePicker}>
        시간 선택기
      </Button>
    </>
  );
};

const meta = {
  title: "Common/useDatePicker",
  component: Example,
} satisfies Meta<typeof Example>;

export default meta;
