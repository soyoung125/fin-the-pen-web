import RadioLabel from "../../radio/RadioLabel";
import Option from "./Option";
import { RepeatProps } from "@type/schedule";
import RepeatInputLabel from "../RepeatInputLabel";

function Week({ repeatType, handleChangeOption }: RepeatProps) {
  const changeDayOfWeek = (week: string) =>
    handleChangeOption({ target: { id: "repeat_day_of_week", value: week } });

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
            repeatType={repeatType}
          />
        }
      />

      {repeatType === "week" && <Option changeDayOfWeek={changeDayOfWeek} />}
    </>
  );
}

export default Week;
