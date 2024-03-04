import { SESSION_STORAGE_KEY_TOKEN } from "@api/keys.ts";
import { DOMAIN } from "@api/url.ts";
import { getSessionStorage } from "@utils/storage.ts";
import { QUERY_KEY_WEEK } from "@constants/queryKeys.ts";
import { useQuery } from "@tanstack/react-query";
import { HomeQuery, WeekSchedule } from "@app/types/schedule.ts";

const fetchWeekSchedules = async (query: HomeQuery) => {
  const token = getSessionStorage(SESSION_STORAGE_KEY_TOKEN, "");

  return fetch(`${DOMAIN}/home/week`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + token,
    },
    body: JSON.stringify(query),
  }).then<WeekSchedule>(async (res) => {
    if (!res.ok) {
      throw new Error("Network response was not ok");
    }
    return res.json();
  });
};

export const useWeekSchedules = (query: HomeQuery) => {
  return useQuery({
    queryKey: [QUERY_KEY_WEEK, query.main_month],
    queryFn: () => fetchWeekSchedules(query),
  });
};
