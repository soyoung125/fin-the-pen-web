import RadioLabel from "../../../../components/radio/RadioLabel";
import Option from "./Option";
import { RepeatProps } from "@type/schedule";
import RepeatInputLabel from "../RepeatInputLabel";

function Month({ repeatType, handleChangeOption }: RepeatProps) {
  return (
    <>
      <RadioLabel
        value="month"
        label={
          <RepeatInputLabel
            label="매달"
            postInputLabel="개월 마다"
            max={12}
            option="month"
            repeatType={repeatType}
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
