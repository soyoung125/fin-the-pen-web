import CalenderBox from "@containers/home/HomeContainer/view/Calender/boxes/CalenderBox";
import { DateCalendar } from "@mui/x-date-pickers";
import moment from "moment";
import { Dispatch, SetStateAction, useContext, useState } from "react";
import DatePickerContext from "@components/layouts/date-picker/DatePickerContext.tsx";
interface SelectDateProps {
  value: string;
  setValue: Dispatch<SetStateAction<string>>;
}
function SelectDate({ value, setValue }: SelectDateProps) {
  return (
    <>
      <CalenderBox dateHeight={50} dateSize={32} week={6}>
        <DateCalendar
          views={["year", "month", "day"]}
          value={moment(value)}
          onChange={(newValue) => {
            setValue(newValue ? newValue.format("YYYY-MM-DD") : "");
          }}
        />
      </CalenderBox>
      <div>{value}</div>
    </>
  );
}

export default SelectDate;
