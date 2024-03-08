import { useOverlay } from "@hooks/use-overlay/useOverlay.tsx";
import { RequestSchedule, Schedule } from "@app/types/schedule.ts";
import { styled, SwipeableDrawer } from "@mui/material";
import ScheduleDrawer from "@components/ScheduleDrawer";
import {
  selectScheduleForm,
  setDrawerScheduleForm,
} from "@redux/slices/scheduleSlice.tsx";
import { useAppDispatch, useAppSelector } from "@redux/hooks.ts";
import CssBaseline from "@mui/material/CssBaseline";
import { grey } from "@mui/material/colors";

export const useScheduleDrawer = () => {
  const { openOverlay, closeOverlay } = useOverlay();
  const dispatch = useAppDispatch();
  const schedule = useAppSelector(selectScheduleForm);
  const toggleDrawer = (newOpen: boolean) => () => {
    !newOpen && closeOverlay();
  };

  const Root = styled("div")(({ theme }) => ({
    height: "100%",
  }));

  const openScheduleDrawer = (data: RequestSchedule) => {
    if (schedule?.schedule_id !== data.schedule_id)
      dispatch(setDrawerScheduleForm(data));
    if (!schedule?.schedule_id && data.start_date !== schedule?.start_date)
      dispatch(setDrawerScheduleForm(data));

    const resetSchedule = () => dispatch(setDrawerScheduleForm(data));

    openOverlay(
      <Root>
        <CssBaseline />
        <SwipeableDrawer
          anchor="bottom"
          open={true}
          onClose={toggleDrawer(false)}
          onOpen={toggleDrawer(true)}
          disableSwipeToOpen={true}
          ModalProps={{
            keepMounted: true,
          }}
        >
          <ScheduleDrawer
            handleClose={closeOverlay}
            resetSchedule={resetSchedule}
          />
        </SwipeableDrawer>
      </Root>
    );
  };

  return { openScheduleDrawer, closeScheduleDrawer: closeOverlay };
};
