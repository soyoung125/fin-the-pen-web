import { useSelector } from "react-redux";
import RadioLabel from "../radio/RadioLabel";
import InputLabel from "../radio/RadioLabel/InputLabel";
import { selectSchedule } from "@app/redux/slices/scheduleSlice";
import { Input } from "@mui/material";

function RepetitionCount() {
  const schedule = useSelector(selectSchedule);

  return (
    <RadioLabel
      value="numberOf"
      label={
        // <InputLabel
        //   label="일정 반복 횟수"
        //   preInputLabel="총"
        //   postInputLabel="번 반복"
        //   max={100}
        //   type="period"
        //   option="numberOf"
        // />
        schedule?.period === "numberOf" ? (
          <>
            총
            <Input
              type="number"
              defaultValue={1}
              inputProps={{
                min: 1,
                max: 100,
                style: { textAlign: "center" },
              }}
              sx={{
                width: "30px",
                color: "primary.main",
              }}
              color="primary"
            />
            번 반복
          </>
        ) : (
          <>일정 반복 횟수</>
        )
      }
    />
  );
}

export default RepetitionCount;
