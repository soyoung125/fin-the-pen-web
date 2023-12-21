import { selectRepeatType } from "@app/redux/slices/scheduleSlice";
import { useSelector } from "react-redux";
import RadioLabel from "../../radio/RadioLabel";
import Option from "./Option";
import { RepeatOptionProps } from "@type/schedule";
import RepeatInputLabel from "../../radio/RadioLabel/RepeatInputLabel";

function Week({ handleChangeOption }: RepeatOptionProps) {
  const repeatType = useSelector(selectRepeatType);

  const changeDayOfWeek = (week: string) => {
    handleChangeOption({ target: { id: "repeat_day_of_week", value: week } });
  };

  return (
    <>
      <RadioLabel
        value="week"
        label={
          <RepeatInputLabel
            label="매주"
            postInputLabel="주 마다"
            max={52}
            option="week"
          />
        }
      />

      {repeatType === "week" && <Option changeDayOfWeek={changeDayOfWeek} />}
    </>
  );
}

export default Week;
