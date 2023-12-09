import { Button } from "@mui/material";
import { useState } from "react";
import { useDatePicker } from "@components/layouts/date-picker/hooks/useDatePicker.tsx";

function Temp() {
  const { pickYYYYMMDD } = useDatePicker();
  const [date, setDate] = useState("");
  const handleOnclickDateButton = async () => {
    const answer = await pickYYYYMMDD();
    setDate(answer);
  };

  return (
    <Button variant="contained" onClick={handleOnclickDateButton}>
      임시 date picker {date}
    </Button>
  );
}

export default Temp;
