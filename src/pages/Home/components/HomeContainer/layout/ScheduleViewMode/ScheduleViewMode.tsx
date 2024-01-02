import { Box, Button } from "@mui/material";
import { grey } from "@mui/material/colors";
import { useSelector } from "react-redux";
import { VIEW_MODE } from "@constants/schedule.tsx";
import {
  changeViewMode,
  selectViewMode,
} from "@redux/slices/scheduleSlice.tsx";
import { useAppDispatch } from "@redux/hooks.ts";

function ScheduleViewMode() {
  const dispatch = useAppDispatch();
  const viewMode = useSelector(selectViewMode);

  return (
    <Box
      sx={{
        width: "100vw",
        position: "fixed",
        bottom: "80px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 100,
      }}
    >
      <Box
        sx={{
          display: "inline-flex",
          borderRadius: 4,
          backgroundColor: grey[200],
        }}
      >
        <Button
          sx={{ borderRadius: 4 }}
          variant={viewMode === VIEW_MODE.asset ? "contained" : "text"}
          onClick={() => {
            dispatch(changeViewMode(VIEW_MODE.asset));
          }}
        >
          자산
        </Button>
        <Button
          sx={{ borderRadius: 4 }}
          variant={viewMode === VIEW_MODE.schedule ? "contained" : "text"}
          onClick={() => dispatch(changeViewMode(VIEW_MODE.schedule))}
        >
          일정
        </Button>
      </Box>
    </Box>
  );
}

export default ScheduleViewMode;
