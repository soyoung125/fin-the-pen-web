import ConsumptionCardSkeleton from "@components/ScheduleList/ConsumptionCard/ConsumptionCardSkeleton.tsx";

function ScheduleListSkeleton() {
  return Array(3)
    .fill(0)
    .map(() => <ConsumptionCardSkeleton />);
}

export default ScheduleListSkeleton;
