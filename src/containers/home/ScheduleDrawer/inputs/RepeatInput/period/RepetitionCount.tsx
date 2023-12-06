import RadioLabel from "../radio/RadioLabel";
import InputLabel from "../radio/RadioLabel/InputLabel";

function RepetitionCount() {
  return (
    <RadioLabel
      value="numberOf"
      label={
        <InputLabel
          label="일정 반복 횟수"
          preInputLabel="총"
          postInputLabel="번 반복"
          max={100}
          type="period"
          option="numberOf"
        />
      }
    />
  );
}

export default RepetitionCount;
