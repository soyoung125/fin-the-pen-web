import {useState} from "react";
import {useDatePicker} from "@hooks/date-picker/hooks/useDatePicker.tsx";
import {useUser} from "@app/tanstack-query/useUser.ts";
import {useReports} from "@app/tanstack-query/useReports.ts";

const useReport = () => {
    const [yearMonth, setYearMonth] = useState("2024-01");
    const [year, month] = yearMonth.split("-").map((s) => Number(s));
    const {data: user} = useUser();
    const {data: reportList, isPending, isError} = useReports({
        user_id: user?.user_id ?? "",
        date: yearMonth,
    });
    const {openMonthPicker} = useDatePicker();

    const maxPercent = Math.max(...reportList?.map((l) => Number(l.rate)) ?? []);

    const addMonth = () => {
        setYearMonth(month >= 12 ? `${year + 1}-${1}` : `${year}-${month + 1}`);
    };

    const subtractMonth = () => {
        setYearMonth(month <= 1 ? `${year - 1}-${12}` : `${year}-${month - 1}`);
    };

    const pickMonth = async () => {
        const newMonth = await openMonthPicker(yearMonth);
        setYearMonth(newMonth.format("YYYY-MM"));
    };

    return {
        yearMonth,
        year,
        month,
        reportList,
        isPending,
        isError,
        openMonthPicker,
        maxPercent,
        addMonth,
        subtractMonth,
        pickMonth
    }
}

export default useReport;
