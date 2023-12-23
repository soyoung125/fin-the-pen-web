import { Box, Stack, Typography } from "@mui/material";
import moment from "moment";
import { useSelector } from "react-redux";
import {
  selectDate,
  setSelectedDate,
} from "../../app/redux/slices/scheduleSlice";
import SwitchingHeader from "../../components/common/SwitchingHeader";
import { useAppDispatch } from "../../app/redux/hooks";
import { useMonthPicker } from "@hooks/date-picker/hooks/useMonthPicker.tsx";

function AnalysisHeader() {
  const dispatch = useAppDispatch();
  const date = useSelector(selectDate);
  const { openMonthPicker } = useMonthPicker(date);
  const handleDate = async () => {
    const newDate = await openMonthPicker();
    if (newDate) {
      dispatch(setSelectedDate(newDate));
    }
  };

  return (
    <Stack justifyContent="center">
      <Typography variant="h6" sx={{ fontWeight: "bold", textAlign: "center" }}>
        카테고리별 소비 현황
      </Typography>
      <SwitchingHeader
        justifyContent="center"
        handleClickLeftArrow={() =>
          dispatch(setSelectedDate(moment(date).subtract(1, "months")))
        }
        handleClickRightArrow={() =>
          dispatch(setSelectedDate(moment(date).add(1, "months")))
        }
      >
        <Box sx={{ typography: "caption", mx: 1 }} onClick={() => handleDate()}>
          {`${moment(date).format("YYYY년 M월")}`}
        </Box>
      </SwitchingHeader>
    </Stack>
  );
}

export default AnalysisHeader;
