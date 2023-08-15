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
    const [selected, setSelected] = useState<string>('card');
    const [showInput, setShowInput] = useState(false);
    const [form, setForm] = useState({
        organization: '',
        account: '',
        cardNo: '',
        connectedId: '',
        startDate: moment().format('YYYY-MM-DD'),
        endDate: '',
        orderBy: '0',
        inquiryType: '0',
    })
    const guestMode = useAppSelector(selectGuestMode);
    const title: { [key: string]: string } = { card: '카드 승인내역 조회', account: '은행/계좌 거래내역 조회' };

    const changeDetailInfo = (e: { target: { id: string; value: string | number; }; }) => {
        setForm({ ...form, [e.target.id]: e.target.value })
    }

    const changeStartAndEndDate = (date: string) => {
        setForm({ ...form, startDate: date, endDate: date })
    }

    const changeShowInput = () => {
        setShowInput(true);
    }

    const handleSubmit = async () => {
        if (selected === 'card') {
            console.log(form);
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
            <Typography variant="h6" sx={{ fontWeight: 'bold', textAlign: 'center', marginTop: 3, marginBottom: 1 }}>{showInput ? title[selected] : 'My 결제 내역 조회' }</Typography>

            <RoundedPaper my={1}>
                {showInput ?
                    <InputForm selected={selected} form={form} changeDetailInfo={changeDetailInfo} changeStartAndEndDate={changeStartAndEndDate} />
                    : <OptionSelector selected={selected} changeOption={(option) => setSelected(option)} />
                }
                <Button variant="contained" fullWidth sx={{ marginTop: 2 }} onClick={showInput ? handleSubmit : changeShowInput}>{showInput ? '조회하기' : '다음'}</Button>
            </RoundedPaper>
        </Stack>
    );
}

export default FetchPaymentHistory;
