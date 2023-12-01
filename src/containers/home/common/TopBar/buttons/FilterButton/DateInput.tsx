import { SelectDate } from "@containers/home/common/TopBar/buttons/FilterButton/hooks/useSelectDate.ts";

interface DateInputProps {
  dateType: keyof SelectDate;
  date: string;
  updateDate: (type: keyof SelectDate, value: string) => void;
}

function DateInput({ updateDate, date, dateType }: DateInputProps) {
  return (
    <input
      type="date"
      value={date}
      onChange={(e) => updateDate(dateType, e.target.value)}
      onClick={(e) => e.currentTarget.showPicker()}
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
