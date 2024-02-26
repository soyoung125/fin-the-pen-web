import { useOverlay } from "@hooks/use-overlay/useOverlay.tsx";
import { RequestSchedule, Schedule } from "@app/types/schedule.ts";
import { styled, SwipeableDrawer } from "@mui/material";
import ScheduleDrawer from "@components/ScheduleDrawer";
import { setDrawerScheduleForm } from "@redux/slices/scheduleSlice.tsx";
import { useAppDispatch } from "@redux/hooks.ts";
import CssBaseline from "@mui/material/CssBaseline";
import { grey } from "@mui/material/colors";

export const useScheduleDrawer = () => {
  const { openOverlay, closeOverlay } = useOverlay();
  const dispatch = useAppDispatch();
  const toggleDrawer = (newOpen: boolean) => () => {
    !newOpen && closeOverlay();
  };

  const Root = styled("div")(({ theme }) => ({
    height: "100%",
  }));

  const openScheduleDrawer = (data: RequestSchedule) => {
    dispatch(setDrawerScheduleForm(data));
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
          <ScheduleDrawer handleClose={closeOverlay} />
        </SwipeableDrawer>
      </Root>
    );
  };

  return { openScheduleDrawer, closeScheduleDrawer: closeOverlay };
};
