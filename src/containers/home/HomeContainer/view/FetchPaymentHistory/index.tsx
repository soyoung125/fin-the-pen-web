import { Button, IconButton, Stack, Typography } from "@mui/material";
import ClearIcon from '@mui/icons-material/Clear';
import moment from "moment";
import { useState } from "react";
import { useAppSelector } from "../../../../../app/redux/hooks";
import { selectGuestMode } from "../../../../../app/redux/slices/commonSlice";
import { fetchGetTransavrionList } from "../../../../../app/api/API";
import RoundedPaper from "../../../../../components/common/RoundedPaper";
import InputForm from "../../../common/TopBar/buttons/SearchButton/PaymentHistoryModal/InputForm";
import OptionSelector from "../../../common/TopBar/buttons/SearchButton/PaymentHistoryModal/OptionSelector";

function FetchPaymentHistory() {
    const [selected, setSelected] = useState<string | null>(null);
    const [form, setForm] = useState({
        organization: '0002',
        account: '',
        connectedId: '',
        startDate: moment().format('YYYY-MM-DD'),
        endDate: '',
        orderBy: '0',
    })
    const guestMode = useAppSelector(selectGuestMode);

    const changeDetailInfo = (e: { target: { id: string; value: string | number; }; }) => {
        setForm({ ...form, [e.target.id]: e.target.value })
    }

    const changeStartAndEndDate = (date: string) => {
        setForm({ ...form, startDate: date, endDate: date })
    }

    const handleSubmit = async () => {
        if (selected === 'card') {
            alert('카드로 거래 내역 조회')
        } else if(selected === 'account') {
            if (!guestMode) {
                const result = await fetchGetTransavrionList({...form, endDate: form.endDate.replaceAll('-', ''), startDate: form.startDate.replaceAll('-', '')});
                console.log(result);
            } else {
                console.log({...form, endDate: form.endDate.replaceAll('-', ''), startDate: form.startDate.replaceAll('-', '')});
            }
        }
    }

    return (
        <Stack p={2} spacing={1}>
            <Typography variant="h6" sx={{ fontWeight: 'bold', textAlign: 'center', marginTop: 3, marginBottom: 1 }}>My 결제 내역 조회</Typography>
            <RoundedPaper my={1}>
                {selected === 'account' ?
                    <InputForm form={form} changeDetailInfo={changeDetailInfo} changeStartAndEndDate={changeStartAndEndDate} />
                    : <OptionSelector selected={selected} changeOption={(option) => setSelected(option)} />
                }
                <Button variant="contained" fullWidth sx={{ marginTop: 2 }} onClick={handleSubmit}>조회하기</Button>
            </RoundedPaper>
        </Stack>
    );
}

export default FetchPaymentHistory;
