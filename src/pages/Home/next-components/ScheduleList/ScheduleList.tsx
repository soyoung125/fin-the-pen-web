import { Box, Stack, Typography } from "@mui/material";
import { Schedule, TodaySchedule } from "@app/types/schedule.ts";
import ConsumptionCard from "@components/ScheduleList/ConsumptionCard";
import { useAppSelector } from "@redux/hooks.ts";
import { selectIsBudgetHidden } from "@redux/slices/settingSlice.ts";
import { SCHEDULE_REQUEST } from "@constants/schedule.ts";
import { useScheduleDrawer } from "@hooks/useScheduleDrawer.tsx";

interface ScheduleListProps {
  date: string;
  todaySchedules: TodaySchedule[] | Schedule[];
  isError: boolean;
}

function ScheduleList({ date, todaySchedules, isError }: ScheduleListProps) {
  const isHideBudgetMode = useAppSelector(selectIsBudgetHidden);
  const { openScheduleDrawer } = useScheduleDrawer();

  if (todaySchedules.length === 0 || isError) {
    return (
      <Stack justifyContent="center" alignItems="center">
        <Box my={5}>
          <Typography>{date}에 등록된 일정이 없습니다!</Typography>
        </Box>
      </Stack>
    );
  }

  const handleModal = (schedule: TodaySchedule | Schedule) => {
    if (schedule && !isHideBudgetMode) {
      if ("id" in schedule) {
        openScheduleDrawer(
          SCHEDULE_REQUEST({
            ...schedule,
            schedule_id: schedule.id,
          } as Schedule)
        );
      } else {
        openScheduleDrawer(SCHEDULE_REQUEST(schedule));
      }
    }
  };

  return (
    <>
      {todaySchedules.map((s) => (
        <ConsumptionCard
          schedule={s}
          isRepeat={s.repeat_kind !== "NONE"}
          onClick={() => handleModal(s)}
          icon
        />
      ))}
    </>
  );
}

export default ScheduleList;
