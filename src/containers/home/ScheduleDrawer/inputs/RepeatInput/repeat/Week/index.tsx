import { selectRepeatType } from "@app/redux/slices/scheduleSlice";
import { Box } from "@mui/material";
import { useSelector } from "react-redux";
import RadioLabel from "../../radio/RadioLabel";
import InputLabel from "../../radio/RadioLabel/InputLabel";
import { UpdateStateInterface } from "@type/common";
import Option from "./Option";

interface WeekProps {
  changeRepeat: (state: UpdateStateInterface) => void;
}

function Week({ changeRepeat }: WeekProps) {
  const repeatType = useSelector(selectRepeatType);

  const changeDayOfWeek = (week: string) => {
    changeRepeat({ target: { id: "repeat_day_of_week", value: week } });
  };

  return (
    <Box>
      <RadioLabel
        value="week"
        label={
          <InputLabel
            label="매주"
            postInputLabel="주 마다"
            max={52}
            option="week"
          />
        }
      />

      {repeatType === "week" && <Option changeDayOfWeek={changeDayOfWeek} />}
    </Box>
  );
}

export default Week;
