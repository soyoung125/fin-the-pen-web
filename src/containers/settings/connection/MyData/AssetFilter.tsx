import RoundedPaper from "@components/common/RoundedPaper";
import { Box, Button, FormControl, InputAdornment, OutlinedInput, Stack, TextField, Grid } from "@mui/material";
import { OrganizationInterface } from "@type/common";
import styled from "styled-components";
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined';
import PeriodInput from "@components/fetchPaymentHistory/PeriodInput";
import OrderByInput from "@components/fetchPaymentHistory/OrderByInput";
import { useState } from "react";
import moment from "moment";

interface AssetFilter {
    selected: OrganizationInterface;
    selectedAccount: { name: string, account: string };
    handleClickSerch: (value: {startDate: string, endDate: string, orderBy: string}) => void;
}

const Img = styled('img')({
    padding: '10px',
    borderRadius: '50%',
    border: '1px solid var(--gray-scale-010, #DEE0E3)',
    display: 'block',
    width: '80px',
    height: '80px',
});

function AssetFilter({ selected, selectedAccount, handleClickSerch }: AssetFilter) {
    const [isSelectStartDate, setIsSelectStartDate] = useState(false);
    const [form, setForm] = useState({ startDate: moment().format('YYYY/MM/DD'), endDate: '', orderBy: "0" });

    const handleChangeForm = (state: { target: { id: string, value: string } }) => {
        setForm({ ...form, [state.target.id]: state.target.value });
    }

    const changeStartAndEndDate = (date: string) => {
        setForm({ ...form, startDate: date, endDate: date });
    };

    const changeDate = (date: string) => {
        if (isSelectStartDate) {
            if (moment(date).isAfter(form.endDate)) {
                changeStartAndEndDate(date);
            } else {
                handleChangeForm({ target: { id: "startDate", value: date } });
            }
        } else {
            if (moment(date).isBefore(form.startDate)) {
                changeStartAndEndDate(date);
            } else {
                handleChangeForm({ target: { id: "endDate", value: date } });
            }
        }
        setIsSelectStartDate(!isSelectStartDate);
    };

    return (
        <RoundedPaper my={0}>
            <Stack alignItems="center" spacing={1.5}>
                <Img alt={selected.name} src={selected.icon} />
                <Box sx={{ fontSize: '20px', fontWeight: 500 }}>{selected.name}</Box>
                <FormControl fullWidth>
                    <OutlinedInput
                        id="name"
                        disabled
                        startAdornment={<InputAdornment position="start">{selectedAccount.name}</InputAdornment>}
                        value={selectedAccount.account}
                        size="small"
                        inputProps={{
                            style: { textAlign: 'right' },
                        }} />
                </FormControl>

                <PeriodInput startDate={form.startDate} endDate={form.endDate} isSelectStartDate={isSelectStartDate} changeDate={changeDate} />

                <OrderByInput selected={form.orderBy} changeDetailInfo={handleChangeForm} />

                <Button fullWidth variant='contained' onClick={() => handleClickSerch(form)}>확인</Button>
            </Stack>
        </RoundedPaper>
    );
}

export default AssetFilter;
