import { SESSION_STORAGE_KEY_TOKEN } from "@api/keys";
import { DOMAIN } from "@api/url";
import { getSessionStorage } from "@app/utils/storage";
import { QUERY_KEY_SCHEDULES } from "@constants/queryKeys";
import { useQuery } from "@tanstack/react-query";
import { MonthScheduleQuery, ScheduleResponse } from "@app/types/schedule.ts";

const fetchMonthSchedules = async (query: MonthScheduleQuery) => {
  const token = getSessionStorage(SESSION_STORAGE_KEY_TOKEN, "");

  return fetch(`${DOMAIN}/home/getMonthSchedules`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + token,
    },
    body: JSON.stringify(query),
  }).then<ScheduleResponse>(async (res) => {
    if (!res.ok) {
      return {
        count: 0,
        data: [],
        deposit: 0,
        withdraw: 0,
      };
    }
    return res.json();
  });
};

export const useSchedules = (query: MonthScheduleQuery) => {
  return useQuery({
    queryKey: [QUERY_KEY_SCHEDULES, query.date],
    queryFn: () => fetchMonthSchedules(query),
  });
};
