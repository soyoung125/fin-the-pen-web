import RadioLabel from "../radio/RadioLabel";
import InputLabel from "../radio/RadioLabel/InputLabel";

function AllDay() {
  return (
    <RadioLabel
      value="day_type"
      label={
        <InputLabel
          label="매일"
          postInputLabel="일 마다"
          max={365}
          option="day_type"
        />
      }
    />
  );
}

export default AllDay;
