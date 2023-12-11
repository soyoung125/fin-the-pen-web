import { Button } from "@mui/material";
import { useState } from "react";
import { useDatePicker } from "@components/layouts/date-picker/hooks/useDatePicker.tsx";

function Temp() {
  const { pickYYYYMMDD } = useDatePicker();
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const handleOnclickStartDateButton = async () => {
    const answer = await pickYYYYMMDD();
    setStartDate(answer);
  };
  const handleOnclickEndDateButton = async () => {
    const answer = await pickYYYYMMDD();
    setEndDate(answer);
  };

  return (
    <>
      <Button variant="contained" onClick={handleOnclickStartDateButton}>
        {startDate.length === 0 ? "start" : startDate}
      </Button>
      <Button variant="contained" onClick={handleOnclickEndDateButton}>
        {endDate.length === 0 ? "end" : endDate}
      </Button>
    </>
  );
}

export default Temp;
