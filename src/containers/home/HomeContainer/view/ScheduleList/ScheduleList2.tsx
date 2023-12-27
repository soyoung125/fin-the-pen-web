import { useSchedules } from "@app/tanstack-query/schedules/useSchedules";
import { useUser } from "@app/tanstack-query/useUser";
import useSchedule from "@hooks/useSchedule";
import moment from "moment";

function ScheduleList2() {
  const { data: user } = useUser();
  const { date } = useSchedule(); // redux가 직접 하도록 개선 예정
  const query = {
    user_id: user?.user_id ?? "",
    date: moment(date).format("YYYY-MM"),
  };
  const { data: schedules, isPending } = useSchedules(query);
  if (isPending) {
    return <>loading...</>;
  }
  if (!schedules) {
    return <>schedules is null</>;
  }

  return (
    <>
      {schedules.map((s) => (
        <div key={s.id}>{s.event_name}</div>
      ))}
    </>
  );
}

export default ScheduleList2;
