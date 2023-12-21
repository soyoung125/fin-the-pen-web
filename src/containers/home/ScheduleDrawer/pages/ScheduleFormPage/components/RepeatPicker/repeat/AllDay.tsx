import { RepeatTypeProps } from "@type/schedule";
import RadioLabel from "../radio/RadioLabel";
import RepeatInputLabel from "../radio/RadioLabel/labels/RepeatInputLabel";

function AllDay({ repeatType }: RepeatTypeProps) {
  return (
    <RadioLabel
      value="day"
      label={
        <RepeatInputLabel
          label="매일"
          postInputLabel="일 마다"
          max={365}
          option="day"
          repeatType={repeatType}
        />
      }
    />
  );
}

export default AllDay;
