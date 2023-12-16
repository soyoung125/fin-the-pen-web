import { selectRepeatType } from "@app/redux/slices/scheduleSlice";
import { Box } from "@mui/material";
import { useSelector } from "react-redux";
import RadioLabel from "../../radio/RadioLabel";
import InputLabel from "../../radio/RadioLabel/InputLabel";
import Option from "./Option";
import { RepeatOptionProps } from "@type/schedule";

function Week({ handleChangeOption }: RepeatOptionProps) {
  const repeatType = useSelector(selectRepeatType);

  const changeDayOfWeek = (week: string) => {
    handleChangeOption({ target: { id: "repeat_day_of_week", value: week } });
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
