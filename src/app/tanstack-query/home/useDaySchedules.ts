import { SESSION_STORAGE_KEY_TOKEN } from "@api/keys.ts";
import { DOMAIN } from "@api/url.ts";
import { getSessionStorage } from "@utils/storage.ts";
import { QUERY_KEY_DAY } from "@constants/queryKeys.ts";
import { useQuery } from "@tanstack/react-query";
import { HomeQuery, DaySchedule } from "@app/types/schedule.ts";

const fetchDaySchedules = async (query: HomeQuery) => {
  const token = getSessionStorage(SESSION_STORAGE_KEY_TOKEN, "");

  return fetch(`${DOMAIN}/home/day`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + token,
    },
    body: JSON.stringify(query),
  }).then<DaySchedule>(async (res) => {
    if (!res.ok) {
      throw new Error("Network response was not ok");
    }
    return res.json();
  });
};

export const useDaySchedules = (query: HomeQuery) => {
  return useQuery({
    queryKey: [QUERY_KEY_DAY, query.calendar_date],
    queryFn: () => fetchDaySchedules(query),
  });
};
