import { Box, Stack, Typography } from "@mui/material";
import { TodaySchedule } from "@app/types/schedule.ts";
import ConsumptionCard from "@components/ScheduleList/ConsumptionCard";

interface ScheduleListProps {
  date: string;
  todaySchedules: TodaySchedule[];
  isError: boolean;
}

function ScheduleList({ date, todaySchedules, isError }: ScheduleListProps) {
  if (todaySchedules.length === 0 || isError) {
    return (
      <Stack justifyContent="center" alignItems="center">
        <Box my={5}>
          <Typography>{date}에 등록된 일정이 없습니다!</Typography>
        </Box>
      </Stack>
    );
  }
  return (
    <>
      {todaySchedules.map((s) => (
        <ConsumptionCard
          name={s.event_name}
          date={s.start_date}
          endTime={s.end_time}
          startTime={s.start_time}
          type={s.price_type}
          price={Number(s.amount)}
          isRepeat={s.repeat_kind !== "NONE"}
        />
      ))}
    </>
  );
}

export default ScheduleList;
