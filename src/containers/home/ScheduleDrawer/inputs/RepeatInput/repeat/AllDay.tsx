import { selectSchedule } from "@app/redux/slices/scheduleSlice";
import { Input } from "@mui/material";
import { useSelector } from "react-redux";
import RadioLabel from "../radio/RadioLabel";

function AllDay() {
  const schedule = useSelector(selectSchedule);

  return (
    <RadioLabel
      value="AllDay"
      label={
        schedule?.repeat === "AllDay" ? (
          <>
            <Input
              defaultValue={1}
              type="number"
              inputProps={{
                min: 1,
                max: 365,
              }}
              sx={{ width: "30px" }}
            />
            일 마다
          </>
        ) : (
          <>매일</>
        )
      }
    />
  );
}

export default AllDay;
