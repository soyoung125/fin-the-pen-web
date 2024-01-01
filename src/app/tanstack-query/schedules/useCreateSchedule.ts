import { SESSION_STORAGE_KEY_TOKEN } from "@api/keys";
import { DOMAIN } from "@api/url";
import { getSessionStorage } from "@app/utils/storage";
import { QUERY_KEY_SCHEDULES } from "@constants/queryKeys";
import { getSign } from "@containers/home/ScheduleDrawer/hooks/useScheduleForm";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { RequestSchedule, Schedule } from "@type/schedule";
import moment from "moment";

const fetchCreateSchedule = async (schedule: Schedule) => {
  const token = getSessionStorage(SESSION_STORAGE_KEY_TOKEN, "");
  const data = {
    ...schedule,
    is_all_day: schedule.all_day,
    set_amount: schedule.amount,
    exclusion: schedule.exclude,
    price_type: getSign(schedule.price_type),
  } as RequestSchedule;

  return fetch(`${DOMAIN}/createSchedule`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + token,
    },
    body: JSON.stringify(data),
  });
};

export const useCreateSchedule = () => {
  const queryClient = useQueryClient();
  const { mutate } = useMutation({
    mutationFn: fetchCreateSchedule,
    onSuccess: async (data, variables) => {
      const date = moment(variables.start_date);
      queryClient.invalidateQueries({
        queryKey: [QUERY_KEY_SCHEDULES, date.format("YYYY-MM")],
      });
    },
  });

  const createSchedule = (schedule: Schedule) => {
    mutate(schedule);
  };

  return { createSchedule };
};
