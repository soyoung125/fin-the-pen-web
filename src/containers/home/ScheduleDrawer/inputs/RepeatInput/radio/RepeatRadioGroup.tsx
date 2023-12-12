import { selectSchedule } from "@app/redux/slices/scheduleSlice";
import { RadioGroup, Input } from "@mui/material";
import { UpdateStateInterface } from "@type/common";
import { useSelector } from "react-redux";

interface RepeatRadioGroupProps {
  type: "repeat" | "period";
  handleChange: (state: UpdateStateInterface) => void;
  children: JSX.Element;
}

function RepeatRadioGroup({
  type,
  handleChange,
  children,
}: RepeatRadioGroupProps) {
  const schedule = useSelector(selectSchedule);
  const value =
    type === "repeat" ? schedule?.repeat.kind_type : schedule?.period;

  return (
    <RadioGroup
      value={value}
      onChange={(e) =>
        handleChange({
          target: {
            value: e.target.value,
            id: type,
          },
        })
      }
    >
      {children}
    </RadioGroup>
  );
}

export default RepeatRadioGroup;
