import CalenderBox from "@containers/home/HomeContainer/view/Calender/boxes/CalenderBox";
import { DateCalendar, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import { UpdateStateInterface } from "@type/common";
import moment from "moment";

interface SelectDateProps {
  date: string | undefined;
  changeSchedule: (
    state:
      | React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
      | UpdateStateInterface,
  ) => void;
  type: string;
}

function SelectDate({ date, changeSchedule, type }: SelectDateProps) {
  return (
    <LocalizationProvider dateAdapter={AdapterMoment}>
      <CalenderBox dateHeight={50} dateSize={32} week={6}>
        <DateCalendar
          views={["year", "month", "day"]}
          disableHighlightToday
          dayOfWeekFormatter={(day) => day.substring(0, 3)}
          value={moment(date)}
          maxDate={moment().add(18, "M")}
          minDate={moment().subtract(18, "M")}
          onChange={(newValue) => {
            newValue &&
              changeSchedule({
                target: {
                  id: type + "_date",
                  value: newValue.format("YYYY-MM-DD"),
                },
              });
          }}
          reduceAnimations
        />
      </CalenderBox>
    </LocalizationProvider>
  );
}

export default SelectDate;
