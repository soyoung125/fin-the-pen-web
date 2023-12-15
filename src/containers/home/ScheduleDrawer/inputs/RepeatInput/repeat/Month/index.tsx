import { selectRepeatType } from "@app/redux/slices/scheduleSlice";
import { useSelector } from "react-redux";
import RadioLabel from "../../radio/RadioLabel";
import InputLabel from "../../radio/RadioLabel/InputLabel";
import { UpdateStateInterface } from "@type/common";
import Option from "./Option";

interface MonthProps {
  changeRepeat: (state: UpdateStateInterface) => void;
}

function Month({ changeRepeat }: MonthProps) {
  const repeatType = useSelector(selectRepeatType);

  return (
    <>
      <RadioLabel
        value="month"
        label={
          <InputLabel
            label="매달"
            postInputLabel="개월 마다"
            max={12}
            option="month"
          />
        }
      />

      {repeatType === "month" && <Option changeRepeat={changeRepeat} />}
    </>
  );
}

export default Month;
