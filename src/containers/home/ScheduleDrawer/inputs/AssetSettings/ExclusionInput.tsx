import { Stack, Switch, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import { SCHEDULE_DRAWER } from "../../../../../constants/schedule";
import { selectSchedule } from "../../../../../app/redux/slices/scheduleSlice";
import { updateExclusion } from "../../domain/schedule";
import { useAppDispatch } from "../../../../../app/redux/hooks";
import SwitchButton from "@components/common/SwitchButton";

function ExclusionInput() {
  const dispatch = useAppDispatch();
  const schedule = useSelector(selectSchedule);
  const exclusion = schedule?.exclude ? true : false;

  const changeExclusion = () => {
    console.log(exclusion);
    updateExclusion(dispatch, schedule, !exclusion);
  };

  return (
    <Stack
      direction="row"
      justifyContent="space-between"
      alignItems="center"
      px={2.5}
    >
      <Typography sx={{ fontWeight: 500 }}>
        {SCHEDULE_DRAWER.exclusion_title}
      </Typography>
      <Stack direction="row" alignItems="center">
        <SwitchButton checked={exclusion} handleChange={changeExclusion} />
      </Stack>
    </Stack>
  );
}
export default ExclusionInput;
