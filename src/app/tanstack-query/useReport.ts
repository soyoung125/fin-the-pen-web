import {SESSION_STORAGE_KEY_TOKEN} from "@api/keys";
import {DOMAIN} from "@api/url";
import {getSessionStorage} from "@app/utils/storage";
import {QUERY_KEY_REPORT} from "@constants/queryKeys";
import {useQuery} from "@tanstack/react-query";
import {MonthScheduleQuery,} from "@app/types/schedule.ts";
import {Report} from "@app/types/report.ts";

const fetchReport = async (query: MonthScheduleQuery) => {
    const token = getSessionStorage(SESSION_STORAGE_KEY_TOKEN, "");

    return fetch(`${DOMAIN}/report`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + token,
        },
        body: JSON.stringify(query),
    }).then<Report[] | undefined>(async (res) => {
        const response = await res.json();
        return response.data;
    });
};

export const useReport = (query: MonthScheduleQuery) => {
    return useQuery({
        queryKey: [QUERY_KEY_REPORT, query.date],
        queryFn: () => fetchReport(query),
    });
};
