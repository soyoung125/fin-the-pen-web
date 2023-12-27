import { SESSION_STORAGE_KEY_TOKEN } from "@api/keys";
import { DOMAIN } from "@api/url";
import { getSessionStorage } from "@app/utils/storage";
import { QUERY_KEY_SCHEDULES } from "@constants/queryKeys";
import { useQuery } from "@tanstack/react-query";
import { MonthScheduleQuery, Schedule } from "@type/schedule";

const fetchMonthSchedules = async (query: MonthScheduleQuery) => {
  const token = getSessionStorage(SESSION_STORAGE_KEY_TOKEN, "");

  return fetch(`${DOMAIN}/getMonthSchedules`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + token,
    },
    body: JSON.stringify(query),
  }).then<Schedule[] | undefined>(async (res) => {
    const response = await res.json();
    return response.data;
  });
};

export const useSchedules = (query: MonthScheduleQuery) => {
  return useQuery({
    queryKey: [QUERY_KEY_SCHEDULES],
    queryFn: () => fetchMonthSchedules(query),
  });
};
