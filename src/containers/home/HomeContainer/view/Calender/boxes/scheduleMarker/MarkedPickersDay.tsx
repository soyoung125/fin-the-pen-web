import { PickersDay, PickersDayProps } from "@mui/x-date-pickers";
import moment from "moment";
import { useSelector } from "react-redux";
import { selectIsDarkMode } from "../../../../../../../app/redux/slices/settingSlice";

interface MarkedPickersDayProps {
  color: string[];
  props: PickersDayProps<moment.Moment>;
}

function MarkedPickersDay({ color, props }: MarkedPickersDayProps) {
  const isDarkMode = useSelector(selectIsDarkMode);

  return (
    <PickersDay
      sx={{
        border: 1,
        borderRadius: 2,
        borderColor: color.length > 1 ? "#FFA450" : color,
        backgroundColor: isDarkMode ? "#12293b" : "#FFFFFF",
      }}
      {...props}
    />
  );
}

export default MarkedPickersDay;
