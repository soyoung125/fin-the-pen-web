import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Button,
  Stack,
  Typography,
} from "@mui/material";
import moment from "moment";
import { useEffect, useState } from "react";
import Calender from "./Calender";
import MonthlyStatement from "./MonthlyStatement";
import ScheduleStatusCard from "../../../../components/assetManagement/ScheduleStatusCard";
import useSchedule from "../../../../hooks/useSchedule";
import { Schedule } from "../../../../types/schedule";

function AssetPreview() {
  const { schedules, date } = useSchedule();
  const today = moment();
  const [schedulesOfMonth, setSchedulesOfMonth] = useState<Schedule[]>([]);
  // const schedulesOfMonth = schedules.filter((s) => today.isSame(s.date, 'month') && today.isSameOrBefore(moment(s.date + s.start_time, 'YYYY-MM-DDhh:mm')));
  const [expandAccordion, setExpandAccordion] = useState(false);

  // useEffect(() => {
  //   setSchedulesOfMonth([
  //     ...schedules.filter(
  //       (s) =>
  //         moment(date).isSame(s.start_date, "month") &&
  //         today.isSameOrBefore(
  //           moment(s.start_date + s.start_time, "YYYY-MM-DDhh:mm"),
  //         ),
  //     ),
  //   ]);
  // }, [date]);

  const handleExpand = () => {
    setExpandAccordion(!expandAccordion);
  };
  return (
    <Box sx={{ mb: 8 }}>
      <Box sx={{ mx: 2 }}>
        <MonthlyStatement />
      </Box>

      <Accordion expanded={expandAccordion} disableGutters elevation={0}>
        <AccordionSummary>
          <Stack direction="row" justifyContent="space-between" width="100%">
            <Typography
              sx={{ display: "flex", alignItems: "center", fontWeight: "bold" }}
            >
              전체 내역
            </Typography>
            <Button onClick={handleExpand}>
              {expandAccordion ? "달력 닫기" : "달력 보기"}
            </Button>
          </Stack>
        </AccordionSummary>
        <AccordionDetails sx={{ p: 0 }}>
          <Calender dateHeight={85} />
        </AccordionDetails>
      </Accordion>

      <Box sx={{ mx: 2 }}>
        <ScheduleStatusCard
          month={moment(date).format("M월")}
          numberOfSchedule={schedulesOfMonth.length}
        />
      </Box>
    </Box>
  );
}
export default AssetPreview;
