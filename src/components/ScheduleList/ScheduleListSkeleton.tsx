import ScheduleCardSkeleton from "@components/ScheduleList/ScheduleCard/ScheduleCardSkeleton.tsx";

function ScheduleListSkeleton() {
  return Array(3)
    .fill(0)
    .map(() => <ScheduleCardSkeleton />);
}

export default ScheduleListSkeleton;
