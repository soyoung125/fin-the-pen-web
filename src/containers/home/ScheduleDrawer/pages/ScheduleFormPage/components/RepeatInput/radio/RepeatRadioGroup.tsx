import { selectSchedule } from "@redux/slices/scheduleSlice.tsx";
import { RadioGroup } from "@mui/material";
import { useSelector } from "react-redux";

interface RepeatRadioGroupProps {
  type: "repeat" | "period";
  handleChange: (state: { target: { value: string; name: string } }) => void;
  children: JSX.Element;
}

function RepeatRadioGroup({
  type,
  handleChange,
  children,
}: RepeatRadioGroupProps) {
  const schedule = useSelector(selectSchedule);

  return (
    <RadioGroup
      value={schedule?.[type]}
      onChange={(e) =>
        handleChange({
          target: {
            value: e.target.value,
            name: type,
          },
        })
      }
    >
      {children}
    </RadioGroup>
  );
}

export default RepeatRadioGroup;
