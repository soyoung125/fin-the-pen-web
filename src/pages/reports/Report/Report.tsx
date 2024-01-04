import {Button} from "@mui/material";
import {useReport} from "@app/tanstack-query/useReport.ts";
import {useSelector} from "react-redux";
import {selectMonth} from "@redux/slices/scheduleSlice.tsx";
import {useUser} from "@app/tanstack-query/useUser.ts";

function Report() {
    const month = useSelector(selectMonth);
    const {data: user} = useUser();
    const {data} = useReport({
        user_id: user?.user_id ?? "",
        date: month,
    });

    console.log(data);

    return <>{JSON.stringify(data)}</>;
}

export default Report;
