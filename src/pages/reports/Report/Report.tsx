import {useReport} from "@app/tanstack-query/useReport.ts";
import {useSelector} from "react-redux";
import {selectMonth} from "@redux/slices/scheduleSlice.tsx";
import {useUser} from "@app/tanstack-query/useUser.ts";
import ReportTitle from "@pages/reports/Report/components/ReportTitle";
import {Stack} from "@mui/material";
import PredictBox from "@pages/reports/Report/components/PredictBox";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import SettingsIcon from "@mui/icons-material/Settings";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import ReportBox from "@pages/reports/Report/components/ReportBox";
import {PATH} from "@constants/path.ts";

function Report() {
    const selectedMonth = useSelector(selectMonth);
    const [year, month] = selectedMonth.split("-");
    const {data: user} = useUser();
    const {data} = useReport({
        user_id: user?.user_id ?? "",
        date: selectedMonth,
    });

    return <Stack bgcolor="#F7F7F8" gap="24px">
        <ReportTitle year={year} month={month} amount={333000000}/>
        <Stack direction="row" gap="10px">
            <PredictBox
                title="이번 달 목표 지출"
                titleIcon={<AccountBalanceWalletIcon/>}
                amount={1200000}
                navigateIcon={<SettingsIcon/>}
            />
            <PredictBox
                title="사용 가능 금액"
                titleIcon={<InfoOutlinedIcon/>}
                amount={579000}
                navigateIcon={<InfoOutlinedIcon/>}
            />
        </Stack>
        <ReportBox
            title="월간 소비 리포트"
            navigateTo={PATH.reportMonthDetail}
            content={<div>{JSON.stringify(data)}</div>}
        />
        <ReportBox
            title="소비 예측 리포트"
            navigateTo="/somewhere"
            content={<div>막대 그래프 미구현</div>}
        />
    </Stack>;
}

export default Report;
