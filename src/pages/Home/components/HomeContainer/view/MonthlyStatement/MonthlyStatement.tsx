import { Stack, Typography } from "@mui/material";
import moment from "moment";
import { useSelector } from "react-redux";
import { selectDate, setSelectedDate } from "@redux/slices/scheduleSlice.tsx";
import { calculateIncomeExpenditure } from "@utils/tools.ts";
import StatusStack from "@components/assetManagement/ScheduleStatusCard/StatusStack.tsx";
import SwitchingHeader from "@components/common/SwitchingHeader.tsx";
import RoundedPaper from "@components/common/RoundedPaper.tsx";
import RoundedBorderBox from "@components/common/RoundedBorderBox.tsx";
import useSchedule from "@hooks/useSchedule.tsx";
import { Schedule } from "@type/schedule.tsx";
import { useAppDispatch } from "@redux/hooks.ts";

function MonthlyStatement() {
  const dispatch = useAppDispatch();
  const { schedules } = useSchedule();
  const date = useSelector(selectDate);

  return (
    <RoundedPaper my={2}>
      <SwitchingHeader
        justifyContent="space-between"
        handleClickLeftArrow={() =>
          dispatch(setSelectedDate(moment(date).subtract(1, "months")))
        }
        handleClickRightArrow={() =>
          dispatch(setSelectedDate(moment(date).add(1, "months")))
        }
      >
        <Typography variant="h6" sx={{ fontWeight: "bold" }}>{`${moment(
          date
        ).format("M")}월`}</Typography>
        <Typography variant="caption">{moment(date).format("YYYY")}</Typography>
      </SwitchingHeader>

      <RoundedBorderBox>
        <Stack direction="row" spacing={2} p={2}>
          <StatusStack
            title="수입"
            content={`+${calculateIncomeExpenditure(
              schedules ?? [],
              (s: Schedule) => moment(date).isSame(s.start_date, "month"),
              "+"
            )}`}
          />

          <StatusStack
            title="지출"
            content={`-${calculateIncomeExpenditure(
              schedules ?? [],
              (s: Schedule) => moment(date).isSame(s.end_date, "month"),
              "-"
            )}`}
          />
        </Stack>
      </RoundedBorderBox>
    </RoundedPaper>
  );
}

export default MonthlyStatement;
