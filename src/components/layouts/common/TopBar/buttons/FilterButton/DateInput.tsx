import { SelectDate } from "@components/layouts/common/TopBar/buttons/FilterButton/hooks/useSelectDate.ts";
import { useDatePicker } from "@hooks/date-picker/hooks/useDatePicker.tsx";
import { MouseEventHandler } from "react";

interface DateInputProps {
  dateType: keyof SelectDate;
  date: string;
  updateDate: (type: keyof SelectDate, value: string) => void;
}

function DateInput({ updateDate, date, dateType }: DateInputProps) {
  const { openDayPicker } = useDatePicker();
  const onClick: MouseEventHandler<HTMLInputElement> = async (event) => {
    event.preventDefault();
    const answer = await openDayPicker(date);
    updateDate(dateType, answer);
  };

  return (
    <input
      type="date"
      value={date}
      onClick={onClick}
      style={{
        display: "flex",
        height: "50px",
        padding: "8px 12px",
        justifyContent: "space-between",
        alignItems: "center",
        flex: "1 0 0",
        borderRadius: "4px",
        border: "1px solid #DEE0E3",
        background: "#fff",
        width: "100%",
      }}
    />
  );
}

export default DateInput;
