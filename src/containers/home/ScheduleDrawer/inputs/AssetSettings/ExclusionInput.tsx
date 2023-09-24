import { Stack, Switch, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import { SCHEDULE_DRAWER } from "../../../../../constants/schedule";
import { selectSchedule } from "../../../../../app/redux/slices/scheduleSlice";
import { updateExclusion } from "../../domain/schedule";
import { useAppDispatch } from "../../../../../app/redux/hooks";

function ExclusionInput() {
  const dispatch = useAppDispatch();
  const schedule = useSelector(selectSchedule);

  const changeExclustion = (state: React.ChangeEvent<HTMLInputElement>) => {
    updateExclusion(dispatch, schedule, state);
  };

  return (
    <Stack
      direction="row"
      justifyContent="space-between"
      alignItems="center"
      p={1}
    >
      <Typography>{SCHEDULE_DRAWER.exclusion_title}</Typography>
      <Stack direction="row" alignItems="center">
        <Switch
          id="exclusion"
          checked={schedule?.exclusion}
          value={schedule?.exclusion}
          onChange={changeExclustion}
        />
      </Stack>
    </Stack>
  );
}
export default ExclusionInput;
