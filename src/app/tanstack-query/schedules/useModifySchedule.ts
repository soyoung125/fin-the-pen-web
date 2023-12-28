import { SESSION_STORAGE_KEY_TOKEN } from "@api/keys";
import { DOMAIN } from "@api/url";
import { getSessionStorage } from "@app/utils/storage";
import { QUERY_KEY_SCHEDULES } from "@constants/queryKeys";
import { getSign } from "@containers/home/ScheduleDrawer/hooks/useScheduleForm";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { RequestSchedule, Schedule } from "@type/schedule";

const fetchModifySchedule = async (schedule: Schedule) => {
  const token = getSessionStorage(SESSION_STORAGE_KEY_TOKEN, "");
  const data = {
    ...schedule,
    is_all_day: schedule.all_day,
    set_amount: schedule.amount,
    exclusion: schedule.exclude,
    price_type: getSign(schedule.price_type),
  } as RequestSchedule;

  return fetch(`${DOMAIN}/modifySchedule`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + token,
    },
    body: JSON.stringify(data),
  });
};

export const useModifySchedule = () => {
  const queryClient = useQueryClient();
  const { mutate } = useMutation({
    mutationFn: fetchModifySchedule,
    onSuccess: async () => {
      queryClient.invalidateQueries({ queryKey: [QUERY_KEY_SCHEDULES] });
    },
  });

  const modifySchedule = (schedule: Schedule) => {
    mutate(schedule);
  };

  return { modifySchedule };
};
