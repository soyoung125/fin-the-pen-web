import { SESSION_STORAGE_KEY_TOKEN } from "@api/keys.ts";
import { DOMAIN } from "@api/url.ts";
import { getSessionStorage } from "@utils/storage.ts";
import { QUERY_KEY_REPORT } from "@constants/queryKeys.ts";
import { useQuery } from "@tanstack/react-query";
import { MonthScheduleQuery } from "@app/types/schedule.ts";
import { Report } from "@app/types/report.ts";

const fetchReport = async (query: MonthScheduleQuery) => {
  const token = getSessionStorage(SESSION_STORAGE_KEY_TOKEN, "");

  return fetch(`${DOMAIN}/report/home`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + token,
    },
    body: JSON.stringify(query),
  }).then<Report[]>(async (res) => {
    const response = await res.json();
    return response.data;
  });
};

export const useReports = (query: MonthScheduleQuery) => {
  return useQuery({
    queryKey: [QUERY_KEY_REPORT, query.date],
    queryFn: () => fetchReport(query),
  });
};
