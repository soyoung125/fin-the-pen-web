import { SESSION_STORAGE_KEY_TOKEN } from "@api/keys.ts";
import { DOMAIN } from "@api/url.ts";
import { getSessionStorage } from "@utils/storage.ts";
import { QUERY_KEY_SCHEDULES } from "@constants/queryKeys.ts";
import { useQuery } from "@tanstack/react-query";
import {
  HomeMonthQuery,
  MonthSchedule,
  MonthScheduleQuery,
  Schedule,
} from "@app/types/schedule.ts";

const fetchMonthSchedules = async (query: HomeMonthQuery) => {
  const token = getSessionStorage(SESSION_STORAGE_KEY_TOKEN, "");

  return fetch(`${DOMAIN}/home/month`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + token,
    },
    body: JSON.stringify(query),
  }).then<MonthSchedule>(async (res) => {
    return res.json();
  });
};

export const useMonthSchedules = (query: HomeMonthQuery) => {
  return useQuery({
    queryKey: [QUERY_KEY_SCHEDULES, query.calendar_date],
    queryFn: () => fetchMonthSchedules(query),
  });
};
