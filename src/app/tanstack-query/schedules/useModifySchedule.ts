import { SESSION_STORAGE_KEY_TOKEN } from "@api/keys";
import { DOMAIN } from "@api/url";
import { getSessionStorage } from "@app/utils/storage";
import { QUERY_KEY_SCHEDULES } from "@constants/queryKeys";
import { getSign } from "@components/ScheduleDrawer/hooks/useScheduleForm";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Schedule } from "@type/schedule";
import moment from "moment";

const fetchModifySchedule = async (schedule: Schedule) => {
  const token = getSessionStorage(SESSION_STORAGE_KEY_TOKEN, "");
  const data = {
    // 다른 방법을 생각해 봐야 할 것 같음
    ...schedule,
    is_all_day: schedule.all_day,
    set_amount: schedule.amount,
    exclusion: schedule.exclude,
    price_type: getSign(schedule.price_type),
    schedule_id: schedule.id,
    repeat: { ...schedule.repeat, kind_type: "day" }, // api 수정 후 삭제
    modify_options: "nowFromAfter", // all:모두 , nowFromOption: 이후 일정, exceptNowAfter: 현재 일정 제외 이후 일정
  };

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
    onSuccess: async (data, variables) => {
      const date = moment(variables.start_date);
      queryClient.invalidateQueries({
        queryKey: [QUERY_KEY_SCHEDULES, date.format("YYYY-MM")],
      });
    },
  });

  const modifySchedule = (schedule: Schedule) => {
    mutate(schedule);
  };

  return { modifySchedule };
};
