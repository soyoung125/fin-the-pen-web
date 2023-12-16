import RadioLabel from "../radio/RadioLabel";
import RepeatInputLabel from "../radio/RadioLabel/RepeatInputLabel";

function AllDay() {
  return (
    <RadioLabel
      value="day"
      label={
        <RepeatInputLabel
          label="매일"
          postInputLabel="일 마다"
          max={365}
          option="day"
        />
      }
    />
  );
}

export default AllDay;
