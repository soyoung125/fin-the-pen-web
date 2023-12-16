import { selectRepeatType } from "@app/redux/slices/scheduleSlice";
import { useSelector } from "react-redux";
import RadioLabel from "../../radio/RadioLabel";
import InputLabel from "../../radio/RadioLabel/InputLabel";
import Option from "./Option";
import { RepeatOptionProps } from "@type/schedule";

function Month({ handleChangeOption }: RepeatOptionProps) {
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

      {repeatType === "month" && (
        <Option handleChangeOption={handleChangeOption} />
      )}
    </>
  );
}

export default Month;
