import {Stack, Typography} from "@mui/material";

export interface ReportTitleProps {
    year: string;
    month: string;
    amount: number;
}

function ReportTitle({amount, year, month}: ReportTitleProps) {
    return (
        <Stack>
            <Typography fontSize="16px">
                {year}년 {month}월
            </Typography>
            <Typography fontSize="18px">
                오늘까지 총{" "}
                <span style={{color: "#735BF2", fontWeight: 700}}>
          {amount.toLocaleString()}
        </span>
                원 소비했어요
            </Typography>
        </Stack>
    );
}

export default ReportTitle;
