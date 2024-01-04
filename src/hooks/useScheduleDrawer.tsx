import { useOverlay } from "@hooks/use-overlay/useOverlay.tsx";
import { Schedule } from "@app/types/schedule.ts";
import { SwipeableDrawer } from "@mui/material";
import ScheduleDrawer from "@components/ScheduleDrawer";
import { setDrawerScheduleForm } from "@redux/slices/scheduleSlice.tsx";
import { useAppDispatch } from "@redux/hooks.ts";

export const useScheduleDrawer = () => {
  const { openOverlay, closeOverlay } = useOverlay();
  const dispatch = useAppDispatch();
  const toggleDrawer = (newOpen: boolean) => () => {
    !newOpen && closeOverlay();
  };
  const openScheduleDrawer = (data: Schedule) => {
    dispatch(setDrawerScheduleForm(data));
    openOverlay(
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
    );
  };

  return { openScheduleDrawer, closeScheduleDrawer: closeOverlay };
};
